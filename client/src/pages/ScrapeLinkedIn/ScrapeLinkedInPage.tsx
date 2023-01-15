import { useEffect, useState } from 'react';
import HorizontalDivider from '../../components/HorizontalDivider';
import Posting, { TPosting } from '../../components/Posting';
import VerticalDivider from '../../components/VerticalDivider';
import SavePostingForm from './components/SavePostingForm';
import ScrapeLinkedInSearchForm from './components/ScrapeLinkedInSearchForm';
import ScrapeSpecificLinkedInUrlForm from './components/ScrapeLinkedInSpecificUrlForm';

const ScrapeLinkedInPage = () => {
  const [scrapedPostings, setScrapedPostings] = useState<TPosting[]>([]);

  return (
    <div className="flex w-full flex-col gap-8 bg-temp-800 p-8">
      <div className="flex gap-8">
        <ScrapeLinkedInSearchForm setScrapedPostings={setScrapedPostings} />
        <VerticalDivider />
        <ScrapeSpecificLinkedInUrlForm
          setScrapedPostings={setScrapedPostings}
        />
      </div>

      {scrapedPostings.length > 0 && (
        <>
          <HorizontalDivider />
          <ul className="flex flex-col gap-8">
            {scrapedPostings.map((posting, index) => (
              <li key={index}>
                <div className="flex w-full flex-col gap-6 bg-temp-900 p-10">
                  <Posting posting={posting} />
                  <HorizontalDivider />
                  <SavePostingForm posting={posting} />
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ScrapeLinkedInPage;
