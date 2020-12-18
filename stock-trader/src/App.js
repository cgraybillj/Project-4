import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';
import axios from 'axios';

function App() {
  const [data, setData] = useState({ stonk: [] });
  const [query, setQuery] = useState('AAPL')
  const [url, setURL] = useState('https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bdd25ea4aa4348f4ac78d98e1182b6dc');
  const [cash, setCash] = useState(10000);
  const [shares, setShares] = useState('1');
  const [position, setPosition] = useState([]);

  const getData = () => {
    fetch(`${url}`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {

        setData([myJson])
        console.log(data)

      });
  }
  useEffect(() => {
    getData()
  }, [url])

  let fetchPositions = async () => {
    let res = await fetch('http://localhost:9000/account');
    let stuff = await res.json();
    setPosition(stuff);
    console.log(position);
  }

  useEffect(() => {
    fetchPositions();
  }, [])


  function handleBuyStonk() {

    {
      data && data.length > 0 && data.map((item, i) => setCash(cash - shares * item.close)
      )
    }

  };

  function handleSellStonk() {
    {
      data && data.length > 0 && data.map((item, i) => setCash(cash + shares * item.close))
    }
  };

  return (
    <div className="App">
      <br />
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
            <StockRow name='SPY' ticker='SPY' />
            <StockRow name='DOW' ticker='DOW' />
            <StockRow name='QQQ' ticker='QQQ' />
          </tbody>
        </table>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className='container'>
              <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
              <button type="button" className="btn btn-success" onClick={() =>
                setURL(`https://cloud.iexapis.com/stable/stock/${query}/quote?token=pk_bdd25ea4aa4348f4ac78d98e1182b6dc`)}>
                Search
              </button>
            </div>
            <br />
            <div className='container'>
              <div className='alert alert-warning text-center'>
                {
                  data && data.length > 0 && data.map((item, i) => <p key={i}> Stock: {item.companyName} | Price: {item.close}</p>)
                }
              </div>
            </div>
            {query && <div>

              <br />
              <button onClick={() => {
                setShares(1);
              }} className={shares == 1 ? 'alert alert-success' : 'alert alert-info'}>1</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(5);
              }} className={shares == 5 ? 'alert alert-success' : 'alert alert-info'}>5</button>&nbsp;&nbsp;

                  < button onClick={() => {
                setShares(10);
              }} className={shares == 10 ? 'alert alert-success' : 'alert alert-info'}>10</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(15);
              }} className={shares == 15 ? 'alert alert-success' : 'alert alert-info'}>15</button>&nbsp;&nbsp;

            <button onClick={() => {
                setShares(20);
              }} className={shares == 20 ? 'alert alert-success' : 'alert alert-info'}>20</button>&nbsp;&nbsp;
            <br />
              <br />
              <button className={'alert alert-success'} onClick={handleBuyStonk}>BUY</button>&nbsp;&nbsp;
                <button className={'alert alert-danger'} onClick={handleSellStonk}>SELL</button>&nbsp;&nbsp;

            </div>}
          </div>
          <div className="col-sm">
            <div className='alert alert-danger text-center'> Cash Available: {cash} </div>

            <div className='container'>
              <div className='alert alert-warning text-center'>
                {
                  position && position.length > 0 && position.map((item) => <p key={item.id}> Stock: {item.stonkTicker} &nbsp;&nbsp; | Shares: {item.numShares} &nbsp;&nbsp;| Purchase Price: {item.purchasePrice}

                  &nbsp;&nbsp;&nbsp;

                    <button className={'alert alert-danger'} onClick={handleSellStonk}> Sell Position! </button>

                  </p>

                  )
                }
              </div>
            </div>

          </div>
        </div>
      </div>



    </div >
  );
}

export default App;