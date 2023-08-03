"use client";

import { useRouter } from "next/navigation";
import {
  Form,
  InnerContainer,
  Input,
  Label,
  MainContainer,
  SubmitButton,
  Title,
} from "./style";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <>
      <MainContainer>
        <Title>Página de Cadastro</Title>

        <Form
          onSubmit={(event) => {
            router.push("/auth/login");
            event.preventDefault();
          }}
        >
          <InnerContainer>
            <Label>
              Nome
              <Input type="text" placeholder="Digite seu nome" />
            </Label>
          </InnerContainer>

          <InnerContainer>
            <Label>
              Sobrenome
              <Input type="text" placeholder="Digite seu sobrenome" />
            </Label>
          </InnerContainer>

          <InnerContainer>
            <Label>
              Email
              <Input type="mail" placeholder="Digite seu email" />
            </Label>
          </InnerContainer>

          <InnerContainer>
            <Label>
              Telefone
              <Input type="tel" placeholder="Digite seu telefone" />
            </Label>
          </InnerContainer>

          <InnerContainer>
            <SubmitButton type="submit">Cadastrar</SubmitButton>
          </InnerContainer>
        </Form>
      </MainContainer>
    </>
  );
}
