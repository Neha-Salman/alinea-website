import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Auth.css';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const submitHandler = async (e) => {

  e.preventDefault();

  try {

    const url = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/register';

    const { data } = await axios.post(url, {
      name,
      email,
      password,
    });

    localStorage.setItem(
      'userInfo',
      JSON.stringify(data)
    );

    if (isLogin) {

      toast.success('Welcome back to Alinéa ✨');

      setTimeout(() => {
        navigate('/');
      }, 1500);

    } else {

      toast.success(
        'Account created successfully ✨'
      );

      // CLEAR INPUTS
      setName('');
      setEmail('');
      setPassword('');

      // MOVE TO LOGIN PAGE
      setTimeout(() => {
        setIsLogin(true);
      }, 1200);
    }

  } catch (error) {

    toast.error(
      error.response?.data?.message ||
      'Something went wrong'
    );

  }
};

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>

        <form onSubmit={submitHandler}>
          {!isLogin && (
            <div>
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div>
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <p>
          {isLogin
            ? "Don't have an account?"
            : 'Already have an account?'}

          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              cursor: 'pointer',
              marginLeft: '5px',
              color: '#b7794b',
              fontWeight: '600',
            }}
          >
            {isLogin ? 'Sign Up' : 'Log in'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;