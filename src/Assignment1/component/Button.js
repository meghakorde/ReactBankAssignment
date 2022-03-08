import React from "react";

function Button({ btn }) {
  return (
    <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <button className="w-auto btn btn-success px-2">{btn}</button>
        </div>
      </div>
    </div>
  );
}
export default Button;
