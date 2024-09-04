import { product } from "@/utils/product";
import { FC } from "react";

import { Container } from "@/app/components/Container"
import ProductDetails from "./ProductDetails";

interface IProductProps {
  params: {
    productId: string
  }
};

const Product: FC<IProductProps> = ({ params }) => {
  return (
    <div
      className="
      p-8
    ">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
}


export default Product;