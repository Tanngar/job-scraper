import { useEffect, useState, useMemo } from 'react';
import { CategoryColor } from '../../../utils/categoryColors';
import { getCategories } from '../services/getCategories';

export type Category = {
  id: string;
  name: string;
  color: CategoryColor;
};

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const data = await getCategories();
    setCategories(data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, fetchCategories };
}
