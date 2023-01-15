import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostingWithId } from '../../../components/Posting';
import { getPostings } from '../services/getPostings';

export default function usePostings() {
  const { id } = useParams();
  const [activePostingId, setActivePostingId] = useState<number>(0);
  const [postings, setPostings] = useState<PostingWithId[]>([]);

  async function fetchPostings() {
    const data = await getPostings();
    setPostings(data);
    if (!data) return;
    setActivePostingId(data[0].id);
  }

  useEffect(() => {
    fetchPostings();
  }, []);

  useEffect(() => {
    if (!id) return;
    setActivePostingId(parseInt(id));
  }, [id]);

  async function updatePostings(postings: PostingWithId[]) {
    await setPostings(postings);
  }

  return { postings, activePostingId, fetchPostings };
}
