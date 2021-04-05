import {deleteButton,buttonsWrapper} from "../styles/SideBarStyles/SideBarSpecialistDataButtons.module.scss"
import {deleteConfirmationMain,spanHeader} from "../styles/ModalStyles/ModalMain.module.scss"
import store from "../store/store";
import {therapistsSlice} from "../store/therapistsSlice";


export const DeleteConfirmation=({hideSelf})=>{
    const handleDelete=()=>{
        hideSelf();
        store.dispatch(therapistsSlice.actions.removeTherapist(store.getState().therapists.selectedTherapist));
    }
    return <div className={deleteConfirmationMain}>
        <span className={spanHeader}>
            Czy na pewno chcesz usunąć terapeutę?
        </span>
        <div className={buttonsWrapper}>

        <div onClick={handleDelete} className={deleteButton}>Usuń</div>
    </div>

    </div>
}