import { createPortal } from 'react-dom';
import { useOutsideClick } from '../hooks/useOutsideClick';
interface IModal {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function Modal({ children, showModal, setShowModal }: IModal) {
  const onClose = () => setShowModal(false);
  const ref = useOutsideClick(onClose);
  return (
    <>
      {showModal
        ? createPortal(
            <div className="fixed inset-0 z-50 mx-auto flex  max-w-md  items-center justify-center  bg-black-50/50 p-4 backdrop-blur-sm">
              <div ref={ref} className=" rounded-lg bg-black-50 p-4">
                {children}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
