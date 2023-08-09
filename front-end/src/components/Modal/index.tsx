import FormCreateContactModal from "../Forms/FormModals/FormCreateContactModal";
import FormDeleteContactModal from "../Forms/FormModals/FormDeleteContact";
import FormUpdateContactModal from "../Forms/FormModals/FormUpdateContact";

interface IModalProps {
  id: number;
}

export const ModalCreateContact = () => {
  return (
    <dialog open={true}>
      <FormCreateContactModal />
    </dialog>
  );
};

export const ModalUpdateContact = ({ id }: IModalProps) => {
  return (
    <dialog open={true}>
      <FormUpdateContactModal id={id} />
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
