import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useState } from "react";

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void
}

export const CartContext = createContext<CartContextType | null>(null);

interface IUseCartProps {
  [propName: string]: any;
}

export const CartContextProvider = (props: IUseCartProps) => {
  const [cartTotalQty, setCartTotalQty] = useState(0)
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

  const handleAddProductToCart = useCallback(
    (product: CartProductType): void => {
      setCartProducts(prev => {
        let updatedCart;
        if(prev !== null) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product]
        }

        return updatedCart
      })
      setCartTotalQty(prev => prev + 1);
    },
    []
  )

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
  }

  return (
    <CartContext.Provider value={value} {...props} />
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if(context === null) {
    throw new Error("use cart must be used within a CartContextProvider")
  }

  return context;
}