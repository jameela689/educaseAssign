import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useUser } from './UserContext'; 
function Login() {
    
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (formData.email && formData.password) {
        login(formData);
      navigate('/dashboard')
    }
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="page-heading">Signin to your PopX account</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-disabled">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;