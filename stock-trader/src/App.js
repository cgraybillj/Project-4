import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';


function App() {
  const [data, setData] = useState({ stonk: [] });
  const [query, setQuery] = useState('AAPL')
  const [url, setURL] = useState('https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bdd25ea4aa4348f4ac78d98e1182b6dc');
  const [cash, setCash] = useState(10000);
  const [shares, setShares] = useState('')

  const getData = () => {
    fetch(`${url}`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson)
        setData([myJson])
      });
  }
  useEffect(() => {
    getData()
  }, [url])

  function handleBuyStonk() {
    setCash(cash - shares * selectedStock.price);
  };
  function handleSellStonk() {
    setCash(cash + shares * selectedStock.price);
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
            <StockRow name='Apple' ticker='AAPL' />
            <StockRow name='Microsoft' ticker='MSFT' />
            <StockRow name='Tesla' ticker='TSLA' />
          </tbody>
        </table>
      </div>

      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <button type="button" onClick={() =>
        setURL(`https://cloud.iexapis.com/stable/stock/${query}/quote?token=pk_bdd25ea4aa4348f4ac78d98e1182b6dc`)}>
        Search
      </button>
      {
        data && data.length > 0 && data.map((item, i) => <p key={i}>{item.close}</p>)
      }
      
    </div>
  );
}

export default App;