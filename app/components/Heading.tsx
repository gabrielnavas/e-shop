import { FC } from "react";
interface IHeadingProps { 
  title: string
  center? : boolean

};

const Heading: FC<IHeadingProps> = ({
  title,
  center,
}) => {
  return (
    <div className={center ? 'text-center' : 'text-start'}>
      <h1 className="font-bold text-size-2xl">
        {title}
      </h1>
    </div>
  );
}

export default Heading