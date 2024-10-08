"use client";

import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { FC } from "react";

interface ISetQtyProps {
  cartCounter?: boolean
  cartProduct: CartProductType
  handleQtyIncrease: () => void
  handleQtyDecrease: () => void
};

const btnStyles = `
  border-[1.2px] 
  border-slate-300 
  px-2 
  rounded 
  hover:bg-slate-200 
  active:scale-105
`

const SetQuantity: FC<ISetQtyProps> = ({
  cartCounter,
  cartProduct,
  handleQtyDecrease,
  handleQtyIncrease
}) => {
  return (
    <div className="flex gap-8 items-center">
      {cartCounter ? null : (
        <div className="font-semibold">
          QUANTITY:
        </div>
      )}
      <div className="flex gap-4 items-center text-base">
        <button
          className={btnStyles}
          onClick={handleQtyDecrease}>-</button>
        <div className="w-[10px]">{cartProduct.quantity}</div>
        <button
          className={btnStyles}
          onClick={handleQtyIncrease}>+</button>
      </div>
    </div>
  );
}

export default SetQuantity;