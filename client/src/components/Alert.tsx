import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Alert = (props: Props) => {
  const { children } = props;
  return (
    <div className="rounded-md border border-red-800 bg-inherit p-2 text-red-800">
      {children}
    </div>
  );
};

export default Alert;
