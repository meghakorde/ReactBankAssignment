import React from "react";
import { connect } from "react-redux";
import { credit, debit } from "../Action/Action";

import "../CSS/Table.css";

const Table = ({ Data }) => {
  console.log("Table", Data);
  return (
    <>
      <div className="table-container color-light">
        <table className="w-100 border-collapse-collapse tbl">
          <thead>
            <tr>
              <th>Date:</th>
              <th>Type:</th>
              <th>CheckNo:</th>
              <th>Amount:</th>
            </tr>
          </thead>
          <tbody>
            {Data.tblActivity.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.type}</td>
                  <td>{item.checkn}</td>
                  <td>{item.amount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  Data: state.reducer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    credit: () => dispatch(credit()),
    debit: () => dispatch(debit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
