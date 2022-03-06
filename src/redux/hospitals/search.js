const SEARCH_ITEMS = 'SEARCH/ITEMS';

export const searchItem = (payload, dispatch) => {
  dispatch(
    {
      type: SEARCH_ITEMS,
      payload,
    },
  );
};
const searchReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SEARCH_ITEMS: return payload.data.filter(
      (item) => item.name.toLocaleLowerCase().includes(
        payload.name.toLocaleLowerCase(),
      ),
    );
    default: return state;
  }
};

export default searchReducer;
