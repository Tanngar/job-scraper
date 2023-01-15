import { useState } from 'react';
import Alert from '../../../components/Alert';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import Input from '../../../components/Input';
import { TPosting } from '../../../components/Posting';
import Typography from '../../../components/Typography';
import { scrapeSpecificLinkedInUrl } from '../services/scrapeSpecificLinkedInUrl';

type Props = {
  setScrapedPostings: (postings: TPosting[]) => void;
};

const ScrapeSpecificLinkedInUrlForm = (props: Props) => {
  const { setScrapedPostings } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState(
    'https://www.linkedin.com/jobs/view/3433511938/?eBP=CwEAAAGFtAq4WqSEVxYhfkGxysBHHdO97b8-nK0lrEcC-0JENQ3OgoU4cMQf3C317M68e9VZfLB-5IrWiPMriEPzrJp9lczM9xn-sCJ-HRecrmQXG-U3cZ11sd7dteOwQXtQquH0pDOZ_cbUFk8DmEMT5YNX11RekOqTk_XzoefvKIjaBR1xA0sY5fwrmbtYsKev8zRfy67hDLWKH2qwg57AsTMbEVCWN1EEUpD3A3eGcj15zLT8ZCIW2aAkVZSWpvny2Ls0u_c_9VsnxGjgkRox0iL92XCS6AydODoFsmx5XfNPgpVJLw9AZ9teIOHmpXrZO8M2tHFxKO4bPnv-eEI1mGevPj_3phSys_ydLTGw2g7loRNWhQFcFgpw9UdmIMdEjOjZwLgCqeM7scKCS5kZ&recommendedFlavor=SCHOOL_RECRUIT&refId=PVP2TmB1ZegO9Yvc9m6Vlw%3D%3D&trackingId=UO2qadvJVO%2BAEYGbrRNDFw%3D%3D&trk=flagship3_search_srp_jobs'
  );
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const res: {
      data: TPosting[];
      error: string;
    } = await scrapeSpecificLinkedInUrl(url);

    if (res.error) {
      setError(res.error);
      setIsLoading(false);
      return;
    }

    setScrapedPostings(res.data);
    setIsLoading(false);
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Typography variant="title">Scrape specific URL</Typography>
      <Input
        name="url"
        label="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        isRequired
      />
      <Button type="submit" isLoading={isLoading}>
        Scrape URL
      </Button>
      {error && <Alert>{error}</Alert>}
    </Form>
  );
};

export default ScrapeSpecificLinkedInUrlForm;
