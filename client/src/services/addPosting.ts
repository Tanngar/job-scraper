import { TPosting } from '../components/Posting';

export const addPosting = async (posting: TPosting) => {
  return fetch('http://localhost:3001/api/postings', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(posting),
  }).then((res) => res.json());
};
