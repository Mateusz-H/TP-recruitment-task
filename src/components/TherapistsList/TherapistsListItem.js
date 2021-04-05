import {
  td,
  therapistsListSpan,
  tr,
} from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
import { TherapistsSpecializations } from "./TherpistsSpecializations";
import { therapistsSlice } from "../../store/therapistsSlice";
import store from "../../store/store";
import { therapistsApi } from "../../api/therapistsApi";
import { useSelector } from "react-redux";

export const TherapistsListItem = ({ therapists }) => {
  const therapistDetailed = useSelector(
    (state) => state.therapists.therapistsDetailedList[therapists.therapistId]
  );
  const setTherapist = (therapists) => {
    store.dispatch(
      therapistsSlice.actions.setSelectedTherapist(therapists.therapistId)
    );
    store.dispatch(therapistsSlice.actions.setSideBarStatus(true));
  };
  const setSideBarVisible = () => {
    if (!therapistDetailed) {
      therapistsApi.getTherapistDetails(therapists.therapistId).then(() => {
        setTherapist(therapists);
      });
    } else {
      setTherapist(therapists);
    }
  };
  return (
    <div className={tr}>
      <div className={td}>
        <img src={therapists.avatarUrl} />
        <span className={therapistsListSpan}>{therapists.fullName}</span>
      </div>
      <div onClick={setSideBarVisible} className={td}>
        <TherapistsSpecializations
          id={therapists.therapistId}
          specializations={therapists.specializations}
        />
      </div>
    </div>
  );
};
