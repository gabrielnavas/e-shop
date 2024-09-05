'use client';

import { CartContextProvider } from "@/hooks/useCart";
import { FC, ReactNode } from "react";

interface ICartProviderProps {
    children: ReactNode
};

export const CartProvider: FC<ICartProviderProps> = ({
    children
}) => {
    return (
        <CartContextProvider>
            {children}
        </CartContextProvider>
    );
}
