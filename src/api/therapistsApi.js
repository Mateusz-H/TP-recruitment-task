class TherapistsApi {
  constructor() {}

  getTherapists = function () {
    fetch(process.env.REACT_APP_DEFAULT_API_URI, defaultPostConfig)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
      });
  };
  getTherapistDetails = function (therapistsId) {
    fetch(`${process.env.REACT_APP_DEFAULT_API_URI}/${therapistsId}`)
      .then((res) => res.json())
      .then((response) => {});
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
