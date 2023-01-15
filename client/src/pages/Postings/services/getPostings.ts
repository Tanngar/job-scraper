export const getPostings = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/postings`);
  return res.json();
};
