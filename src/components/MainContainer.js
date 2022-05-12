import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
const API = 'http://localhost:3001/stocks'

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])

useEffect(()=>{
 fetch(API)
 .then((r)=>r.json())
 .then((stockData)=> setStocks(stockData))
  },[])

const buy = (stock) => {
  setPortfolio([...portfolio, stock])
} 
  console.log(portfolio)



  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} buy={buy}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;