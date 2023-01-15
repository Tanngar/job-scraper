import { Link, useParams } from 'react-router-dom';
import { MdMode, MdDelete } from 'react-icons/md';
import clsx from 'clsx';
import Button from '../../../components/Button';
import Typography from '../../../components/Typography';
import { PostingWithId } from '../../../components/Posting';
import PostingsListItem from './PostingsListItem';

type Props = {
  postings: PostingWithId[];
  activePostingId: number;
  fetchPostings: () => void;
};

const PostingsList = (props: Props) => {
  const { postings, activePostingId, fetchPostings } = props;

  return (
    <aside className="max-h-screen w-fit min-w-fit overflow-y-auto bg-temp-800 p-4">
      <ul className="flex max-h-fit flex-col items-center">
        {postings.map((posting) => (
          <PostingsListItem
            key={posting.id}
            posting={posting}
            activePostingId={activePostingId}
            fetchPostings={fetchPostings}
          />
        ))}
      </ul>
    </aside>
  );
};

export default PostingsList;
