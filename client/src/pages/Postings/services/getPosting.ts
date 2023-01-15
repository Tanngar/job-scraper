export const getPosting = async (id: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/postings/${id}`);
  return res.json();
};
