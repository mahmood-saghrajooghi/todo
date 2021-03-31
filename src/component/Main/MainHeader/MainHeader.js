import React from 'react';
import CurrentTime from './CurrentTime/CurrentTime';
import classes from './MainHeader.module.scss';
import NavigationBottom from './Navigation/NavBottom/NavBottom';
import NavigationTop from './Navigation/NavTop/NavTop';
import Search from './Search/Search';

const MainHeader = (props) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const now = new Date();
  console.log(monthNames[now.getMonth()]);
  return (
    <div className={classes.MainHeader}>
      <div className={classes.HeaderBar}>
        <h1 className={classes.Date}>
          <span>
            {monthNames[new Date().getMonth()]}
          </span>
          <span>
            {now.getFullYear()}
          </span>
        </h1>
        <CurrentTime />
        <Search />
      </div>
      <NavigationTop />
      <NavigationBottom />
    </div>
  )
}

export default MainHeader;