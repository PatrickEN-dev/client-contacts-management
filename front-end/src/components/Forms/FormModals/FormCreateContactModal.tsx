import { Button } from "@/components/Button";
import Input from "@/components/Input";
import { ReactNode } from "react";

interface IFormCreateTechModalProps {
  register: any;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  errors: any;
  closeModal: () => void;
  children?: ReactNode;
}

export default function FormCreateContactModal({
  register,
  handleSubmit,
  closeModal,
  errors,
}: IFormCreateTechModalProps) {
  return (
    <section>
      <div>
        <h2>Novo contato</h2>
        <button onClick={closeModal}>X</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            id={"first_name"}
            label={"Nome da tecnologia"}
            type={"text"}
            placeholder="ex: Pyhton"
            {...register("first_name")}
          />
          <p>{errors.title?.message}</p>
        </div>
        <Button type="submit">Cadastrar contato</Button>
      </form>
    </section>
  );
}
