import clsx from 'clsx';
import { useEffect, useRef } from 'react';

type Props = {
  label?: string;
  isRequired?: boolean;
  name: string;
  value?: string;
  error?: string | null;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
};

const Input = ({
  label,
  isRequired,
  name,
  value,
  error,
  onChange,
  isTextarea = false,
}: Props) => {
  let formattedLabel = label;
  if (isRequired) formattedLabel = `${formattedLabel} *`;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const inputStyles =
    'focus:border-primary w-full rounded-md border border-gray-500 bg-transparent p-2 text-gray-400 shadow-2xl outline-none';

  function resizeTextarea() {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = '0';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }

  useEffect(() => {
    if (!isTextarea) return;
    resizeTextarea();
  }, [value]);

  return (
    <div className="w-full bg-inherit">
      {label && (
        <label className="mb-1 flex text-gray-100" htmlFor={name}>
          {formattedLabel}
        </label>
      )}
      {isTextarea ? (
        <textarea
          ref={textareaRef}
          className={clsx(inputStyles, 'resize-none overflow-y-hidden')}
          value={value}
          onChange={onChange}
          name={name}
        />
      ) : (
        <input
          className={inputStyles}
          value={value}
          onChange={onChange}
          type="text"
          name={name}
        />
      )}
      {error && <div className="mt-1 text-red-700">{error}</div>}
    </div>
  );
};

export default Input;
