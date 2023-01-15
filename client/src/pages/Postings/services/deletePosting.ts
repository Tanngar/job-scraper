export const deletePosting = async (id: number) => {
  return fetch(`${import.meta.env.VITE_API_URL}postings/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};
