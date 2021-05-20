let jumiaReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_JUMIA_DATA":
      return state = action.data.data;
    default:
      return state;
  }
};
export default jumiaReducer