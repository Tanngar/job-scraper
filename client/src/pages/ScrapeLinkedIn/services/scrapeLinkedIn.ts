export const scrapeLinkedIn = async (position: string, location: string) => {
  return fetch(`${import.meta.env.VITE_API_URL}/scrapers/linkedin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ position, location }),
  }).then(async (res) => res.json());
};
