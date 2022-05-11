import React from "react";
import Stock from "./Stock";

function StockContainer({stocks}) {
  const stockObj = stocks.map((stock)=> <Stock key={stock.id} stock={stock} />)
  return (
    <div>
      <h2>Stocks</h2>
     {stockObj}
    </div>
  );
}

export default StockContainer;
