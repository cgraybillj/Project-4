import React, { useSemiPersistentState, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow'
import Search from './components/Search'

const STOCK_PRICES = [
  { name: 'AAPL', price: '120' },
  { name: 'MSFT', price: '110' },
  { name: 'INTL', price: '80' }
]

function App() {
  const [searchTicker, setSearchTicker] = useState('aapl');
  const [searchStockStr, setSearchStockStr] = useState('');
  const [selectedStock, setSelectedStock] = useState();

  const onInputChange = (event) => {
    setSearchTicker(event.target.value);
  };

  const getQuote = async () => {
    let stock;
    STOCK_PRICES.map((s) => {
      if(s.name == searchStockStr){
        stock = s;
      }
    })

    // console.log(stock);

    setSelectedStock(stock);

    console.log('get quote was clicked! and the value of the search string is: ', searchStockStr);
    setSearchStockStr('');
  };

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
            <StockRow name='SP 500' ticker='spy' />
            <StockRow name='NASDAQ' ticker='qqq' />
            <StockRow name='DOW' ticker='dow' />
          </tbody>
        </table>
      </div>


      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Type Your Ticker Symbol!" aria-label="Ticker Symbol" aria-describedby="button-addon2" value={searchTicker} onChange={onInputChange} />
              <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={getStock}>Search Ticker!</button>
              <div className="input-group-append">
              </div>
            </div>
            <table className='table table-bordered'>
              <thead className='thead-dark'>
                <tr className='text-center'>
                  <th> Ticker </th>
                  <th> Price </th>
                  <th> Spread </th>
                  <th> Volume </th>
                </tr>
              </thead>
              <tbody className='text-center'>

              </tbody>
            </table>
          </div>
          <div class="col-sm">
            One of three columns
    </div>
        </div>
      </div>
    </div>
  );
}

export default App;
