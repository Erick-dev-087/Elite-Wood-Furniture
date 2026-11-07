'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { ComponentProps } from 'react';
import { usePageTransition } from '@/components/ui/PageTransition';

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'onNavigate' | 'transitionTypes'> & {
  href: string;
};

export default function TransitionLink({ href, replace, scroll, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const { navigationType } = usePageTransition();

  return (
    <Link
      {...props}
      href={href}
      replace={replace}
      scroll={scroll}
      onNavigate={(event) => {
        const type = navigationType(href);
        if (!type) return;
        event.preventDefault();
        const options = { scroll, transitionTypes: [type] };
        if (replace) router.replace(href, options);
        else router.push(href, options);
      }}
    />
  );
}
