import { TPosting } from '../components/Posting';

export const addPosting = async (posting: TPosting) => {
  return fetch(`${import.meta.env.VITE_API_URL}/postings`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posting),
  }).then((res) => res.json());
};
