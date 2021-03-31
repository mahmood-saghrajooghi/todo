import React from 'react';
import classes from './TodoItem.module.scss';

const TodoItem = (props) => {
  return (
    <div className={classes.TodoItem}>
      <button className={classes.Checkbox} onClick={props.checked}></button>
      <div className={classes.ItemInfo}>
        <span className={classes.ItemTitle}>{props.title}</span>
        <span className={[classes.ItemCaption, props.danger ? classes.Danger : ''].join(' ')}>{props.caption}</span>
      </div>
    </div>
  )
}

export default TodoItem;