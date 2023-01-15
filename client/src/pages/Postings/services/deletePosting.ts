export const deletePosting = async (id: number) => {
  return fetch(`http://localhost:3001/api/postings/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};
