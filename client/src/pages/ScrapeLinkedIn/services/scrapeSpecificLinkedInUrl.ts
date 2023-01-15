export const scrapeSpecificLinkedInUrl = async (url: string) => {
  return fetch('http://localhost:3001/api/scrapers/linkedin/url', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  }).then((res) => res.json());
};
