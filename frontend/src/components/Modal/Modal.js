import React, { useState } from "react";
import { calculate_tax } from "../../state/actions/salary";
import classes from "./Modal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";
function Modal({ setModal }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { salary } = useSelector((state) => state.salaryReducer);
  const onClickHandler = async () => {
    setLoading(true);
    await dispatch(calculate_tax(setModal, history));
    setLoading(false);
  };
  return (
    <>
      <div onClick={() => setModal(false)} className={classes.Modal}></div>
      <div className={classes.Preview}>
        {loading ? (
          <div className={classes.Loader}>
            <Loading />
          </div>
        ) : (
          <div className={classes.PreviewData}>
            <>
              <div>
                <span>Basic</span>
                <span>{salary.Basic}</span>
              </div>
              <div>
                <span>LTA</span>
                <span>{salary.LTA}</span>
              </div>
              <div>
                <span>HRA</span>
                <span>{salary.HRA}</span>
              </div>
              <div>
                <span>Food Allowance</span>
                <span>{salary.FA}</span>
              </div>
              <div>
                <span>Investments</span>
                <span>{salary.Inv}</span>
              </div>
              <div>
                <span>Rent</span>
                <span>{salary.Rent}</span>
              </div>
              <div>
                <span>CityType</span>
                <span>{salary.CityType}</span>
              </div>
              <div>
                <span>Mediclaim policy premium paid</span>
                <span>{salary.Med}</span>
              </div>
              <div>
                <span>Applicable HRA</span>
                <span>{salary.AppHRA}</span>
              </div>
              <div>
                <button onClick={onClickHandler}>Submit</button>
              </div>
            </>
          </div>
        )}
      </div>
    </>
  );
}

export default Modal;
