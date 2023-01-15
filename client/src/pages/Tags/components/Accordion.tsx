import clsx from 'clsx';
import { Children, ReactNode, useState } from 'react';
import Typography from '../../../components/Typography';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import Button from '../../../components/Button';
import { CategoryColor } from '../../../utils/categoryColors';
import Input from '../../../components/Input';
import HorizontalDivider from '../../../components/HorizontalDivider';
import ColorSwatch from './ColorSwatch';
import Form from '../../../components/Form';
import { addTag } from '../services/addTag';
import { Category } from '../hooks/useCategories';
import { Tag } from '../hooks/useTags';

type Props = {
  category: Category;
  children: ReactNode;
  label: string;
  color: CategoryColor;
  fetchTags: () => void;
};

const Accordion = (props: Props) => {
  const { category, children, fetchTags } = props;
  const { id, name, color } = category;

  const [tag, setTag] = useState('');

  const [isCollapsed, setIsCollapsed] = useState(true);

  const iconStyles = 'text-3xl text-gray-300';

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await addTag(tag, id);
    setTag('');
    fetchTags();
  }

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
          <Typography variant="subtitle">{name}</Typography>
        </div>
        {isCollapsed ? (
          <IoMdArrowDropdown className={iconStyles} />
        ) : (
          <IoMdArrowDropup className={iconStyles} />
        )}
      </div>
      {!isCollapsed && (
        <div className="flex flex-col gap-4 border border-t-0 border-gray-600 bg-temp-800 p-4">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Input
              name="tag"
              label="Tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
            <Button type="submit">Add tag</Button>
          </Form>
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
