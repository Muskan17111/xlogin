import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setMessage('mandatory to fill both the fields');
    } else if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div className="App">
       <h3>Login Page</h3>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="login-form">
          {message && (
            <div className={`message ${message.includes('Invalid') ? 'error' : 'success'}`}>
              {message}
            </div>
          )}
          
          <div className='form'>
            <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          </div>
         <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
         </div>
         </div>
          <button type="submit">Submit</button>
          
        </form>
      ) : (
        <div className="welcome-message">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;


