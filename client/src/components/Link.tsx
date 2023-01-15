interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const Link = (props: Props) => {
  const { href, children } = props;

  return (
    <a
      href={href}
      className="font-medium text-primary-500 decoration-primary-500 decoration-2 underline-offset-2 hover:underline"
      target="_blank"
    >
      {children}
      {!children && 'Link'}
    </a>
  );
};

export default Link;
