import Image from 'next/image';
import TransitionLink from '@/components/ui/TransitionLink';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: { pixels: 60, classes: 'h-[60px] w-[60px]' },
  md: { pixels: 80, classes: 'h-16 w-16 sm:h-20 sm:w-20' },
  lg: { pixels: 96, classes: 'h-24 w-24' },
};

export default function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  const dimensions = sizes[size];

  return (
    <TransitionLink
      href="/"
      aria-label="Elite Wood & Furniture — Home"
      className={`inline-flex shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E51B24] ${className}`}
    >
      <Image
        src="/images/Logo.jpg"
        alt="Elite Wood & Furniture"
        width={200}
        height={200}
        sizes={`${dimensions.pixels}px`}
        className={`${dimensions.classes} object-contain`}
      />
    </TransitionLink>
  );
}
