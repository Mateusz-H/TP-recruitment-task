import {
tbody
} from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
import { useSelector } from "react-redux";
import {TherapistsListItem} from "./TherapistsListItem";
export const TherapistsListMapper = () => {
  const pageSize = useSelector((state) => state.therapists.therapistsListSize);
  const therapists = useSelector((state) =>
    state.therapists.therapistsList.slice(0, pageSize)
  );
  return (
    <div className={tbody}>
      {therapists.map((therapist) => {
        return <TherapistsListItem therapists={therapist}/> ;
      })}
    </div>
  );
};
