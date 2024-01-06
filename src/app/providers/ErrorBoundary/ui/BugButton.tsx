import {classNames} from "shared/lib/classNames/ClassNames";
import {useEffect, useState} from "react";


interface BugButtonProps {
  className?: string;
}

// Component for testing

export const BugButton = ({className}: BugButtonProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!error) return;
    throw new Error()
  }, [error]);

  return (
    <div
      onClick={() => setError(true)}
      className={classNames('', {}, [className])}
    >
      Throw error
    </div>
  );
};
