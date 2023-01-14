import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const HorizontalDivider = ({ children: child }: Props) => {
  const baseStyle = 'h-px w-full bg-gray-600 border-none';

  const DividerWithLabel = (
    <div className="flex items-center">
      <hr className={baseStyle} />
      <div className="mx-4 min-w-fit text-white">{child}</div>
      <hr className={baseStyle} />
    </div>
  );

  const DividerWithoutLabel = (
    <div className="flex items-center">
      <hr className={baseStyle} />
    </div>
  );

  return child ? DividerWithLabel : DividerWithoutLabel;
};

export default HorizontalDivider;
