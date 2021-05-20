let kongaReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_KONGA_DATA":
        return state = action.data.data;
      default:
        return state;
    }
  };
  export default kongaReducer