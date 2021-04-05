import {
  tr,
  td,
    therapistsListSpan
} from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
import {TherapistsSpecializations} from "./TherpistsSpecializations";
export const TherapistsListItem = ({ therapists }) => {
  return (
    <div className={tr}>
      <div className={td}>
        <img src={therapists.avatarUrl} />
        <span className={therapistsListSpan}>{therapists.fullName}</span>
      </div>
      <div className={td}>
          <TherapistsSpecializations id={therapists.id} specializations={therapists.specializations}/>
      </div>
    </div>
  );
};
