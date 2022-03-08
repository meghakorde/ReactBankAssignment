import React from "react";
import Table from "./component/Table";
import Balance from "./component/Balance";
import MainComponent from "./component/MainComponent";
const Bank = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-danger bg-dark">
          Perficient National Bank
        </h1>
        <div className="col-sm-12">
          <div className="row">
            <div className="col-sm-6 Box">
              <div id="add">
                <MainComponent heading="ADD DEPOSIT:" type="CREDIT" />
              </div>
            </div>
            <div className="col-sm-6 Box">
              <div id="sub">
                <MainComponent heading="SUBTRACT DEBIT:" type="DEBIT" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center font-bold">Ledger</h3>
        <Balance />
      </div>
      <div>
        <Table />
      </div>
    </>
  );
};
export default Bank;
