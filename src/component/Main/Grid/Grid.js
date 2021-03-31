import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Grid.module.scss';
import GridItem from './GridItem/GridItem';

const Grid = () => {
  const todoList = useSelector(state => state.main.todoList);

  let days = []
  for (let i = 1; i < 31; i++) {
    days.push({
      date: i,
      todos: []
    })
  }

  todoList.map((todo => {
    if (!todo.date || !todo.date.length > 0) {
      return;
    }
    const day = days[Number(todo.date.substring(8, 10)) - 1]
    day.todos.push(todo)
  }))

  return (
    <div className={classes.Grid}>
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      <GridItem />
      {days.map(dayItem => <GridItem
        key={'day_' + dayItem.date}
        day={dayItem.date}
        todos={dayItem.todos} />
      )}
    </div>
  )
}

export default Grid;