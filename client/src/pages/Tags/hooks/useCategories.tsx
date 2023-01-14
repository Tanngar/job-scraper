import { useEffect, useState, useMemo } from 'react';
import { CategoryColor } from '../../../utils/categoryColors';
import { getCategories } from '../services/getCategories';

type Category = {
  id: string;
  name: string;
  color: CategoryColor;
};

export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchData();
  }, []);

  return { categories };
}
