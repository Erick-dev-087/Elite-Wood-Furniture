'use client';

import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import type { Product } from '@/lib/types';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface CartItem {
  product: Product;
  quantity: number;
  cushionType?: 'hd' | 'spring';
  cushionColor?: string;
  additionalRequests?: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; cushionType?: string } }
  | {
      type: 'UPDATE_QUANTITY';
      payload: { productId: string; cushionType?: string; quantity: number };
    }
  | {
      type: 'UPDATE_ITEM_OPTIONS';
      payload: {
        productId: string;
        oldCushionType?: string;
        cushionType?: 'hd' | 'spring';
        cushionColor?: string;
        additionalRequests?: string;
      };
    }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'HYDRATE'; payload: CartItem[] };

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, cushionType?: string) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    cushionType?: string,
  ) => void;
  updateItemOptions: (
    productId: string,
    options: {
      oldCushionType?: string;
      cushionType?: 'hd' | 'spring';
      cushionColor?: string;
      additionalRequests?: string;
    },
  ) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = 'elite-cart';

/** Match a cart item by product id + cushionType combo */
function matchItem(
  item: CartItem,
  productId: string,
  cushionType?: string,
): boolean {
  return (
    item.product.id === productId &&
    (item.cushionType ?? undefined) === (cushionType ?? undefined)
  );
}

function persistItems(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage full or unavailable – silently ignore
  }
}

function loadItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch {
    // Corrupt data – ignore
  }
  return [];
}

/* ------------------------------------------------------------------ */
/*  Reducer                                                            */
/* ------------------------------------------------------------------ */

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const incoming = action.payload;
      const existingIdx = state.items.findIndex((i) =>
        matchItem(i, incoming.product.id, incoming.cushionType),
      );

      let newItems: CartItem[];
      if (existingIdx >= 0) {
        // Same product + cushionType → increment quantity
        newItems = state.items.map((item, idx) =>
          idx === existingIdx
            ? { ...item, quantity: item.quantity + incoming.quantity }
            : item,
        );
      } else {
        newItems = [...state.items, incoming];
      }

      persistItems(newItems);
      return { ...state, items: newItems };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(
        (i) => !matchItem(i, action.payload.productId, action.payload.cushionType),
      );
      persistItems(newItems);
      return { ...state, items: newItems };
    }

    case 'UPDATE_QUANTITY': {
      const { productId, cushionType, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter(
          (i) => !matchItem(i, productId, cushionType),
        );
        persistItems(newItems);
        return { ...state, items: newItems };
      }
      const newItems = state.items.map((item) =>
        matchItem(item, productId, cushionType)
          ? { ...item, quantity }
          : item,
      );
      persistItems(newItems);
      return { ...state, items: newItems };
    }

    case 'UPDATE_ITEM_OPTIONS': {
      const { productId, oldCushionType, ...options } = action.payload;
      const newItems = state.items.map((item) =>
        matchItem(item, productId, oldCushionType)
          ? { ...item, ...options }
          : item,
      );
      persistItems(newItems);
      return { ...state, items: newItems };
    }

    case 'CLEAR_CART': {
      persistItems([]);
      return { ...state, items: [] };
    }

    case 'TOGGLE_CART':
      return { ...state, isOpen: !state.isOpen };

    case 'OPEN_CART':
      return { ...state, isOpen: true };

    case 'CLOSE_CART':
      return { ...state, isOpen: false };

    case 'HYDRATE':
      return { ...state, items: action.payload };

    default:
      return state;
  }
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  // Hydrate from localStorage on mount (client only)
  useEffect(() => {
    const stored = loadItems();
    if (stored.length > 0) {
      dispatch({ type: 'HYDRATE', payload: stored });
    }
  }, []);

  /* ---- Actions ---- */

  const addItem = useCallback(
    (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item }),
    [],
  );

  const removeItem = useCallback(
    (productId: string, cushionType?: string) =>
      dispatch({ type: 'REMOVE_ITEM', payload: { productId, cushionType } }),
    [],
  );

  const updateQuantity = useCallback(
    (productId: string, quantity: number, cushionType?: string) =>
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { productId, cushionType, quantity },
      }),
    [],
  );

  const updateItemOptions = useCallback(
    (
      productId: string,
      options: {
        oldCushionType?: string;
        cushionType?: 'hd' | 'spring';
        cushionColor?: string;
        additionalRequests?: string;
      },
    ) =>
      dispatch({
        type: 'UPDATE_ITEM_OPTIONS',
        payload: { productId, ...options },
      }),
    [],
  );

  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);
  const toggleCart = useCallback(() => dispatch({ type: 'TOGGLE_CART' }), []);
  const openCart = useCallback(() => dispatch({ type: 'OPEN_CART' }), []);
  const closeCart = useCallback(() => dispatch({ type: 'CLOSE_CART' }), []);

  /* ---- Computed ---- */

  const itemCount = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items],
  );

  const subtotal = useMemo(
    () =>
      state.items.reduce((sum, i) => {
        const price = i.product.price ?? 0;
        return price > 0 ? sum + price * i.quantity : sum;
      }, 0),
    [state.items],
  );

  /* ---- Value ---- */

  const value = useMemo<CartContextValue>(
    () => ({
      items: state.items,
      isOpen: state.isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      updateItemOptions,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
    }),
    [
      state.items,
      state.isOpen,
      itemCount,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      updateItemOptions,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a <CartProvider>');
  }
  return ctx;
}
