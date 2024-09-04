"use client"

import { FC } from "react";
import Image from "next/image";

import { Rating } from "@mui/material";

import { formatPrice } from "@/utils/formatPrice";
import { Product } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import { useRouter } from "next/navigation";

interface IProductCardProps {
  data: Product
};

export const ProductCard: FC<IProductCardProps> = ({ data }) => {

  const router = useRouter()

  const productRatingSum = data.reviews
    .reduce((acc, review) => acc + review.rating, 0.0)

  const productRating = data.reviews.length > 0
    ? productRatingSum / data.reviews.length
    : 0.0

  return (
    <div
      onClick={() => router.push(`product/${data.id}`)}
      className="
        col-span-1
        cursor-pointer
        border-[1.2px]
        border-slate-200
        bg-slate-50
        rounded-sm
        p-2
        transition
        hover:scale-105
        text-center
        text-sm
      ">
      <div
        className="
          flex
          flex-col
          items-center
          w-full
          gap-1
        ">
        <div className="
          aspect-square
          overflow-hidden
          relative
          w-full
        ">
          <Image
            fill
            alt={data.name}
            className="w-full h-full object-contain"
            src={data.images[0].image}
          />
        </div>
        <div>
          {truncateText(data.name)}
        </div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
        <div></div>
      </div>
    </div>
  );
}
