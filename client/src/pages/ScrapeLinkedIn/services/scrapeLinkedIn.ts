export const scrapeLinkedIn = async (position: string, location: string) => {
  return fetch('http://localhost:3001/api/scrapers/linkedin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ position, location }),
  }).then(async (res) => res.json());
};
