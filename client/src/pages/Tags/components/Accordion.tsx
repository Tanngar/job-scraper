import clsx from 'clsx';
import { Children, ReactNode, useState } from 'react';
import Typography from '../../../components/Typography/Typography';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Button from '../../../components/Button/Button';
import { CategoryColor } from '../../../utils/categoryColors';
import Input from '../../../components/Input';
import HorizontalDivider from '../../../components/HorizontalDivider';
import ColorSwatch from './ColorSwatch';

type Props = {
  children: ReactNode;
  label: string;
  color: CategoryColor;
};

const Accordion = ({ children, label, color }: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const iconStyles = 'text-3xl text-gray-300';

  return (
    <div>
      <div
        className={clsx(
          'flex items-center gap-2 rounded-t-lg border border-gray-600 bg-temp-900 p-4 hover:cursor-pointer'
        )}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex w-full items-center gap-3 capitalize">
          <ColorSwatch color={color} />
          <Typography variant="subtitle">{label}</Typography>
        </div>
        {isCollapsed ? (
          <IoMdArrowDropdown className={iconStyles} />
        ) : (
          <IoMdArrowDropup className={iconStyles} />
        )}
      </div>
      {!isCollapsed && (
        <div className="flex flex-col gap-4 border border-t-0 border-gray-600 bg-temp-800 p-4">
          <div className="flex items-end gap-4">
            <Input name="tag" label="Tag" />
            <Button>Add tag</Button>
          </div>
          <HorizontalDivider />
          {!Children.count(children) ? (
            <Typography variant="caption">
              There are no tags for this category.
            </Typography>
          ) : (
            <div className="flex flex-wrap gap-2">{children}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
