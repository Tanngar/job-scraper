import HorizontalDivider from './HorizontalDivider';
import Link from './Link';
import Typography from './Typography';

export type TPosting = {
  companyName: string;
  description: string;
  analyzedDescription: string;
  location: string;
  numOfApplicants: string;
  position: string;
  postedAt: string;
  url: string;
};

export interface PostingWithId extends TPosting {
  id: number;
}

type Props = {
  posting: TPosting;
};

const Posting = (props: Props) => {
  const { posting } = props;

  const {
    companyName,
    position,
    location,
    postedAt,
    numOfApplicants,
    url,
    description,
  } = posting;

  return (
    <div className="flex flex-col gap-6 bg-inherit">
      <div className="flex flex-col gap-1">
        <Typography variant="title">{companyName}</Typography>
        <Typography variant="subtitle">{position}</Typography>
        <Typography variant="caption">{location}</Typography>
        <Typography variant="caption">{postedAt}</Typography>
        <Typography variant="caption">{numOfApplicants}</Typography>
        <Link href={url} />
      </div>
      <HorizontalDivider />
      <Typography variant="text">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Typography>
    </div>
  );
};

export default Posting;
