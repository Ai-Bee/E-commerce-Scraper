let amazonReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_AMAZON_DATA":
      console.log(action.data.data)
      return state = action.data.data;
    default:
      return state;
  }
};
export default amazonReducer