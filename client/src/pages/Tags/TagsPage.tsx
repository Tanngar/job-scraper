import clsx from 'clsx';
import { useEffect } from 'react';
import Chip from '../../components/Chip/Chip';
import Input from '../../components/Input';
import Typography from '../../components/Typography/Typography';
import Accordion from './components/Accordion';
import AddCategoryForm from './components/AddCategoryForm';
import useCategories from './hooks/useCategories';
import useTags from './hooks/useTags';

const TagsPage = () => {
  const { tags } = useTags();
  const { categories } = useCategories();

  return (
    <div className="w-1/2 bg-temp-800 p-8">
      <div className="flex flex-col gap-8">
        <AddCategoryForm />
        {categories.length > 0 && (
          <div className="flex flex-col gap-2">
            <Typography variant="title">Your categories</Typography>
            <ul className="flex flex-col gap-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Accordion label={category.name} color={category.color}>
                    {tags
                      .filter((tag) => tag.category.id === category.id)
                      .map((tag) => (
                        <Chip key={tag.id} variant="outlined">
                          {tag.text}
                        </Chip>
                      ))}
                  </Accordion>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TagsPage;
