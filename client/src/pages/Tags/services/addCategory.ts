export const addCategory = async (category: string, color: string) => {
  await fetch(`${import.meta.env.VITE_API_URL}/categories/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ category, color }),
  });
};
