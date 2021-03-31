import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../component/Drawer/Header/Header';
import TodoList from '../../component/Drawer/TodoList/TodoList';
import classes from './Drawer.module.scss';

const Drawer = () => {
  const todoList = useSelector(state => state.main.todoList)
  const doneList = useSelector(state => state.main.doneList)
  return (
    <div className={classes.Drawer}>
      <Header />
      <TodoList addButton={true} items={todoList} />
      <TodoList complete={true} items={doneList} />
    </div>
  )
}

export default Drawer;