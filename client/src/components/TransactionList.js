import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { getTransactions, transactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
