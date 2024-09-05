'use client';

import { FC } from "react";
import { CartProductType } from "../product/[productId]/ProductDetails";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
interface IItemContentProps {
  item: CartProductType
};

export const ItemContent: FC<IItemContentProps> = ({
  item
}) => {
  const {
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
  } = useCart();

  return (
    <div className="
      grid
      grid-cols-5 
      text-xs
      md:text-sm
      gap-4
      border-t-[1.5px]
      border-slate-200
    ">
      <div className="
        col-span-2 
        justify-self-start 
        flex 
        gap-2
        md:gap-4
      ">
        <Link href={`/product/${item.id}`}>
          <div className="relative w-[70px] aspect-square">
            <Image
              fill
              alt={item.name}
              src={item.selectedImg.image}
              className="object-contain" />
          </div>
        </Link>
        <div className="flex flex-col justify-between">
          <Link href={`/product/${item.id}`}>
            {truncateText(item.name)}
          </Link>
          <div>
            {item.selectedImg.color}
          </div>
          <div className="w-[70px]">
            <button
              className="text-slate-500 underline"
              onClick={() => handleRemoveProductFromCart(item)}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="justify-self-center self-center">
        {formatPrice(item.price)}
      </div>
      <div className="justify-self-center self-center">
        <SetQuantity
          cartCounter
          cartProduct={item}
          handleQtyDecrease={() => { }}
          handleQtyIncrease={() => handleCartQtyIncrease(item)} />
      </div>
      <div className="justify-self-end self-center font-semibold">
        {formatPrice(item.price * item.quantity)}
      </div>
    </div>
  );
}
