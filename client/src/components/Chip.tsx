import clsx from 'clsx';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  variant?: Variant;
  backgroundColor?: string;
};

type Variant = 'default' | 'outlined';

const Chip = (props: Props) => {
  const { children, variant = 'default', backgroundColor } = props;

  const variantStyles = {
    default: `bg-primary-500 text-temp-900`,
    outlined: `border border-primary-500 text-white`,
  };

  return (
    <div
      className={clsx(
        'w-fit rounded-full px-5 py-2 font-semibold',
        variantStyles[variant]
      )}
    >
      {children}
    </div>
  );
};

export default Chip;
