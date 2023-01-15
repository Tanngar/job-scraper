export const addCategory = async (category: string, color: string) => {
  await fetch('http://localhost:3001/api/categories/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category, color }),
  });
};
