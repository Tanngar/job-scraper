export const scrapeSpecificLinkedInUrl = async (url: string) => {
  return fetch(`${import.meta.env.VITE_API_URL}/scrapers/linkedin/url`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url }),
  }).then((res) => res.json());
};
