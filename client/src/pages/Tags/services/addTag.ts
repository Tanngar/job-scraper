export const addTag = async (text: string, categoryId: string) => {
  await fetch(`${import.meta.env.VITE_API_URL}/tags/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, type: 'Word', categoryId }),
  });
};
