import FormCreateContactModal from "../Forms/FormModals/FormCreateContactModal";
import FormDeleteContactModal from "../Forms/FormModals/FormDeleteContact";

interface IModalProps {
  id: number;
}

export const ModalCreateContact = () => {
  console.log("CHEHOU NO modal/index.tsx funções");
  return (
    <dialog open={true}>
      <FormCreateContactModal />
    </dialog>
  );
};

export const ModalDeleteContact = ({ id }: IModalProps) => {
  return (
    <dialog open={true}>
      <FormDeleteContactModal id={id} />
    </dialog>
  );
};
