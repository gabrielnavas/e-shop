import { FC, ReactNode } from "react";

interface IMenuItemProps {
  children: ReactNode
  onClick: () => void
};

export const MenuItem: FC<IMenuItemProps> = ({
  children,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className="
          px-4 
          py-3 
        bg-neutral-50 
        hover:bg-neutral-100 
          transition
        ">
      {children}
    </div>
  );
}
