'use client'

import { FC, useCallback, useState } from "react";

import Link from "next/link";

import { signOut } from "next-auth/react";

import { AiFillCaretDown } from 'react-icons/ai'

import Avatar from "../Avatar";

import { MenuItem } from "./MenuItem";
import { BackDrop } from "./BackDrop";

interface IUserMenuProps { };

export const UserMenu: FC<IUserMenuProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
            p-2
            border-[1px]
            border-slate-400
            flex 
            flex-row
            items-center
            gap-1
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            text-slate-700
        ">
          <Avatar />
          <AiFillCaretDown size={24} />
        </div>
        {isOpen && (
          <div className="
            absolute
            rounded-md
            w-[170px]
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            flex
            flex-col
            cursor-pointer
          ">
            <div>
              <Link href="/orders">
                <MenuItem onClick={toggleOpen}>
                  Your Orders
                </MenuItem>
              </Link>
              <Link href="/admin">
                <MenuItem onClick={toggleOpen}>
                  Admin Dashboard
                </MenuItem>
              </Link>
              <MenuItem onClick={() => {
                toggleOpen();
                signOut();
              }}>
                Logout
              </MenuItem>
            </div>
            <div>
              <Link href="/login">
                <MenuItem onClick={toggleOpen}>
                  Login
                </MenuItem>
              </Link>
              <Link href="/register">
                <MenuItem onClick={toggleOpen}>
                  Register
                </MenuItem>
              </Link>
            </div>
          </div>
        )}
      </div>
      {isOpen && (
        <BackDrop onClick={toggleOpen} />
      )}
    </>
  );
}
