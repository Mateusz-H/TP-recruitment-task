import {
  buttonsWrapper,
  deleteButton,
  editButton,
} from "../../styles/SideBarStyles/SideBarSpecialistDataButtons.module.scss";

export const SideBarSpecialistDataButtons = ({ deleteConfirmation, edit }) => {
  return (
    <div className={buttonsWrapper}>
      <div onClick={() => edit(true)} className={editButton}>
        Edytuj
      </div>
      <div onClick={() => deleteConfirmation(true)} className={deleteButton}>
        Usuń
      </div>
    </div>
  );
};
