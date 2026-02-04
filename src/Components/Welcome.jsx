
import React from 'react'
import {useNavigate} from 'react-router-dom'
function Welcome() {
    const navigate = useNavigate();
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="main-heading">Welcome to PopX</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>

        <div className="button-group">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/signup')}
          >
            Create Account
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;