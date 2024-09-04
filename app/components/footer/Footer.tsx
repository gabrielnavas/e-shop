import { FC } from "react";

import { Container } from "../Container";
import { FooterList } from "./FooterList";
import Link from "next/link";

import { MdFacebook } from 'react-icons/md'
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai'

interface IFooterProps { };

export const Footer: FC<IFooterProps> = (props) => {
  return (
    <div className="
      bg-slate-700 text-slate-200 text-sm mt-16
    ">
      <Container>
        <div className="
          flex 
          flex-col 
          md:flex-row 
          justify-between
          pt-16
          pb-8
        ">
          <FooterList>
            <h3
              className="
                text-base
                font-bold
                mb-2
              "
            >Shop Categories</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3
              className="
                text-base
                font-bold
                mb-2
              "
            >Custumer Services</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="
            text-base
            font-bold
            mb-2
          ">
            <h3 className="
              text-base 
              font-bold 
              mb-2
            ">About Us</h3>
            <p className="mb-2 font-normal">
              At our eletronics store, we
              are dedicated to providing
              the latest and greatest.
            </p>
            <p className="mb-2 font-normal">
              &copy;{' '}
              {new Date().getFullYear()}
              {' '}E~Shop. 
              All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="
              text-base 
              font-bold 
              mb-2
            ">
              Follow Us
            </h3>
            <div className="flex gap-2">
              <Link href="#"><MdFacebook size={24} /></Link>
              <Link href="#"><AiFillTwitterCircle size={24} /></Link>
              <Link href="#"><AiFillInstagram size={24} /></Link>
              <Link href="#"><AiFillYoutube size={24} /></Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  );
}
