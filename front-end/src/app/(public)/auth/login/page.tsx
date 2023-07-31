"use client";
import { LoginData, loginSchema } from "@/schemas/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { NextPage } from "next";
import { useForm } from "react-hook-form";


export const Login: NextPage = () => {
    const { register, handleSubmit } = useForm<LoginData>({
      resolver: zodResolver(loginSchema),
    })
  
    const onFormSubmit = (formData: LoginData) => {
      console.log(formData)
    } 
  return (
    <>
      <main>
        <h1>Página de Login</h1>

        <form action="#"
          method="POST"
          onSubmit={handleSubmit(onFormSubmit)}>

          <div>
            <label>
              Email
              <input  id="email" type="mail" placeholder="Digite seu email" autoComplete="email"
                required {...register("email")} />
            </label>
          </div>

          <div>
            <label>
              Senha
              <input autoComplete="current-password" required type="password" placeholder="Digite sua senha" 
              {...register("password")}/>
            </label>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </>
  );
}
