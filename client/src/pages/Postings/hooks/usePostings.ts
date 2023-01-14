import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostingWithId } from '../components/Posting';
import { getPostings } from '../services/getPostings';

export default function usePostings() {
  const { id } = useParams();
  const [activePostingId, setActivePostingId] = useState<number | null>(null);
  const [postings, setPostings] = useState<PostingWithId[]>([]);

  useEffect(() => {
    fetchData();

    async function fetchData() {
      const data = await getPostings();
      setPostings(data);
      setActivePostingId(data[0].id);
    }
  }, []);

  useEffect(() => {
    if (!id) return;
    setActivePostingId(parseInt(id));
  }, [id]);

  // const handleDeletePosting = (id: string) => {
  //   const updatedPostings = postings.filter((posting) => posting.id !== id);
  //   setPostings(updatedPostings);
  // };

  return { postings, activePostingId };
}
