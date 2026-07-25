import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. State Variables
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [rate, setRate] = useState(0);

  // 2. Fetch exchange rates whenever 'fromCurrency' changes
  useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the target currency rate from the rates object
        setRate(data.rates[toCurrency]);
      });
  }, [fromCurrency, toCurrency]); 

  // 3. Calculation logic
  const convertedAmount = (amount * rate).toFixed(2);

  return (
    <div className="card">
      <h2>Currency Converter</h2>

      <div className="field">
        <label>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
        />
      </div>

      <div className="field">
        <label>From:</label>
        <select 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          <option value="USD">USD - US Dollar</option>
          <option value="EUR">EUR - Euro</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="INR">INR - Indian Rupee</option>
        </select>
      </div>

      <div className="field">
        <label>To:</label>
        <select 
          value={toCurrency} 
          onChange={(e) => setToCurrency(e.target.value)}
        >
          <option value="EUR">EUR - Euro</option>
          <option value="USD">USD - US Dollar</option>
          <option value="GBP">GBP - British Pound</option>
          <option value="INR">INR - Indian Rupee</option>
        </select>
      </div>

      <div className="output">
        <h3>{amount} {fromCurrency} = {convertedAmount} {toCurrency}</h3>
      </div>
    </div>
  );
}

export default App;