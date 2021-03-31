import React from 'react';
import classes from './GridItem.module.scss';

const GridItem = (props) => {
  return (
    <div className={classes.GridItem}>
      <span>
        {props.day ? props.day : ''}
      </span>
      {props.todos && props.todos.length > 0 ? props.todos.map(todo => {
        return <div key={todo.key ?? todo.date} className={classes.Todo}>{todo.title}</div>
      }) : ''}
    </div>
  )
}

export default GridItem;