import { useState } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import Typography from '../../components/Typography/Typography';
import { scrape } from './scrape';

const ScrapeLinkedIn = () => {
  const [position, setPosition] = useState('web developer');
  const [location, setLocation] = useState('denmark');
  const [data, setData] = useState([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await scrape(position, location);
    console.log('res', res);
    setData(res);
  }

  return (
    <div className="flex w-1/2 flex-col bg-temp-800 p-8">
      <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
        <Typography variant="title">Scrape LinkedIn</Typography>
        <Input
          name="position"
          label="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <Input
          name="location"
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button type="submit">Scrape</Button>
      </form>
      {data.length > 0 && (
        <ul>
          {data.map((posting, i) => (
            <li
              key={i}
              className="mb-8 flex flex-col gap-6 bg-temp-900 p-4 last:mb-0"
            >
              <div className="flex flex-col gap-1">
                <Typography variant="title">{posting.companyName}</Typography>
                <Typography variant="subtitle">{posting.position}</Typography>
                <Typography variant="caption">{posting.location}</Typography>
                <Typography variant="caption">{posting.postedAt}</Typography>
                <Typography variant="caption">
                  {posting.numOfApplicants}
                </Typography>
                <a href={posting.url}>Link</a>
              </div>
              <Typography variant="text">
                <div
                  dangerouslySetInnerHTML={{ __html: posting.description }}
                />
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScrapeLinkedIn;
