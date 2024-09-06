import { FC } from "react";

import { Container } from "@/app/components/Container"
import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import { useRouter } from "next/navigation";

interface IProductPage {
  params: {
    productId: string
  }
};

const ProductPage: FC<IProductPage> = ({ params }) => {
  
  const product = products.find(product => product.id === params.productId)
  
  if(product === undefined) {
    return <div>product not found</div>
  }

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