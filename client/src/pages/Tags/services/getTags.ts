export const getTags = async () => {
  const res = await fetch(`http://localhost:3001/api/tags/`);
  return res.json();
};
