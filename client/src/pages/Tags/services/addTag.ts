export const addTag = async (text: string, categoryId: string) => {
  await fetch('http://localhost:3001/api/tags/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, type: 'Word', categoryId }),
  });
};
