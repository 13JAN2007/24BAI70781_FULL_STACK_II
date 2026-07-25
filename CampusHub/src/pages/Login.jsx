import React, { useState } from 'react';
import { validateLogin } from '../utils/validation';

export const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateLogin(email, password);
    if (validationError) {
      setError(validationError);
      return;
    }
    // Dummy login user payload
    onLogin({ name: 'Akash', email });
  };

  return (
    <div className="card" style={{ maxWidth: '350px', margin: '100px auto', padding: '30px' }}>
      <h2>CampusHub Login</h2>
      {error && <p style={{ color: 'red', fontSize: '0.9rem' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input 
          className="input" 
          type="text" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          className="input" 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button className="btn" style={{ width: '100%', marginTop: '10px' }} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;