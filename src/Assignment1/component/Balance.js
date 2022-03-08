import React from "react";
import { connect } from "react-redux";
import "../CSS/Balance.css";

const Balance = ({ Data }) => {
  return (
    <>
      <div className="balance">
        <label className="d-inline-flex">Balance :</label>
        <h4 className="blnSpan d-inline-flex px-3"> {Data.balance}</h4>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  Data: state.reducer,
});

export default connect(mapStateToProps)(Balance);
