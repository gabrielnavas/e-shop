import { FC } from "react";
import { Container } from "../components/Container";
import { FormWrap } from "../components/FormWrap";
import { LoginForm } from "./LoginForm";
interface ILoginPageProps { };

const LoginPage: FC<ILoginPageProps> = (props) => {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
}

export default LoginPage;