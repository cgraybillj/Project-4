import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockRow from './components/StockRow'

function App() {
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
          <tbody className='text-center'>
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
              <input type="text" className="form-control" placeholder="Ticker Symbol" aria-label="Ticker Symbol" aria-describedby="button-addon2"></input>
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
              </div>
            </div>
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
