import SetQuantity from "@/app/components/products/SetQuantity";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { toast } from 'react-hot-toast';

type CartContextType = {
  cartTotalQty: number;
  cartProducts: CartProductType[] | null;
  handleAddProductToCart: (product: CartProductType) => void
  handleRemoveProductFromCart: (product: CartProductType) => void
  handleCartQtyIncrease: (product: CartProductType) => void
  handleCartQtyDecrease: (product: CartProductType) => void
}

export const CartContext = createContext<CartContextType | null>(null);

interface IUseCartProps {
  [propName: string]: any;
}

export const CartContextProvider = (props: IUseCartProps) => {
  const [cartTotalQty, setCartTotalQty] = useState(0)
  const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)

  // load cart product from localstorage 
  useEffect(() => {
    const cartItems: any = localStorage.getItem('eShopCartItems');
    const cProducts: CartProductType[] | null = JSON.parse(cartItems);
    if (cProducts !== null) {
      setCartProducts(cProducts);

      const totalQuantitySum = cProducts.reduce(
        (acc, cartProduct) => acc + cartProduct.quantity,
        0
      )
      setCartTotalQty(totalQuantitySum)
    }
  }, [])

  const handleAddProductToCart = useCallback(
    (product: CartProductType): void => {
      setCartProducts(prev => {
        let updatedCart;
        if (prev !== null) {
          updatedCart = [...prev, product];
        } else {
          updatedCart = [product]
        }

        localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart));
        return updatedCart
      })
      setCartTotalQty(prev => prev + 1);
      toast.success('Producted added to cart')
    },
    []
  )

  const handleRemoveProductFromCart = useCallback(
    (product: CartProductType) => {
      if (cartProducts !== null) {
        const filtredProducts = cartProducts.filter(p => {
          return p.id !== product.id;
        });
        setCartProducts(filtredProducts);
        setCartTotalQty(prev => {
          return prev - 1;
        })
        localStorage.setItem('eShopCartItems', JSON.stringify(filtredProducts));
        toast.success('Producted removed')
      }
    },
    [cartProducts]
  )

  const handleCartQtyIncrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity >= 99) {
        return toast.error("Ooops! Maximum reached")
      }

      if (cartProducts !== null) {
        updatedCart = [...cartProducts]

        const existingIndex = cartProducts.findIndex(
          p => p.id === product.id
        )

        if (existingIndex >= 0) {
          updatedCart[existingIndex].quantity++;
        }

        setCartProducts(updatedCart);
        localStorage.setItem(
          'eShopCartItems',
          JSON.stringify(updatedCart)
        );
      }
    },
    [cartProducts]
  )

  const handleCartQtyDecrease = useCallback(
    (product: CartProductType) => {
      let updatedCart;

      if (product.quantity <= 1) {
        return toast.error("Ooops! MInimum reached")
      }

      if (cartProducts !== null) {
        updatedCart = [...cartProducts]

        const existingIndex = cartProducts.findIndex(
          p => p.id === product.id
        )

        if (existingIndex >= 0) {
          updatedCart[existingIndex].quantity--;
        }

        setCartProducts(updatedCart);
        localStorage.setItem(
          'eShopCartItems',
          JSON.stringify(updatedCart)
        );
      }
    },
    [cartProducts]
  )

  const value = {
    cartTotalQty,
    cartProducts,
    handleAddProductToCart,
    handleRemoveProductFromCart,
    handleCartQtyIncrease,
    handleCartQtyDecrease,
  } as CartContextType

  return (
    <CartContext.Provider value={value} {...props} />
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === null) {
    throw new Error("use cart must be used within a CartContextProvider")
  }

  return context;
}