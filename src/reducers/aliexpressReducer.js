let aliReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_AL_DATA":
      return state = action.data.data.content;
    default:
      return state;
  }
};
export default aliReducer