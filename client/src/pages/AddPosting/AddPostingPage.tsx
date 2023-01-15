import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Form from '../../components/Form';
import HorizontalDivider from '../../components/HorizontalDivider';
import Input from '../../components/Input';
import { TPosting } from '../../components/Posting';
import Typography from '../../components/Typography';
import VerticalDivider from '../../components/VerticalDivider';
import { addPosting } from '../../services/addPosting';

type ValidationError = {
  [key: string]: string | null;
};

const AddPostingPage = () => {
  const navigate = useNavigate();

  const [posting, setPosting] = useState<TPosting>({
    companyName: '',
    description: '',
    analyzedDescription: '',
    location: '',
    numOfApplicants: '',
    position: '',
    postedAt: '',
    url: '',
  });

  const [errors, setErrors] = useState<ValidationError>({
    companyName: null,
    description: null,
    analyzedDescription: null,
    location: null,
    numOfApplicants: null,
    position: null,
    postedAt: null,
    url: null,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // if (!validateForm()) return;

    if (!posting) return;
    const res = await addPosting(posting);

    navigate(`../postings/${res.id}`);
  }

  function validateForm() {
    const testy = {
      url: validateUrl(posting.url),
      companyName: validateName(posting.companyName),
      position: null,
      description: null,
    };

    const noValidErrors = Object.values(testy).every((value) => !value);

    if (noValidErrors) {
      return true;
    }

    setErrors(testy);

    return false;

    function validateUrl(url: string) {
      if (!url) return null;

      const validUrlPattern =
        /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi;

      if (!url.match(validUrlPattern)) {
        return 'Invalid URL.';
      }

      return null;
    }

    function validateName(name: string) {
      if (name.length < 1) {
        return 'Company name is required.';
      }

      return null;
    }
  }

  useEffect(() => {
    // validateForm();
  }, [posting]);

  return (
    <div className="w-1/2 bg-temp-800 p-8">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Typography variant="title">Add new job posting</Typography>
        <div className="flex gap-8">
          <div className="flex w-full flex-col gap-4">
            <Input
              name="company"
              label="Company name"
              value={posting.companyName}
              error={errors.companyName}
              onChange={(e) =>
                setPosting({ ...posting, companyName: e.target.value })
              }
              isRequired
            />
            <Input
              name="position"
              label="Position"
              value={posting.position}
              error={errors.position}
              onChange={(e) =>
                setPosting({ ...posting, position: e.target.value })
              }
              isRequired
            />
            <Input
              name="location"
              label="Location"
              isTextarea
              value={posting.location}
              error={errors.location}
              onChange={(e) =>
                setPosting({ ...posting, location: e.target.value })
              }
            />
          </div>
          <VerticalDivider />
          <div className="flex w-full flex-col gap-4">
            <Input
              name="url"
              label="URL"
              value={posting.url}
              error={errors.url}
              onChange={(e) => setPosting({ ...posting, url: e.target.value })}
            />

            <Input
              name="numOfApplicants"
              label="Number of applicants"
              isTextarea
              value={posting.numOfApplicants}
              error={errors.numOfApplicants}
              onChange={(e) =>
                setPosting({ ...posting, numOfApplicants: e.target.value })
              }
            />
            <Input
              name="postedAt"
              label="Posted at"
              isTextarea
              value={posting.postedAt}
              error={errors.postedAt}
              onChange={(e) =>
                setPosting({ ...posting, postedAt: e.target.value })
              }
            />
          </div>
        </div>
        <Input
          name="description"
          label="Description"
          isTextarea
          value={posting.description}
          error={errors.description}
          onChange={(e) =>
            setPosting({ ...posting, description: e.target.value })
          }
          isRequired
        />
        <Button type="submit">Add posting</Button>
      </Form>
    </div>
  );
};

export default AddPostingPage;
