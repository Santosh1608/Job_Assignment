import React, { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Form/Login/Login";
import SignUp from "./pages/Form/SignUp/SignUp";
import Home from "./pages/Home/Home";
import Tax from "./pages/Tax/Tax";
import Modal from "./components/Modal/Modal";
import Alert from "./components/Alert/Alert";
function App() {
  const [modal, setModal] = useState(false);
  const authReducer = useSelector((state) => state.authReducer);
  const alertReducer = useSelector((state) => state.alertReducer);
  const publicRoutes = (
    <Switch>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Redirect to="/login" />
    </Switch>
  );

  const privateRoutes = (
    <>
      {modal && <Modal setModal={setModal} />}
      <Navbar />
      <Switch>
        <Route exact path="/home">
          <Home setModal={setModal} modal={modal} />
        </Route>
        <Route exact path="/tax">
          <Tax />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </>
  );

  let alert = null;
  if (alertReducer.error) {
    alert = { type: "error", value: alertReducer.error };
  } else if (alertReducer.success) {
    alert = { type: "success", value: alertReducer.success };
  }
  return (
    <>
      {alert && <Alert alert={alert} />}
      {authReducer.token ? privateRoutes : publicRoutes}
    </>
  );
}

export default App;
