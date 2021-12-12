import styles from './Modal.module.scss';
import { IoClose } from 'react-icons/io5';
interface IModal {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<IModal> = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return <></>;
  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <IoClose
          onClick={closeModal}
          className={styles.container__content__icon}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
