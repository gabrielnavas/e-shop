import { FC } from "react";
interface IContainerProps {
  children: React.ReactNode
};

export const Container: FC<IContainerProps> = ({ children }) => {
  return (
    <div
      className="
        max-w[1920px]
        mx-auto
        xl:px-20
        md:px-2
        px-4
      "
    >
      {children}
    </div>
  );
}
