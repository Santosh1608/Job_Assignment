const initialState = {
  error: null,
  success: null,
};
const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "ERROR":
      return {
        ...state,
        error: payload,
      };
    case "SUCCESS":
      return {
        ...state,
        success: payload,
      };
    case "CLEAR":
      return {
        ...state,
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
