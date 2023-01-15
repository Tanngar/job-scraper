import { useEffect, useState, useMemo } from 'react';
import { getTags } from '../services/getTags';

export type Tag = {
  text: string;
  category: {
    id: string;
    color: string;
  };
};

export interface TagWithId extends Tag {
  id: string;
}

export default function useTags() {
  const [tags, setTags] = useState<TagWithId[]>([]);

  async function fetchTags() {
    const data = await getTags();
    setTags(data);
  }

  useEffect(() => {
    fetchTags();
  }, []);

  return { tags, fetchTags };
}
