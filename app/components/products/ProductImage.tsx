"use client";
import Image from "next/image";

import { CartProductType, SelectedImgType } from "@/app/product/[productId]/ProductDetails";

import { FC } from "react";
interface IProductImageProps {
  cartProduct: CartProductType
  product: any
  handleColorSelect: (value: SelectedImgType) => void
};

const ProductImage: FC<IProductImageProps> = ({
  cartProduct,
  handleColorSelect,
  product
}) => {
  return (
    <div className="
      flex
      gap-2
      h-full
      max-h-[500px]
      min-h-[300px]
      sm:min-h-[400px]
    ">
      <div className="
        flex
        flex-col
        items-center
        justify-center
        gap-4
        cursor-pointer
        border
        h-full
        w-[25%]
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
      "
      >
        {product.images.map((image: SelectedImgType) => {
          return (
            <div
              key={image.color}
              className={`
                relative
                w-[90%]
                aspect-square
                rounded
                border-teal-300
                ${cartProduct.selectedImg.color === image.color 
                    ? 'border-[1.5px] '
                    : 'border-none'
                 }
              `}
              onClick={() => handleColorSelect(image)}>
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="object-contain"
              />
            </div>
          )
        })}
      </div>
      <div className="
        w-[75%]
        relative
        aspect-square
      ">
        <Image 
          fill
          src={cartProduct.selectedImg.image}
          alt={cartProduct.selectedImg.color}
          className="
            object-contain
            w-full
            h-full
            max-h-[500px]
            min-h-[300px]
            sm:min-h-[400px]
          "
        />
      </div>
    </div>
  );
}

export default ProductImage;