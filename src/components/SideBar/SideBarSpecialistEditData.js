import {
  labeledInfo,
  labelStyled,
  styledInput,
  styledTextarea,
  mainLabel,
} from "../../styles/SideBarStyles/SideBarSpecialistData.module.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SideBarSpecialistEditDataButtons } from "./SideBarSpecialistEditDataButtons";
import store from "../../store/store";
import { therapistsSlice } from "../../store/therapistsSlice";

const handleChange = (func) => (e) => {
  func(e.target.value);
};
export const SideBarSpecialistEditData = ({ close }) => {
  const selectedDetailedTherapist = useSelector(
    (state) =>
      state.therapists.therapistsDetailedList[
        state.therapists.selectedTherapist
      ]
  );
  const selectedTherapist = useSelector(
    (state) =>
      state.therapists.therapistsList[state.therapists.selectedTherapist]
  );
  const [fullName, setFullName] = useState(selectedDetailedTherapist.fullName);
  const [aboutMe, setAboutMe] = useState(selectedDetailedTherapist.aboutMe);
  const save = () => {
    store.dispatch(
      therapistsSlice.actions.addTherapistToDetailedList({
        ...selectedDetailedTherapist,
        fullName: fullName,
        aboutMe: aboutMe,
      })
    );
    store.dispatch(
      therapistsSlice.actions.addTherapist({
        ...selectedTherapist,
        fullName: fullName,
      })
    );
  };
  return selectedDetailedTherapist ? (
    <>
      <span className={mainLabel}>Edytuj informacje o specjaliście</span>
      <div className={labeledInfo}>
        <span className={labelStyled}>Imię i nazwisko</span>
        <input
          className={styledInput}
          type="text"
          value={fullName}
          onChange={handleChange(setFullName)}
        />
      </div>
      <div className={labeledInfo}>
        <span className={labelStyled}>O mnie</span>
        <textarea
          className={styledTextarea}
          value={aboutMe}
          onChange={handleChange(setAboutMe)}
        />
      </div>
      <SideBarSpecialistEditDataButtons cancel={close} save={save} />
    </>
  ) : null;
};
