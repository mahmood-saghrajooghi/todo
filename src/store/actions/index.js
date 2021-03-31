import { v4 } from 'uuid';
import { db } from '../../firebase';
import * as actionTypes from './actionTypes';

export const openModal = () => {
  return {
    type: actionTypes.OPEN_MODAL
  }
}
export const closeModal = () => {
  return {
    type: actionTypes.CLOSE_MODAL
  }
}

export const addTodo = (title, date) => {
  return (dispatch, getState) => {
    const currentState = getState();
    const updatedTodos = {
      todoList: [...currentState.main.todoList, { title: title, date: date, id: v4() }],
      doneList: currentState.main.doneList
    }
    updateTodos(updatedTodos, dispatch);
  }
}
const updateTodos = (updatedTodos, dispatch, title, date) => {
  dispatch({
    type: actionTypes.CLOSE_MODAL
  })
  db.collection('todos').doc('todoList').set(updatedTodos)
    .then(res => {
      fetchTodos(dispatch);
    })
    .catch(err => {
      console.log(err);
    })

}

export const getTodos = () => {
  return (dispatch) => {
    return fetchTodos(dispatch)
  }
}
const fetchTodos = (dispatch) => {
  db.collection('todos').doc('todoList').get()
    .then(res => {
      dispatch({
        type: actionTypes.FETCHED_TODOS,
        ...res.data()
      })
    })
    .catch(err => {
      console.log(err);
    })

}

export const checkTodo = (id) => {
  return (dispatch, getState) => {
    const currentState = getState()
    let checkedItem = null;
    const updatedTodoList = currentState.main.todoList.filter(item => {
      if (item.id !== id) {
        return true
      }
      checkedItem = item;
      return false;
    })
    const updatedDoneList = [...currentState.main.doneList, checkedItem]
    const updatedTodos = {
      todoList: updatedTodoList,
      doneList: updatedDoneList
    }
    return updateTodos(updatedTodos, dispatch);
  }
}