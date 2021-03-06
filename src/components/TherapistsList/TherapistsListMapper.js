import { tbody } from "../../styles/TherapistsListStyles/TherapistsListMain.module.scss";
import { useSelector } from "react-redux";
import { TherapistsListItem } from "./TherapistsListItem";

export const TherapistsListMapper = () => {
  const pageSize = useSelector((state) => state.therapists.therapistsListSize);
  const currentPage = useSelector((state) => state.therapists.currentPage);
  const therapists = useSelector((state) =>
    Object.values(state.therapists.therapistsList).slice(
      (currentPage - 1) * pageSize,
      pageSize * currentPage
    )
  );
  return (
    <div className={tbody}>
      {therapists.map((therapist) => {
        return <TherapistsListItem key={therapist.therapistId} therapists={therapist} />;
      })}
    </div>
  );
};
