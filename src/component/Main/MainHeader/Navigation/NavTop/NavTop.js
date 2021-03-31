import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import classes from './NavTop.module.scss';

const NavTop = (props) => {
  return (
    <div className={classes.NavTop}>
      <button className={classes.Arrow}>
        <FaChevronLeft className={classes.Icon} />
      </button>
      <button className={classes.NavItem}>Day</button>
      <button className={classes.NavItem}>Week</button>
      <button className={[classes.NavItem, classes.Active].join(' ')}>Month</button>
      <button className={classes.Arrow}>
        <FaChevronRight className={classes.Icon} />
      </button>
    </div>
  )
}

export default NavTop;