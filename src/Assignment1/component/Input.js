import React from "react";

const Input = ({ label, value, OnChange }) => {
  return (
    <div className=" col-sm-12">
      <div className="row">
        <div className="col-sm-4">
          <label>{label}</label>
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <input
            className=" w-100 text-end"
            min="0.01"
            step="0.001"
            type="number"
            value={value}
            onChange={OnChange}
          />
        </div>
      </div>
    </div>
  );
};
export default Input;
