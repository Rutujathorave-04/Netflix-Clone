import React from 'react';

const dropdownContent = () => (
  <div className="dropdownContainer">
    <div className="navigation__container--userLogo">
      <div className="dropdownContent">
        <div>
          <div className="dropdownContent--user"></div>
          <p className="dropdownContent--user-text">RUTUJA</p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-2"></div>
          <p className="dropdownContent--user-text">RAJ </p>
        </div>
        <div>
          <div className="dropdownContent--user dropdownContent--user-3"></div>
          <p className="dropdownContent--user-text">RADHU</p>
        </div>
        <p className="dropdownContent-text">Manage Profiles</p>
      </div>
      <div className="dropdownContent dropdownContent--2">
        <p className="dropdownContent-textOutside">Account</p>
        <p className="dropdownContent-textOutside">Help Center</p>
        <p className="dropdownContent-textOutside">Sign out of Netflix</p>
      </div>
    </div>
  </div>
);

export default dropdownContent;
