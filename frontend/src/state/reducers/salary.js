const initialState = {
  salary: {},
  tax: null,
};
const salaryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case "ADDINCOME":
      return {
        ...state,
        salary: payload,
      };
    case "CALCULATE_TAX":
      return {
        ...state,
        tax: payload.TaxInc,
      };
    default:
      return state;
  }
};

export default salaryReducer;
