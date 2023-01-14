import { ReactNode } from 'react';
import clsx from 'clsx';

type Props = {
  children: ReactNode;
  variant: Variant;
};

type Variant = 'title' | 'subtitle' | 'text' | 'caption';

const Typography = ({ children, variant }: Props) => {
  const variantStyles = {
    title: 'font-title text-2xl text-gray-300 font-bold',
    subtitle: 'text-base font-semibold text-white',
    text: 'font-body text-sm leading-6 text-gray-400',
    caption: 'font-body text-xs text-white text-gray-400',
  };

  const variantHTMLTag = {
    title: 'h1',
    subtitle: 'h2',
    text: 'p',
    caption: 'p',
  };

  return <div className={variantStyles[variant]}>{children}</div>;
};

export default Typography;
