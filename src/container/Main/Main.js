import React from 'react';
import Grid from '../../component/Main/Grid/Grid';
import MainHeader from '../../component/Main/MainHeader/MainHeader';
import classes from './Main.module.scss';

const Main = () => {
  return(
  <div className={classes.Main}>
    <MainHeader />
    <Grid />
  </div>
  );
}
export default Main;