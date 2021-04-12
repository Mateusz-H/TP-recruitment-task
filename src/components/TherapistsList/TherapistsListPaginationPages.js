import store from "../../store/store";
import { therapistsSlice } from "../../store/therapistsSlice";
import {
  button,
  buttonCurrent,
  skippedButton,
} from "../../styles/TherapistsListStyles/TherapistsListPaginationMain.module.scss";

export const TherapistsListPaginationPages = ({
  currentPage,
  skippedPages,
}) => {
  const setPage = (page) => () => {
    if (page > 0) store.dispatch(therapistsSlice.actions.setPage(page));
  };
  return (
    <>
      {skippedPages.map((page,index) => {
        return page > 0 ? (
          <div
              key={index}
            onClick={setPage(page)}
            className={page === currentPage ? buttonCurrent : button}
          >
            {page}
          </div>
        ) : (
          <div key={index} className={skippedButton}>...</div>
        );
      })}
    </>
  );
};
