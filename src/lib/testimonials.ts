import type { Testimonial } from '@/lib/types';

// Development copy supplied for the layout preview. These are not verified
// reviews. Replace this source with approved CMS records before publishing.
export const developmentTestimonials: readonly Testimonial[] = [
  {
    id: 'sample-sofa-purchase',
    quote:
      "The sofa has completely changed how our living room feels. It's comfortable, beautifully finished, and exactly what we wanted for our home.",
    attribution: 'A happy customer',
    category: 'Sofa purchase',
    isPlaceholder: true,
  },
  {
    id: 'sample-bed-purchase',
    quote:
      'I wanted something that would look good in the bedroom without compromising on comfort. The bed turned out even better than I had imagined.',
    attribution: 'A happy customer',
    category: 'Bed purchase',
    isPlaceholder: true,
  },
  {
    id: 'sample-customer-experience',
    quote:
      "From choosing the design to getting the furniture delivered, the experience was smooth. It's nice finding furniture that feels made for your space.",
    attribution: 'A happy customer',
    category: 'Customer experience',
    isPlaceholder: true,
  },
];
