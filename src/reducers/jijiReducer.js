let jijiReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_JIJI_DATA":
      console.log(action.data.data)
      return state = action.data.data;
    default:
      return state;
  }
};
export default jijiReducer