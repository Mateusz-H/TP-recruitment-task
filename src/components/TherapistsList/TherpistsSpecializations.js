import { therapistsListSpan } from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
export const TherapistsSpecializations = ({ id, specializations }) => {
  return (
    <span className={therapistsListSpan}>
      {specializations.slice(0,3).map((x) => {
        return <span>{x}</span>;
      })}
    </span>
  );
};
