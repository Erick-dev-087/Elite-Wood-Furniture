interface DeliveryStep {
  id: string;
  title: string;
  description: string;
  image: string;
  imagePosition: string;
}

export const deliverySteps: readonly DeliveryStep[] = [
  {
    id: 'browse-enquire',
    title: 'Browse & Enquire',
    description:
      'Pick your items online and send a direct enquiry via WhatsApp with your preferred cushion type, color, and location.',
    image: '/images/hero-sofas.webp',
    imagePosition: '60% 55%',
  },
  {
    id: 'confirm-details',
    title: 'Confirm Details',
    description:
      'Our sales team confirms piece availability, total price, transit schedule, and delivery fee to your doorstep.',
    image: '/images/delivery-bed.webp',
    imagePosition: '50% 45%',
  },
  {
    id: 'protected-dispatch',
    title: 'Protected Dispatch',
    description:
      'Furniture is securely wrapped in protective layers and loaded carefully onto transit vehicles from our Ruiru workshop.',
    image: '/images/delivery-tv-stand.webp',
    imagePosition: '50% 60%',
  },
  {
    id: 'inspect-pay',
    title: 'Inspect & Pay',
    description:
      'Inspect the craft, comfort, and fabric at your home. When you are fully satisfied, pay on delivery via M-Pesa or cash.',
    image: '/images/hero-dining.webp',
    imagePosition: '60% 45%',
  },
];
