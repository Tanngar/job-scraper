export const getCategories = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/categories/`);
  return res.json();
};
