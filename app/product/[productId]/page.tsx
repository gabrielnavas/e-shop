import { FC } from "react";
interface IProductProps {
  params: {
    productId: string
  }
};

const Product: FC<IProductProps> = ({ params }) => {
  return (
    <div>
      {params.productId}
    </div>
  );
}


export default Product;