import React, { useState, useEffect } from "react";
import classes from "./Home.module.css";
import { useDispatch } from "react-redux";
import { addIncome } from "../../state/actions/salary";
import Loading from "../../components/Loading/Loading";
function Home({ setModal, modal }) {
  const dispatch = useDispatch();
  const [Basic, setBasic] = useState("");
  const [LTA, setLTA] = useState("");
  const [HRA, setHRA] = useState("");
  const [FA, setFA] = useState("");
  const [Inv, setInv] = useState("");
  const [Rent, setRent] = useState("");
  const [CityType, setCityType] = useState("Metro");
  const [Med, setMed] = useState("");
  const [show, setShow] = useState(false);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("---------------------", Basic, CityType, modal);
    Basic && LTA && HRA && FA && Inv && Rent && CityType && Med
      ? setDisable(false)
      : setDisable(true);
  }, [Basic, LTA, HRA, FA, Inv, Rent, CityType, Med, modal]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      addIncome({ Basic, LTA, HRA, FA, Inv, Rent, CityType, Med }, setModal)
    );
    setLoading(false);
  };

  const onClearHandler = (e) => {
    e.preventDefault();
    setBasic("");
    setCityType("Metro");
    setFA("");
    setHRA("");
    setInv("");
    setLTA("");
    setMed("");
    setRent("");
  };

  return loading ? (
    <Loading />
  ) : (
    <div className={classes.Home}>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label for="Basic">Basic</label>
          <input
            id="Basic"
            onChange={(e) => setBasic(e.target.value)}
            type="number"
            value={Basic}
            placeholder="Basic"
            required
          />
        </div>
        <div>
          <label for="LTA">LTA</label>

          <input
            onChange={(e) => setLTA(e.target.value)}
            type="number"
            id="LTA"
            placeholder="LTA"
            required
            value={LTA}
          />
        </div>
        <div>
          <label for="HRA">HRA</label>

          <input
            onChange={(e) => setHRA(e.target.value)}
            type="number"
            id="HRA"
            placeholder="HRA"
            required
            value={HRA}
          />
        </div>
        <div>
          <label for="FA">Food Allowance</label>

          <input
            onChange={(e) => setFA(e.target.value)}
            type="number"
            id="FA"
            placeholder="Food Allowance"
            required
            value={FA}
          />
        </div>
        <div>
          <label for="Inv">Investments</label>

          <input
            onChange={(e) => setInv(e.target.value)}
            type="number"
            id="Inv"
            placeholder="Investments"
            required
            value={Inv}
          />
        </div>
        <div>
          <label for="Rent">Rent</label>

          <input
            onChange={(e) => setRent(e.target.value)}
            type="number"
            id="Rent"
            placeholder="Rent"
            required
            value={Rent}
          />
        </div>
        <div>
          <label for="Med">Mediclaim policy premium paid</label>

          <input
            onChange={(e) => setMed(e.target.value)}
            type="number"
            id="Med"
            placeholder="Mediclaim policy premium paid"
            required
            value={Med}
          />
        </div>
        <div>
          <div className={classes.Last}>
            <div className={classes.City} name="CityType">
              <p onClick={() => setShow((show) => !show)}>
                {CityType}
                <i class="fas fa-arrow-down"></i>
              </p>
              {show && (
                <>
                  <p
                    onClick={(e) => {
                      setCityType((state) =>
                        state === "Metro" ? "NonMetro" : "Metro"
                      );
                      setShow(false);
                    }}
                  >
                    {CityType === "Metro" ? "NonMetro" : "Metro"}
                  </p>
                </>
              )}
            </div>
          </div>
          <div>
            <div className={classes.Button}>
              <button onClick={onClearHandler}>Clear</button>
            </div>
            <div className={classes.Button}>
              <button disabled={disable}>Continue</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
