import FormCreateContactModal from "../Forms/FormModals/FormCreateContactModal";
import FormDeleteContactModal from "../Forms/FormModals/FormDeleteContact";
import FormUpdateContactModal from "../Forms/FormModals/FormUpdateContact";

export const ModalCreateContact = () => {
  return (
    <dialog open={true}>
      <FormCreateContactModal />
    </dialog>
  );
};

export const ModalUpdateContact = () => {
  return (
    <dialog open={true}>
      <FormUpdateContactModal id={0} />
    </dialog>
  );
};

export const ModalDeleteContact = () => {
  return (
    <dialog open={true}>
      <FormDeleteContactModal id={0} />
    </dialog>
  );
};
