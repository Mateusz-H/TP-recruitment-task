import {
  therapistsListSpan,
  tooltipText,
  spanInList,
} from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
export const TherapistsSpecializations = ({ id, specializations }) => {
  return (
    <div className={therapistsListSpan}>
      {specializations.length > 3 ? (
        <span className={tooltipText}>
          {specializations.map((x) => (
            <span className={spanInList}>{x}</span>
          ))}
        </span>
      ) : null}
      {specializations.slice(0, 3).map((x) => {
        return <span className={spanInList}>{x}</span>;
      })}
        {specializations.length>3?"...":null}
    </div>
  );
}
