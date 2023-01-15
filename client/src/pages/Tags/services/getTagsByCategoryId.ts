export const getTags = async (categoryId: string) => {
  const res = await fetch(`http://localhost:3001/api/tags/`);
  return res.json();
};
