import {
  buttonsWrapper,
  saveButton,
  cancelButton,
} from "../../styles/SideBarStyles/SideBarSpecialistDataButtons.module.scss";
export const SideBarSpecialistEditDataButtons = ({ save, cancel }) => {
  return (
    <div className={buttonsWrapper}>
      <div
        onClick={() => {
          save();
          cancel(false);
        }}
        className={saveButton}
      >
        Zapisz
      </div>
      <div onClick={() => cancel(false)} className={cancelButton}>
        Anuluj
      </div>
    </div>
  );
};
