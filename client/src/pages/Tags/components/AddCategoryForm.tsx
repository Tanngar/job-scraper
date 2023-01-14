import Button from '../../../components/Button/Button';
import Input from '../../../components/Input';
import { useEffect, useState } from 'react';
import { categoryColors } from '../../../utils/categoryColors';
import ColorSwatch from './ColorSwatch';

const AddCategoryForm = () => {
  const firstColor = categoryColors[0];

  const [selectedColor, setSelectedColor] = useState<string>(firstColor);

  function handleColorSwatchClick(e: React.MouseEvent<HTMLDivElement>) {
    const clickedColor = e.currentTarget.dataset.color;
    if (!clickedColor) return;
    setSelectedColor(clickedColor);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <form className="flex flex-col gap-4 bg-temp-800">
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
      <Input name="category" label="Category" />
      <Button type="submit">Add category</Button>
    </form>
  );
};

export default AddCategoryForm;
