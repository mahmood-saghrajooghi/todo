import React from 'react';
import { FaSearch } from 'react-icons/fa';
import classes from './Search.module.scss';

const Search = () => {
  return <div className={classes.Search}>
    <div className={classes.InputContainer}>
      <FaSearch className={classes.Icon} />
      <input type="text" className={classes.Input} placeholder="Search"/>
    </div>
  </div>
}

export default Search;