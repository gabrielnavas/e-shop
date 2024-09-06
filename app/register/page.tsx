import { FC } from "react";

import { Container } from "../components/Container";
import { FormWrap } from "../components/FormWrap";

import { RegisterForm } from "./RegisterForm";

interface IRegisterPageProps { };

const RegisterPage: FC<IRegisterPageProps> = (props) => {
  return (
   <Container>
    <FormWrap>
      <RegisterForm />
    </FormWrap>
   </Container>
  );
}

export  default RegisterPage;