import React, { useState } from "react";
import "../CSS/MainComponent.css";
import { connect } from "react-redux";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { credit, debit } from "../Action/Action";

const MainComponent = (props) => {
  const [checkn, setCheckno] = useState(0);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const formDataHandler = (e) => {
    e.preventDefault();
    if (checkn === 0 || amount === 0) {
      alert("Please Enter The Amount And Check number");
    } else {
      if (props.type === "CREDIT") {
        dispatch(credit(amount, checkn));
        setAmount(0);
        setCheckno(0);
      } else {
        dispatch(debit(amount, checkn));
        setAmount(0);
        setCheckno(0);
      }
    }
  };
  const checknChangeHandler = (e) => {
    setCheckno(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="col-sm-12">
      <form onSubmit={formDataHandler} className="InputBox">
        <h2 className="text-center ">{props.heading}</h2>
        <div>
          <Input
            OnChange={checknChangeHandler}
            value={checkn}
            label="Check Number:"
          />
          <Input
            OnChange={amountChangeHandler}
            value={amount}
            label="Amount:"
          />
        </div>
        <button type="submit" className=" px-2 justify-content-center d-flex">
          Submit
        </button>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  Data: state.reducer,
});
const mapDispatchToProps = (dispatch) => {
  return {
    credit: () => dispatch({ type: "CREDIT" }),
    debit: () => dispatch({ type: "DEBIT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
