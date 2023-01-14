export const getPosting = async (id: string) => {
  const res = await fetch(`http://localhost:3001/api/postings/${id}`);
  return res.json();
};
