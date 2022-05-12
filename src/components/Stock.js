import React from "react";

function Stock({stock, buy}) {
  const {id, ticker, name, type, price} = stock
  return (
    <div>
      <div className="card" onClick={()=> buy(stock.id)} >
        <div className="card-body" id={id}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text"> {ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

