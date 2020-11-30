import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow';


function App() {
  const [data, setData] = useState({ stonk: [] });
  const [query, setQuery] = useState('AAPL')
  const [url, setURL] = useState('https://cloud.iexapis.com/stable/stock/AAPL/quote?token=pk_bdd25ea4aa4348f4ac78d98e1182b6dc');
  const [cash, setCash] = useState(10000);
  const [shares, setShares] = useState('1');

  const getData = () => {
    fetch(`${url}`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {

        setData([myJson])

      });
  }
  useEffect(() => {
    getData()
  }, [url])

  function handleBuyStonk() {

    {
      data && data.length > 0 && data.map((item, i) => setCash(cash - shares * item.close))
    }

  };
  function handleSellStonk() {
    {
      data && data.length > 0 && data.map((item, i) => setCash(cash + shares * item.close))
    }
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
            <StockRow name='Apple' ticker='SPY' />
            <StockRow name='Microsoft' ticker='DOW' />
            <StockRow name='Tesla' ticker='QQQ' />
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
          </div>
        </div>
      </div>



    </div >
  );
}

export default App;