import axios from "axios";

export const addIncome = (data, setModal) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:8080/addIncome", data, {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "ADDINCOME", payload: res.data });
    setModal(true);
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error.response.data.error });
  } finally {
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
    }, 5000);
  }
};

export const calculate_tax = (setModal, history) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8080/calculateTax", {
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    dispatch({ type: "CALCULATE_TAX", payload: res.data });
    setModal(false);
    history.push("/tax");
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error.response.data.error });
  } finally {
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
    }, 5000);
  }
};
