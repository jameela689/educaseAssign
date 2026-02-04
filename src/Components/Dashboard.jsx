import React from 'react';
import { useUser } from './UserContext';
function Dashboard() {
    const { user } = useUser();
  // Placeholder avatar - in production, this would come from user data
  const avatarUrl = 'https://i.pravatar.cc/150?img=5';

  return (
    <div className="page-container dashboard">
      <div className="content-wrapper">
        <div className="dashboard-header">
          <h2 className="dashboard-heading">Account Settings</h2>
        </div>

        <div className="profile-section">
          <div className="profile-avatar-wrapper">
            <img 
              src={avatarUrl} 
              alt="Profile" 
              className="profile-avatar"
            />
            <div className="camera-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 15.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm0-6.4c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4z"/>
                <path d="M19 3H5C3.3 3 2 4.3 2 6v12c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3zm1.4 15c0 .8-.6 1.4-1.4 1.4H5c-.8 0-1.4-.6-1.4-1.4V6c0-.8.6-1.4 1.4-1.4h14c.8 0 1.4.6 1.4 1.4v12z"/>
              </svg>
            </div>
          </div>
          
          <div className="profile-info">
            <h3 className="profile-name">{user?.fullName || 'Marry Doe'}</h3>
            <p className="profile-email">{user?.email || 'Marry@Gmail.Com'}</p>
          </div>
        </div>

        <div className="description-section">
          <p className="description-text">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, 
            Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore 
            Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;