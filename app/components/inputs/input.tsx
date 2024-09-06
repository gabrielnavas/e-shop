'use client';

import { FC } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister
} from "react-hook-form";

interface IInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
};

export const Input: FC<IInputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
  required,
  type
}) => {
  return (
    <div className="w-full relative">
      <input
        {...register(id, { required })}
        id={id}
        className={`
          peer
          w-full
          p-4
          pt-6
          outline-none
          bg-white
          font-light
          border-2
          rounded-md
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${errors[id]
            ? 'border-rose-400'
            : 'border-slate-400'
          }
          ${errors[id]
            ? 'focus:border-rose-400'
            : 'focus:border-slate-400'
          }
        `}
        placeholder=""
        autoComplete="off"
        type={type}
        required={required}
        disabled={disabled} />
      <label
        htmlFor={id}
        className={`
          absolute
          cursor-text
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          disabled:opacity-70
          ${
            disabled ? 'opacity-70' : ''
          }
          ${errors[id]
            ? 'text-rose-500'
            : 'text-wslate-400'
          }
        `}>
        {label}
      </label>
    </div>
  );
}
