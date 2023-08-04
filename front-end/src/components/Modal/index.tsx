import { UserContactsContext } from "@/contexts/contact/contactCrudContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import FormCreateContactModal from "../Forms/FormModals/FormCreateContactModal";

export const ModalCreateTech = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createContactRequest, closeModal } = useContext(UserContactsContext);

  const onSubmit = (formData: any) => {
    createContactRequest(formData);
  };

  return (
    <dialog open={true}>
      <FormCreateContactModal
        register={register}
        handleSubmit={handleSubmit(onSubmit)}
        errors={errors}
        closeModal={closeModal}
      />
    </dialog>
  );
};
