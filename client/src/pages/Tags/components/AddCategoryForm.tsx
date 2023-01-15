import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useState } from 'react';
import { categoryColors } from '../../../utils/categoryColors';
import ColorSwatch from './ColorSwatch';
import Form from '../../../components/Form';
import { addCategory } from '../services/addCategory';

type Props = {
  fetchCategories: () => void;
};

const AddCategoryForm = (props: Props) => {
  const { fetchCategories } = props;

  const firstColor = categoryColors[0];
  const [selectedColor, setSelectedColor] = useState<string>(firstColor);
  const [category, setCategory] = useState('');

  function handleColorSwatchClick(e: React.MouseEvent<HTMLDivElement>) {
    const clickedColor = e.currentTarget.dataset.color;
    if (!clickedColor) return;
    setSelectedColor(clickedColor);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await addCategory(category, selectedColor);
    fetchCategories();
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex gap-2">
        {categoryColors.map((color) => (
          <ColorSwatch
            key={color}
            color={color}
            onClick={(e) => handleColorSwatchClick(e)}
            isActive={selectedColor === color}
          />
        ))}
      </div>
      <Input
        name="category"
        label="Category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button type="submit">Add category</Button>
    </Form>
  );
};

export default AddCategoryForm;
