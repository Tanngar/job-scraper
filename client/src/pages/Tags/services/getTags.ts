export const getTags = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/tags/`);
  return res.json();
};
