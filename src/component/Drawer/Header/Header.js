import React from 'react';
import Avatar from '../../../assets/images/person.png';
import classes from './Header.module.scss';

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.ImageContainer}>
        <img src={Avatar} />
      </div>
      <div className={classes.InfoContainer}>
        <span className={classes.UserName}>Jhon doe</span>
        <span className={classes.Role}>Admin</span>
      </div>
    </div>
  )
}

export default Header;