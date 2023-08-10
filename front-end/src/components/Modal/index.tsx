import FormCreateContactModal from "../Forms/FormModals/contacts/FormCreateContactModal";
import FormDeleteContactModal from "../Forms/FormModals/contacts/FormDeleteContact";
import FormDeleteUserModal from "../Forms/FormModals/user/FormDeleteUser";
import FormUpdateUserModal from "../Forms/FormModals/user/FormUpdateUser";

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

export const ModalDeleteContact = ({ id }: IModalProps) => {
  return (
    <dialog open={true}>
      <FormDeleteContactModal id={id} />
    </dialog>
  );
};

export const ModalUpdateUser = () => {
  return (
    <dialog open={true}>
      <FormUpdateUserModal />
    </dialog>
  );
};

export const ModalDeleteUser = ({ id }: IModalProps) => {
  return (
    <dialog open={true}>
      <FormDeleteUserModal id={id} />
    </dialog>
  );
};
