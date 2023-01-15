import React, { useRef } from 'react';
import Button from './Button';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Typography from './Typography';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Toast = (props: Props) => {
  const { children } = props;
  const toastRef = useRef<HTMLDivElement>(null);

  function handleClose() {
    if (!toastRef.current) return;

    toastRef.current.className = 'hidden';
  }

  return (
    <div
      ref={toastRef}
      className="fixed bottom-5 right-5 flex w-fit max-w-xs animate-slideIn items-center justify-between gap-4 rounded-md border border-gray-700 bg-temp-900 p-4 shadow-xl"
      role="alert"
    >
      <Typography variant="text">{children}</Typography>
      {
        <AiOutlineCloseCircle
          onClick={handleClose}
          className="cursor-pointer text-primary-500 hover:opacity-90"
        />
      }
    </div>
  );
};

export default Toast;
