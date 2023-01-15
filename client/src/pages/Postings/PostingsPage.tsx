import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Posting from '../../components/Posting';
import Typography from '../../components/Typography';
import PostingsList from './components/PostingsList';
import usePostings from './hooks/usePostings';

const PostingsPage = () => {
  const { postings, activePostingId, fetchPostings } = usePostings();

  const activePosting = postings.filter(
    (posting) => posting.id === activePostingId
  )[0];

  return (
    <div className="w-full">
      {postings.length < 1 ? (
        <div className="flex flex-col justify-center gap-4 bg-temp-800 p-8">
          <Typography variant="title">No job postings found!</Typography>
          <div className="flex w-full items-center gap-4">
            <Link to="/add-posting">
              <Button>Add a new job posting</Button>
            </Link>
            <Typography variant="text">OR</Typography>
            <Link to="/">
              <Button>Scrape LinkedIn</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex w-full gap-4">
          <PostingsList
            postings={postings}
            activePostingId={activePostingId}
            fetchPostings={fetchPostings}
          />
          <div className="w-full bg-temp-800 p-10">
            <Posting posting={activePosting} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostingsPage;
