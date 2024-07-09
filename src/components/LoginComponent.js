import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';

import './FormComponent.css';
import img1 from '../images/img2.jpg';

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('formData'));

    if (
      storedData &&
      storedData.username === loginData.username &&
      storedData.password === loginData.password
    ) {
      toast.success('Login successful!');
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="container">
        <ToastContainer />
      <div className="row">
        <div className="col-md-6 image-container">
          <img src={img1} alt="Background" className="img-fluid" />
        </div>
        <div className="col-md-6 form-container">
          <div className="form-wrapper">
            <h3>Login</h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  value={loginData.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-success" onClick={handleLogin}>
                Login
              </button>
              <div className="mt-3">
                <p>
                  Don't have an account? <Link to="/signup">Sign up here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
