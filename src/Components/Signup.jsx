import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { useUser } from './UserContext'; 
function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });
  const navigate = useNavigate();
  const { signup } = useUser();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRadioChange = (value) => {
    setFormData({
      ...formData,
      isAgency: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
    navigate("/login")
  };

  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="page-heading">Create your PopX account</h1>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Full Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Phone number<span className="required">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email address<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Company name</label>
            <input
              type="text"
              name="company"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label radio-label">
              Are you an Agency?<span className="required">*</span>
            </label>
            <div className="radio-group">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={() => handleRadioChange('yes')}
                />
                <span className="radio-label-text">Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={() => handleRadioChange('no')}
                />
                <span className="radio-label-text">No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;