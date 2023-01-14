import clsx from 'clsx';
import { CategoryColor } from '../../../utils/categoryColors';

type Props = {
  color: CategoryColor;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const ColorSwatch = ({ color, isActive = false, onClick }: Props) => {
  return (
    <div
      className={clsx(
        'cursor-pointer rounded-sm border border-gray-600 bg-temp-800 p-1',
        isActive && 'border-primary-600'
      )}
      data-color={color}
      onClick={onClick}
    >
      <div className={clsx('h-5 w-10 rounded-sm', color)} />
    </div>
  );
};

export default ColorSwatch;
