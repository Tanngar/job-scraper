import Chip from '../../components/Chip';
import Typography from '../../components/Typography';
import Accordion from './components/Accordion';
import AddCategoryForm from './components/AddCategoryForm';
import useCategories from './hooks/useCategories';
import useTags from './hooks/useTags';

const TagsPage = () => {
  const { tags, fetchTags } = useTags();
  const { categories, fetchCategories } = useCategories();

  return (
    <div className="w-1/2 bg-temp-800 p-8">
      <div className="flex flex-col gap-8">
        <AddCategoryForm fetchCategories={fetchCategories} />
        {categories.length > 0 && (
          <div className="flex flex-col gap-2">
            <Typography variant="title">Your categories</Typography>
            <ul className="flex flex-col gap-4">
              {categories.map((category) => (
                <li key={category.id}>
                  <Accordion
                    category={category}
                    label={category.name}
                    color={category.color}
                    fetchTags={fetchTags}
                  >
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
