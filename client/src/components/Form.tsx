interface Props extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = ({ children, onSubmit }: Props) => {
  return (
    <form className="flex w-full flex-col gap-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
