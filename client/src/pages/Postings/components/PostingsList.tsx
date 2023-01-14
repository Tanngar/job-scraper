import { Link, useParams } from 'react-router-dom';
import { MdMode, MdDelete } from 'react-icons/md';
import clsx from 'clsx';
import Button from '../../../components/Button/Button';
import Typography from '../../../components/Typography/Typography';
import { PostingWithId } from './Posting';

type Props = {
  postings: PostingWithId[];
  activePostingId: number;
};

const PostingsList = ({ postings, activePostingId }: Props) => {
  return (
    <aside className="w-full basis-1/3 bg-temp-800 p-4">
      <ul className="flex flex-col items-center">
        {postings.map((posting) => (
          <li
            key={posting.id}
            className={clsx(
              'mb-2 flex w-full rounded-md bg-temp-800 last:mb-0 hover:bg-temp-700',
              posting.id === activePostingId && 'bg-temp-500'
            )}
          >
            <Link className="flex w-full p-4" to={`/postings/${posting.id}`}>
              <div className="flex w-full items-center justify-between gap-2">
                <div>
                  <Typography variant="subtitle">
                    {posting.companyName}
                  </Typography>
                  <Typography variant="caption">{posting.position}</Typography>
                </div>
                <div className="flex gap-2">
                  <Button icon={<MdDelete />} />
                  <Button icon={<MdMode />} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default PostingsList;
