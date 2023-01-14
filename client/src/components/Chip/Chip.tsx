import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: Variant;
  backgroundColor?: string;
};

type Variant = 'default' | 'outlined';

type Color = 'red';

const Chip = ({ children, variant = 'default', backgroundColor }: Props) => {
  const background =
    backgroundColor === 'red' ? `bg-red-900` : 'bg-primary-500';

  const border =
    backgroundColor === 'red' ? `border-red-900` : 'border-primary-500';

  const variantStyles = {
    default: `${background} text-slate-100 shadow-2md hover:opacity-90`,
    outlined: `border ${border} text-white hover:bg-primary-600`,
  };

  return (
    <div
      className={clsx(
        `bg-[${backgroundColor}]`,
        'w-fit cursor-pointer rounded-full px-5 py-2 font-semibold',
        variantStyles[variant]
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
