import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio}) {

  const renderStocks = () => {
    return portfolio.map(stock => {
      return <Stock key ={stock.id}  stock={stock} />})
  }
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        renderStocks()
      }
    </div>
  );
}

export default PortfolioContainer;