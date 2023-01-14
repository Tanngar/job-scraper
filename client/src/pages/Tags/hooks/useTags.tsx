import { useEffect, useState, useMemo } from 'react';
import { getTags } from '../services/getTags';

type Tag = {
  id: string;
  text: string;
  colour: string;
  category: {
    id: string;
    colour: string;
  };
};

export default function useTags() {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTags();
      setTags(data);
    };

    fetchData();
  }, []);

  // const handleDeletePosting = (id: string) => {
  //   const updatedPostings = postings.filter((posting) => posting.id !== id);
  //   setPostings(updatedPostings);
  // };

  return { tags };
}
