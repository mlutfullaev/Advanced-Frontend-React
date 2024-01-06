import './Loader.scss'
import {classNames} from "shared/lib/classNames/ClassNames";


interface LoaderProps {
  className?: string;
}

export const Loader = ({className}: LoaderProps) => {
  return (
    <div className={classNames('lds-default', {}, [className])}>
      <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </div>
  );
};
