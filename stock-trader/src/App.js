import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow'

const STOCK_PRICES = [
  { name: 'AAPL', price: '120' },
  { name: 'MSFT', price: '110' },
  { name: 'TSLA', price: '80' }
]

function App() {
  const [searchStockStr, setSearchStockStr] = useState('');
  const [selectedStock, setSelectedStock] = useState('');
  const [shares, setShares] = useState('1');
  const [cash, setCash] = useState(10000);

const buyStock = async () => {
    let cost = shares * selectedStock.price;
    let cashRemaining = cash - cost;
    console.log(setCash(cashRemaining));
  };

const sellStock = async () => {
    let gain = shares * selectedStock.price;
    let cashGained = cash + gain;
    console.log(setCash(cashGained));
  }
  

  const getQuote = async () => {
    let stock;
    STOCK_PRICES.map((s) => {
      if (s.name == searchStockStr) {
        stock = s;
      }
    })

    // console.log(stock);

    setSelectedStock(stock);

    console.log('get quote was clicked! and the value of the search string is: ', searchStockStr);
    setSearchStockStr('');
  };

  const onInputChange = async (event) => {
    setSearchStockStr(event.currentTarget.value);
  }


  return (
    <div className="App">
      <div className='container'>
        <div className='alert alert-info text-center'> The Markets Today! </div>
      </div>
      <div className='container'>
        <table className='table table-bordered'>
          <thead className='thead-dark'>
            <tr>
              <th> Name </th>
              <th> Ticker </th>
              <th> Price </th>
              <th> Date </th>
              <th> Time </th>
            </tr>
          </thead>
          <tbody>
            <StockRow name='Apple' ticker='AAPL' />
            <StockRow name='Microsoft' ticker='MSFT' />
            <StockRow name='Tesla' ticker='TSLA' />
          </tbody>
        </table>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="input-group mb-3">

              <input type="text" className="form-control" placeholder="Type Your Ticker Symbol!" aria-label="Ticker Symbol" aria-describedby="button-addon2" value={searchStockStr} onChange={onInputChange} />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={getQuote}>Search Ticker!</button>
              <div className="input-group-append">
              </div>
            </div>

            {selectedStock && <div>
              <p className='alert alert-success'>Current Selected Stock: {selectedStock.name} | Price: ${selectedStock.price}</p>

              <br />
              <button onClick={() => {
                setShares(1);
              }} className={shares == 1 ? 'alert alert-success' : 'alert alert-primary'}>1</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(5);
              }} className={shares == 5 ? 'alert alert-success' : 'alert alert-primary'}>5</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(10);
              }} className={shares == 10 ? 'alert alert-success' : 'alert alert-primary'}>10</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(15);
              }} className={shares == 15 ? 'alert alert-success' : 'alert alert-primary'}>15</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(20);
              }} className={shares == 20 ? 'alert alert-success' : 'alert alert-primary'}>20</button>&nbsp;&nbsp;
            <br />
              <br />

            <button className='alert alert-success' onClick={buyStock}>BUY</button>&nbsp;&nbsp;
            <button className='alert alert-danger' onCick={sellStock}>SELL</button>&nbsp;&nbsp;

            </div>}
          </div>

          <div className="col-sm">
            <div className='alert alert-info'> Postions:  </div>
            <div className='container'>
              <table className='table table-bordered'>
                <thead className='thead-dark'>
                  <tr>
                    <th> Name </th>
                    <th> Ticker </th>
                    <th> # of Shares </th>
                    <th> Price </th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            </div>
            <div className='alert alert-danger text-center'> Cash Available: {cash} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
