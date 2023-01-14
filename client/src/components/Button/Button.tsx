import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  fullWidth?: boolean;
}

type Variant = 'default' | 'outlined' | 'text' | 'disabled';

const Button = ({
  children,
  variant = 'default',
  icon,
  fullWidth = false,
}: Props) => {
  const isIconOnly = !children && icon;

  const variantStyles = {
    default:
      'shadow-lg bg-primary-500 text-inherit shadow-2xl hover:opacity-90',
    outlined:
      'border-2 border-cyan-900 text-white transition hover:bg-primary-500 hover:text-white',
    text: 'text-white hover:bg-neutral-700',
    disabled: 'cursor-default bg-neutral-700 text-neutral-500',
  };

  return (
    <button
      className={clsx(
        'flex h-fit  cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold text-inherit mix-blend-screen',
        fullWidth ? 'w-full' : 'w-fit',
        isIconOnly ? 'p-1 text-xl text-inherit' : 'px-3 py-2',
        variantStyles[variant]
      )}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
