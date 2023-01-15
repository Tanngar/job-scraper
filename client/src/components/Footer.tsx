import Typography from './Typography';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-center bg-temp-800 py-4">
      <Typography variant="text">
        {currentYear} <span className="mx-2 text-primary-500">©</span>
        Job postings analyser
        <span className="mx-2 text-primary-500">|</span>
        Work in progress
      </Typography>
    </footer>
  );
};

export default Footer;
