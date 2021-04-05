import store from "../store/store";
import { therapistsSlice } from "../store/therapistsSlice";

class TherapistsApi {

  getTherapists = function () {
    fetch(process.env.REACT_APP_DEFAULT_API_URI, defaultPostConfig)
      .then((res) => res.json())
      .then((response) => {
        let therapists = {};
        if (Array.isArray(response.therapists)) {
          response.therapists.forEach((therapist) => {
            therapists[therapist.therapistId] = therapist;
          });
        }
        store.dispatch(therapistsSlice.actions.setTherapists(therapists));
      });
  };
  getTherapistDetails = function (therapistsId) {
    return fetch(`${process.env.REACT_APP_DEFAULT_API_URI}/${therapistsId}`)
      .then((res) => res.json())
      .then((response) => {
          console.log({response})
        store.dispatch(
          therapistsSlice.actions.addTherapistToDetailedList(response)
        );
      });
  };
}
export const therapistsApi = new TherapistsApi();
const defaultPostConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    citySeoName: "ONLINE",
  }),
};
