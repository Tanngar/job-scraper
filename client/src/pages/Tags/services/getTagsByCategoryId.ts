export const getTags = async (categoryId: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/tags/`);
  return res.json();
};
