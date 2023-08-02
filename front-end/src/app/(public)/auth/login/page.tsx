"use client";
import { loginSchema } from "@/schemas/users.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  MainContainer,
  InnerContainer,
  Title,
  Form,
  Label,
  Input,
  SubmitButton,
} from "./styles";
import { LoginData } from "@/@types/users.types";


export default function Login () {
  
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onFormSubmit = (formData: LoginData) => {
    console.log(formData);
  };

  return (
    <MainContainer>
      <Title>Página de Login</Title>

      <Form onSubmit={handleSubmit(onFormSubmit)}>
        <InnerContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            autoComplete="email"
            required
            {...register("email")}
          />
        </InnerContainer>

        <InnerContainer>
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            autoComplete="current-password"
            required
            {...register("password")}
          />
        </InnerContainer>

        <InnerContainer>
          <SubmitButton type="submit">Entrar</SubmitButton>
        </InnerContainer>
      </Form>
    </MainContainer>
  );
};
