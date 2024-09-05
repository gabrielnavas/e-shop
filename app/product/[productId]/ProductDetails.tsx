"use client"

import Button from "@/app/components/Button"
import ProductImage from "@/app/components/products/ProductImage"
import SetColor from "@/app/components/products/SetColor"
import SetQuantity from "@/app/components/products/SetQuantity"
import { useCart } from "@/hooks/useCart"
import { Product } from "@/utils/products"
import { Rating } from "@mui/material"
import { FC, useCallback, useState } from "react"

interface IProductDetailsProps {
  product: Product
}

export type CartProductType = {
  id: string
  name: string
  description: string
  category: string
  brand: string
  selectedImg: SelectedImgType
  quantity: number
  price: number
}

export type SelectedImgType = {
  color: string;
  colorCode: string;
  image: string;
}

const Horizontal = () => {
  return (
    <hr className="w-[30%] my-2"></hr>
  )
}

const ProductDetails: FC<IProductDetailsProps> = ({ product }) => {

  const cart = useCart();

  console.log(cart.cartTotalQty);
  

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price
  })

  const productRating = product.reviews.length > 0
    ? product.reviews
      .reduce((acc, review) => acc + review.rating, 0.0) / product.reviews.length
    : 0.0

  const handleColorSelect = useCallback(
    (value: SelectedImgType): void => {
      setCartProduct(prev => {
        return { ...prev, selectedImg: value };
      })
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(
    (): void => {
      setCartProduct(prev => {
        const limit = Number.MAX_SAFE_INTEGER
        const nextValue = prev.quantity + 1;
        if (nextValue > limit) {
          return prev;
        }
        return { ...prev, quantity: nextValue };
      })
    },
    [cartProduct]
  )

  const handleQtyDecrease = useCallback(
    (): void => {
      setCartProduct(prev => {
        const limit = 1
        const nextValue = prev.quantity - 1;
        if (nextValue < limit) {
          return prev;
        }
        return { ...prev, quantity: nextValue };
      })
    },
    [cartProduct]
  )

  return (
    <div className="
      grid 
      grid-cols-1
      md:grid-cols-2
      gap-12
    ">
      <ProductImage 
        cartProduct={cartProduct}
        handleColorSelect={handleColorSelect}
        product={product}
      />
      <div className="
        flex 
        flex-col 
        gap-1 
        text-slate-500 
        text-sm
      ">
        <h2 className="
          text-3xl
          font-medium
          text-slate-700
        ">{product.name}</h2>
        <div className="flex item-center gap-2">
          <Rating value={productRating} readOnly />
          {product.reviews.length} reviews
        </div>
        <Horizontal />
        <div className="text-justify">
          {product.description}
        </div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY: </span>
          {' '}{product.category}
        </div>
        <div>
          <span className="font-semibold">BRAND: </span>
          {' '}{product.brand}
        </div>
        <div className={
          product.inStock
            ? 'text-teal-400'
            : 'text-rose-400'
        }>
          {product.inStock ? 'In Stock' : 'Out of stock'}
        </div>
        <Horizontal />
        <SetColor
          cartProduct={cartProduct}
          images={product.images}
          handleColorSelect={handleColorSelect}
        />
        <Horizontal />
        <SetQuantity
          cartProduct={cartProduct}
          handleQtyDecrease={handleQtyDecrease}
          handleQtyIncrease={handleQtyIncrease}
        />
        <Horizontal />
        <div>
          <Button
            custom="max-w-[300px]"
            label="Add to cart"
            onClick={() => { }}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails