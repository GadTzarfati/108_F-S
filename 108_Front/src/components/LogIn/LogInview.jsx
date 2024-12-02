import React, { useState } from 'react';
import './LogInView.css';
import { useNavigate } from 'react-router-dom';

const LogInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); // אימות סיסמה
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignUp && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const url = isSignUp
      ? 'http://localhost:5000/api/users/register'
      : 'http://localhost:5000/api/users/login';

    const payload = isSignUp
      ? { name, email, password }
      : { email, password };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert(isSignUp ? 'Sign Up successful!' : 'Login successful!');
        if (!isSignUp) {
          navigate('/products');
        }
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="form-wrapper">
        <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
          <button type="submit" className="submit-button">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
        <p className="toggle-text">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          <button
            className="toggle-button"
            onClick={() => setIsSignUp((prev) => !prev)}
          >
            {isSignUp ? 'Log In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LogInView;
