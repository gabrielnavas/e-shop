import { product } from "@/utils/product";
import { FC } from "react";

import { Container } from "@/app/components/Container"
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";

interface IProductPage {
  params: {
    productId: string
  }
};

const ProductPage: FC<IProductPage> = ({ params }) => {
  return (
    <div
      className="p-8">
      <Container>
        <ProductDetails product={product} />
        <div className="
          flex 
          flex-col 
          mt-20 
          gap-4
        ">
          <ListRating product={product} />
        </div>
      </Container>
    </div>
  );
}


export default ProductPage;