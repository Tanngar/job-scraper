import { useState } from 'react';
import Alert from '../../../components/Alert';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import Input from '../../../components/Input';
import { TPosting } from '../../../components/Posting';
import Typography from '../../../components/Typography';
import { scrapeLinkedIn } from '../services/scrapeLinkedIn';

type Props = {
  setScrapedPostings: (postings: TPosting[]) => void;
};

const ScrapeLinkedInSearchForm = (props: Props) => {
  const { setScrapedPostings } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState('web developer');
  const [location, setLocation] = useState('denmark');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);

    const res: {
      data: TPosting[];
      error: string;
    } = await scrapeLinkedIn(position, location);

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
      <Typography variant="title">Scrape LinkedIn's job search</Typography>
      <Input
        name="position"
        label="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        isRequired
      />
      <Input
        name="location"
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button type="submit" isLoading={isLoading}>
        Scrape job search
      </Button>
      {error && <Alert>{error}</Alert>}
    </Form>
  );
};

export default ScrapeLinkedInSearchForm;
