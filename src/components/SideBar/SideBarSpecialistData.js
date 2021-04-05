import { mainLabel } from "../../styles/SideBarStyles/SideBarSpecialistData.module.scss";
import { SideBarSpecialistDataLabeledInfo } from "./SideBarSpecialistDataLabeledInfo";
import { useSelector } from "react-redux";
import { SideBarSpecialistDataButtons } from "./SideBarSpecialistDataButtons";
import { Modal } from "../Modal/Modal";
import {useState} from "react";
import store from "../../store/store";
import {therapistsSlice} from "../../store/therapistsSlice";
import {DeleteConfirmation} from "../DeleteConfirmation";
export const SideBarSpecialistData = ({ openEditMenu }) => {
  const selectedTherapist = useSelector(
    (state) =>
      state.therapists.therapistsDetailedList[
        state.therapists.selectedTherapist
      ]
  );
  const [closeModalStatus, setModalStatus] = useState(false);
  const handleModalVisibility=(status)=>{
    setModalStatus(status);
    store.dispatch(therapistsSlice.actions.setSideBarStatus(!status))
  }
  return selectedTherapist ? (
    <>
      <span className={mainLabel}>Informacje o specjaliście</span>
      <SideBarSpecialistDataLabeledInfo
        label={"Imię i nazwisko"}
        data={selectedTherapist.fullName}
      />
      <SideBarSpecialistDataLabeledInfo
        label={"Specjalizacje"}
        data={selectedTherapist.specializations}
      />
      <SideBarSpecialistDataLabeledInfo
        label={"Rodzaj terapii"}
        data={selectedTherapist.therapyTypes}
      />
      <SideBarSpecialistDataLabeledInfo
        label={"Certyfikaty"}
        data={selectedTherapist.certificates}
      />
      <SideBarSpecialistDataLabeledInfo
        label={"O mnie"}
        data={selectedTherapist.aboutMe}
      />
      <SideBarSpecialistDataButtons deleteConfirmation={handleModalVisibility}  edit={openEditMenu} />
      <Modal isShowing={closeModalStatus} hide={() => handleModalVisibility(false)}>
          <DeleteConfirmation hideSelf={() => handleModalVisibility(false)}/>
      </Modal>
    </>
  ) : null;
};
