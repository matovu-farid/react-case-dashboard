const SEARCH_HOSPITALS = 'HOSPITALS/SEARCH';
export const searchHospital = (payload, dispatch) => {
  dispatch(
    {
      type: SEARCH_HOSPITALS,
      payload,
    },
  );
};
const searchReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SEARCH_HOSPITALS: return payload.data.filter(
      (hospital) => hospital.name.toLocaleLowerCase().includes(
        payload.name.toLocaleLowerCase(),
      ),
    );
    default: return state;
  }
};

export default searchReducer;
