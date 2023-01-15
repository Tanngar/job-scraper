import clsx from 'clsx';
import { ReactNode } from 'react';
import Loader from './Loader';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
}

type Variant = 'default' | 'outlined' | 'text';

const Button = (props: Props) => {
  const {
    children,
    icon,
    fullWidth = false,
    isLoading = false,
    isDisabled = false,
    onClick,
    type = 'button',
  } = props;

  const isIconOnly = !children && icon;

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (isDisabled) {
      e.preventDefault();
    }
  }

  return (
    <button
      className={clsx(
        'flex h-fit items-center justify-center gap-2 whitespace-nowrap rounded-sm font-semibold shadow-lg',
        isDisabled
          ? 'cursor-default bg-gray-500 text-gray-800'
          : ' cursor-pointer bg-primary-500 text-temp-800 hover:opacity-90',
        fullWidth ? 'w-full' : 'w-fit',
        isIconOnly ? 'p-1 text-xl text-inherit' : 'px-3 py-2'
      )}
      onClick={(e) => handleClick(e)}
      type={type}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {icon}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
