import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Typography from '../../../components/Typography/Typography';
import usePosting from '../hooks/usePosting';

export type Posting = {
  companyName: string;
  url: string;
  position: string;
  description: string;
  createdAt?: string;
};

export interface PostingWithId extends Posting {
  id: number;
}

const Posting = () => {
  const { posting } = usePosting();
  //   const initialValues = {
  //     id: '',
  //     companyName: '',
  //     url: '',
  //     position: '',
  //     description: '',
  //     createdAt: '',
  //   };

  //   const [posting, setPosting] = useState<PostingWithId>(initialValues);

  //   const [tags, setTags] = useState<TagWithId[]>([]);

  //   const [showDeletePostingDialog, setShowDeletePostingDialog] = useState(false);
  //   const [showDeletePostingSuccess, setShowDeletePostingSuccess] =
  //     useState(false);

  //   const { id } = useParams();

  //   const technologyTags = tags.filter(
  //     (tag) => tag.category === Category.Technology
  //   );

  //   const benefitTags = tags.filter((tag) => tag.category === Category.Benefit);

  //   const qualityTags = tags.filter((tag) => tag.category === Category.Quality);

  //   const navigate = useNavigate();

  //   const fetchData = () => {
  //     if (!id) return;

  //     getPosting(id).then(setPosting);
  //     getTags(id).then(setTags);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   });

  // const checkForPhrase = (phrase: string, text: string) => {
  //   const words = phrase.split(' ');
  //   const segments = words.map((word, index) => {
  //     if (index === words.length - 1) return word;
  //     return `${word}[ -]`;
  //   });
  //   const pattern = segments.join('');
  //   const re = new RegExp(pattern, 'gi');
  //   const result = text.search(re);
  // };

  //   const formatDescription = (description: string) => {
  //     let formattedDescripition = description;

  //     const phrases = tags.filter((tag) => tag.type === 'Phrase');

  //     phrases.map((phrase) => checkForPhrase(phrase.text, description));

  //     tags.forEach((tag) => {
  //       const pattern = `\\b${tag.text}\\b`;

  //       formattedDescripition = formattedDescripition.replace(
  //         new RegExp(pattern, 'gi'),
  //         (string) => `<span className=${tag.category}>${string}</span>`
  //       );
  //     });

  //     return formattedDescripition;
  //   };

  // const experiment = (description: string) => {
  //   //\w+# --- for matching words that end in #
  //   // const hyphen = '((?:\w+-)+\w+)'
  //   // const wordsThatEndWithHashtag = '\w+#';
  //   // const words = '\w+';
  //   // const thingsThatStartWithDot = '\s\.\w+';
  //   // const emails = '(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])';
  //   // const fuckMe = '((?:\w+-)+\w+)|\w+#|\s\.\w+|(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])|\w+';
  //   // const pattern =
  //   // const words = description.split()
  // };

  //   const handleEditPosting = () => {
  //     navigate(`../postings/${posting.id}/edit`);
  //   };

  //   const handleDeletePosting = (id: string) => {
  //     deletePosting(id);
  //     setShowDeletePostingDialog(false);
  //     setShowDeletePostingSuccess(true);
  //   };

  return (
    <main className="w-full bg-temp-800 p-8">
      <div className="mb-2">
        <Typography variant="title">{posting.companyName}</Typography>
        <Typography variant="subtitle">{posting.position}</Typography>
      </div>
      <Typography variant="text">{posting.description}</Typography>
    </main>
  );
};

export default Posting;
