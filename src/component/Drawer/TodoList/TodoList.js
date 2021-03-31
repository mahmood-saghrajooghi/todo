import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { checkTodo } from '../../../store/actions/index';
import AddButton from './AddButton/AddButton';
import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.module.scss';

const TodoList = (props) => {

  const dispatch = useDispatch();

  return (
    <div className={classes.TodoList}>
      {
        props.addButton === true ? <AddButton /> : ''
      }
      {
        props.complete === true ? <div className={classes.CompleteHeader}>
          <span className={classes.Title}>
            Completed
          </span>
          <span className={classes.DownArrow}>
            <FaChevronDown className={classes.Icon} />
          </span>
        </div> : ''
      }
      {props.items ?
        <div className={classes.ItemsContainer}>
          {props.items.map(item => <TodoItem
            key={item.id ?? item.title}
            id={item.id}
            title={item.title}
            caption={item.caption}
            danger={item.danger}
            checked={() => dispatch(checkTodo(item.id))} />)}
        </div>
        : ''
      }
    </div>
  )
}

export default TodoList;