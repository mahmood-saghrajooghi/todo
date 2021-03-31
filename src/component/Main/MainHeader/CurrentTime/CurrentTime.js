import React from 'react';
import classes from './CurrentTime.module.scss';

const CurrentTime = () => {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  return (
    <div className={classes.CurrentTime}>
      <div className={classes.Top}>Today</div>
      <div className={classes.Bottom}>
        <span>
          {new Date().getDate()},
        </span>
        <span>
          {days[new Date().getDay()].substring(0, 3)}
        </span>
      </div>
    </div>
  )
}

export default CurrentTime;