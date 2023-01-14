import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Typography from '../../components/Typography/Typography';
import Posting from './components/Posting';
import PostingsList from './components/PostingsList';
import usePostings from './hooks/usePostings';

const PostingsPage = () => {
  const { postings, activePostingId } = usePostings();

  return (
    <div className="w-full">
      {postings.length < 1 ? (
        <div className="flex flex-col justify-center gap-4 bg-temp-800 p-8">
          <Typography variant="title">No job postings found!</Typography>
          <Link to="/add-posting">
            <Button>Add a new job posting</Button>
          </Link>
        </div>
      ) : (
        <div className="flex w-full gap-4">
          <PostingsList postings={postings} activePostingId={activePostingId} />
          <Posting />
        </div>
      )}
    </div>
  );
};

export default PostingsPage;
