import { API } from "@/services/api";
import { createContext, useContext } from "react";
import { IProviderChildrenProps, IUserListContext } from "./interfaces";
import { IUser } from "@/@types/users.types";
import { UserRequestsContext } from "./userRequestContext";

export const USerCrudContext = createContext<IUserListContext>(
  {} as IUserListContext
);

export const UsercrudProvider = ({ children }: IProviderChildrenProps) => {
  const { user, setUser } = useContext(UserRequestsContext);
  const token = localStorage.getItem("@TOKEN") || "";

  async function getUserById(userId: number) {
    try {
      const response = await API.get<IUser>(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("usuário não encontrados");
    }
  }

  // const updateUserRequest = async (data: IUser, id: number) => {
  //   try {
  //     await API.put(`users/${id}`, data, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     toast.success("Seu perfil foi atualizado com sucesso!");

  //     const updatedContact: IUser = user.map((user) =>
  //       user.id === id ? { ...user, ...data } : user
  //     );
  //     setUser(updatedContact);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Não foi póssível atualizar suas informações");
  //   }
  // };

  // const deleteUserRequest = async (id: number) => {
  //   try {
  //     await API.delete(`/users${id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const deletedContact = user.filter((user) => user.id !== id);

  //     setusers(deletedContact);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Não foi póssível deletar seu perfil");
  //   }
  // };

  return (
    <USerCrudContext.Provider value={{ getUserById }}>
      {children}
    </USerCrudContext.Provider>
  );
};
