export const getCategories = async () => {
  const res = await fetch(`http://localhost:3001/api/categories/`);
  return res.json();
};
