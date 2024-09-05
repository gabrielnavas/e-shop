import { FC } from "react";
import { Container } from "../components/Container";
import CartClient from "./CartClient";
interface ICartPageProps { };

const CartPage: FC<ICartPageProps> = (props) => {
  return (
    <div className="pt-8">
      <Container>
        <CartClient />
      </Container>
    </div>
  );
}

export default CartPage;