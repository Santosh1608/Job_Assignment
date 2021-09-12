import axios from "axios";
export const login = (loginData) => async (dispatch) => {
  try {
    console.log(loginData);
    const res = await axios.post("http://localhost:8080/signin", loginData);
    dispatch({ type: "LOGIN", payload: res.data });
    dispatch({ type: "SUCCESS", payload: "Login success" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error.response.data.error });
  } finally {
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
    }, 5000);
  }
};
export const signup = (signUpData) => async (dispatch) => {
  try {
    console.log(signUpData);
    const res = await axios.post("http://localhost:8080/signup", signUpData);
    dispatch({ type: "SIGNUP", payload: res.data });
    dispatch({ type: "SUCCESS", payload: "Signup success" });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error.response.data.error });
  } finally {
    setTimeout(() => {
      dispatch({ type: "CLEAR" });
    }, 5000);
  }
};
export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
  dispatch({
    type: "SUCCESS",
    payload: "Logout Success",
  });
  setTimeout(() => {
    dispatch({ type: "CLEAR" });
  }, 5000);
};
