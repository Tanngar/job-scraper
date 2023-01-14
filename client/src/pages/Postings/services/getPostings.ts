export const getPostings = async () => {
  const res = await fetch('http://localhost:3001/api/postings');
  return res.json();
};
