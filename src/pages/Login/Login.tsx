import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

// Import images - static import method
import unionLogo from '../../assets/images/Union.png?url';
import pabloSignIn from '../../assets/images/pablo-sign-in 1.svg?url';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo">
          <img src={unionLogo} alt="Logo" className="logo-icon" />
          <span>lendsqr</span>
        </div>
        <div className="illustration">
          <img src={pabloSignIn} alt="Sign in illustration" />
        </div>
      </div>
      
      <div className="login-right">
        <div className="login-form-wrapper">
          <div className="logo-mobile">
            <img src={unionLogo} alt="Logo" className="logo-icon" />
            <span>lendsqr</span>
          </div>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="input-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-hide-btn"
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>
            
            <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
            
            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
