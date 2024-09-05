'use client'

import { FC } from "react";
import { IconType } from "react-icons";

interface IButtonProps {
  label: string
  disabled?: boolean
  outline?: boolean
  small?: boolean
  custom?: string
  Icon?: IconType
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
};

const Button: FC<IButtonProps> = ({
  label,
  disabled,
  outline,
  custom,
  small,
  Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      disabled:opacity-70
      disabled:cursor-not-allowed
      rounded-md
      hober:opacity-80
      transition
      w-full
      border-slate-700
      hover:bg-slate-900
      active:bg-slate-700
      flex
      items-center
      justify-center
      gap-2
      ${outline
          ? 'bg-white hover:bg-slate-300 active:bg-white'
          : 'bg-slate-700'
        }
      ${outline
          ? 'text-slate-700 hover:text-slate-400 active:text-slate-700'
          : 'text-white'
        }
      ${small ? 'text-sm font-light' : 'text-md font-semibold'}
      ${small ? 'py-1 px-2 border-[1px]' : 'py-3 px-4 border-2'}
      ${custom ? custom : ''}
      
    `}>
      {Icon && <Icon size={24} />}
      <label className="cursor-pointer">
        {label}
      </label>
    </button>
  );
}

export default Button