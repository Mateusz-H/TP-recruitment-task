import {
  closeButton,
  overlay,
  sideBar,
  sideBarVisible,
} from "../../styles/SideBarStyles/SideBarMain.module.scss";
import { useSelector } from "react-redux";
import { therapistsSlice } from "../../store/therapistsSlice";
import store from "../../store/store";
import { SideBarSpecialistData } from "./SideBarSpecialistData";
import { mainWrapper } from "../../styles/SideBarStyles/SideBarSpecialistData.module.scss";
import { useState } from "react";
import { SideBarSpecialistEditData } from "./SideBarSpecialistEditData";

export const SideBar = () => {
  const close = () => {
    store.dispatch(therapistsSlice.actions.setSideBarStatus(false));
  };
  const isSideBarVisible = useSelector(
    (state) => state.therapists.sideBarVisible
  );
  const [startEdit, openEditMenu] = useState(false);
  return (
    <div className={isSideBarVisible ? overlay : ""}>
      <div className={isSideBarVisible ? sideBarVisible : sideBar}>
        <div className={closeButton}>
          <div onClick={close}>×</div>
        </div>
        <div className={mainWrapper}>
          {startEdit ? (
            <SideBarSpecialistEditData close={openEditMenu} />
          ) : (
            <SideBarSpecialistData openEditMenu={openEditMenu} />
          )}
        </div>
      </div>
    </div>
  );
};
