export const FilterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FILTER":
      if (state.includes(action.payload.filter)) {
        return state;
      }
      return [...state, action.payload.filter];
    case "REMOVE_FILTER":
      return state.filter((filt) => filt !== action.payload.filter);
    case "CLEAR_ALL":
      return [];
    default:
      return state;
  }
};
