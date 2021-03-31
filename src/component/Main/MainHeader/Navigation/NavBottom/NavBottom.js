import React from 'react';
import classes from './NavBottom.module.scss';

const MainHeader = (props) => {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return (
    <ul className={classes.NavBottom}>
      {days.map(day => {
        return <li key={'day_' + day}>{day.substring(0, 3)}</li>
      })}
    </ul>
  )
}

export default MainHeader;