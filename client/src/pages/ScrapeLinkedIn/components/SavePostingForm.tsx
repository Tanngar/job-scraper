import { useState } from 'react';
import Button from '../../../components/Button';
import { TPosting } from '../../../components/Posting';
import Toast from '../../../components/Toast';
import { addPosting } from '../../../services/addPosting';

type Props = {
  posting: TPosting;
};

const SavePostingForm = (props: Props) => {
  const { posting } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  async function handleSavePostingSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    await addPosting(posting);
    setIsLoading(false);
    setHasBeenSubmitted(true);
  }
  return (
    <>
      {hasBeenSubmitted && <Toast>Job posting saved succesfully.</Toast>}
      <form onSubmit={(e) => handleSavePostingSubmit(e)}>
        <Button
          type="submit"
          isLoading={isLoading}
          isDisabled={hasBeenSubmitted}
        >
          Save posting
        </Button>
      </form>
    </>
  );
};

export default SavePostingForm;
