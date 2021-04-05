import {
  infoStyled,
  labeledInfo,
  labelStyled,
  spanInBlock,
  spanInList,
} from "../../styles/SideBarStyles/SideBarSpecialistData.module.scss";
import ReactHtmlParser from "react-html-parser";

export const SideBarSpecialistDataLabeledInfo = ({ label, data }) => {
  return (
    <div className={labeledInfo}>
      <span className={labelStyled}>{label}</span>
      <span className={infoStyled}>
        {Array.isArray(data) ? (
          data.map((x) => {
            return typeof x === "object" ? (
              <span className={spanInBlock}>{x.name}</span>
            ) : (
              <span className={spanInList}>{x}</span>
            );
          })
        ) : (
          <>{ReactHtmlParser(data)}</>
        )}
      </span>
    </div>
  );
};
