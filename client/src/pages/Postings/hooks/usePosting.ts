import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostingWithId } from '../../../components/Posting';
import { getPosting } from '../services/getPosting';
import { getPostings } from '../services/getPostings';

export default function usePosting() {
  const initialValues = {
    companyName: '',
    description: '',
    analyzedDescription: '',
    location: '',
    numOfApplicants: '',
    position: '',
    postedAt: '',
    url: '',
    id: 0,
  };

  const [posting, setPosting] = useState<PostingWithId>(initialValues);

  const { id } = useParams();

  async function fetchData() {
    if (!id) {
      const postings = await getPostings();
      setPosting(postings[0]);
      return;
    }

    getPosting(id).then(setPosting);
  }

  useEffect(() => {
    fetchData();
  });

  return { posting };
}
