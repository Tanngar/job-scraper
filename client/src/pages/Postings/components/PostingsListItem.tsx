import clsx from 'clsx';
import { useState } from 'react';
import { MdDelete, MdMode } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import { PostingWithId, TPosting } from '../../../components/Posting';
import Toast from '../../../components/Toast';
import Typography from '../../../components/Typography';
import { deletePosting } from '../services/deletePosting';

type Props = {
  posting: PostingWithId;
  activePostingId: number;
  fetchPostings: () => void;
};

const PostingsListItem = (props: Props) => {
  const { posting, activePostingId, fetchPostings } = props;
  const { id, companyName, position } = posting;
  const [hasBeenDeleted, setHasBeenDelete] = useState(false);

  async function handleDeleteButtonClick(e: React.MouseEvent) {
    e.stopPropagation();
    await deletePosting(id);
    fetchPostings();
    setHasBeenDelete(true);
  }

  async function handleEditButtonClick(e: React.MouseEvent) {}

  return (
    <>
      {hasBeenDeleted && (
        <Toast>Job posting for {companyName} has been deleted. </Toast>
      )}
      <li
        key={id}
        className={clsx(
          'mb-2 flex w-full rounded-md bg-temp-800 last:mb-0 hover:bg-temp-700',
          id === activePostingId && 'bg-temp-500'
        )}
      >
        <Link className="flex w-full p-4" to={`/postings/${id}`}>
          <div className="flex w-full items-center justify-between gap-12">
            <div>
              <Typography variant="subtitle">{companyName}</Typography>
              <Typography variant="caption">{position}</Typography>
            </div>
            <div className="flex gap-2">
              <Button
                icon={<MdDelete />}
                onClick={(e) => handleDeleteButtonClick(e)}
              />
              <Button
                icon={<MdMode />}
                onClick={(e) => handleEditButtonClick(e)}
                isDisabled={true}
              />
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PostingsListItem;
