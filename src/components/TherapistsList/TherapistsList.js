import {
  therapistsListMain,
  table,
  thead,
  th,
  therapistsListSpan,
} from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
import { TherapistsListMapper } from "./TherapistsListMapper";
import {TherapistsListPagination} from "./TherapistsListPagination";

export const TherapistsList = () => (
  <div className={therapistsListMain}>
    <div className={table}>
      <div className={thead}>
        <div className={th}>
          <span className={therapistsListSpan}> Specjalista</span>
        </div>
        <div className={th}>
          <span className={therapistsListSpan}>Specjalizacje</span>
        </div>
      </div>
      <TherapistsListMapper />
      <TherapistsListPagination/>

    </div>
  </div>
);
