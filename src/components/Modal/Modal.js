import ReactDOM from "react-dom";
import {
  modalButton,
  modalHeader,
  modalOverlay,
  modalWindow,
} from "../../styles/ModalStyles/ModalMain.module.scss";

export const Modal = ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className={modalOverlay} onClick={hide} />
          <div className={modalWindow}>
            <div className={modalHeader}>
              <div onClick={hide} className={modalButton}>
                ✕
              </div>
            </div>
            {children}
          </div>
        </>,
        document.body
      )
    : null;
