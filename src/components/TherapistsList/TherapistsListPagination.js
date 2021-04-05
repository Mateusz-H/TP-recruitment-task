import {
  pagination,
  button,
  paginationWrapper,
  buttonDisabled,
} from "../../styles/TherapistsListStyles/TherapistsListPaginationMain.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPage, therapistsSlice } from "../../store/therapistsSlice";
import store from "../../store/store";
import { getPagesRange, getSkippedPages } from "../../utils/paginationUtils";
import { TherapistsListPaginationPages } from "./TherapistsListPaginationPages";
export const TherapistsListPagination = () => {
  const therapists = useSelector((state) => state.therapists.therapistsList);
  const listSize = useSelector((state) => state.therapists.therapistsListSize);
  const currentPage = useSelector((state) => state.therapists.currentPage);
  const numberOfPages = Math.ceil(therapists.length / listSize);
  const prevPage = () => {
    if (currentPage - 1 > 0)
      store.dispatch(therapistsSlice.actions.setPage(currentPage - 1));
  };
  const nextPage = () => {
    if (currentPage + 1 <= numberOfPages)
      store.dispatch(therapistsSlice.actions.setPage(currentPage + 1));
  };

  return (
    <div className={paginationWrapper}>
      <div className={pagination}>
        <div
          onClick={prevPage}
          className={currentPage === 1 ? buttonDisabled : button}
        >
          {"<"}
        </div>
        <TherapistsListPaginationPages
            currentPage={currentPage}
          skippedPages={getSkippedPages(
            getPagesRange(currentPage, numberOfPages)
          )}
        />
        <div
          onClick={nextPage}
          className={currentPage === numberOfPages ? buttonDisabled : button}
        >
          {">"}
        </div>
      </div>
    </div>
  );
};
