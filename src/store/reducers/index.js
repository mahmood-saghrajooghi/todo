import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const initialState = {
  modalIsOpen: false,
  todoList: [],
  doneList: []
}

const openModal = (state, action) => {
  return updateObject(state, { modalIsOpen: true })
}
const closeModal = (state, action) => {
  return updateObject(state, { modalIsOpen: false })
}
const addedTodo = (state, action) => {
  return updateObject(state, {
    todoList: [...state.todoList, {
      title: action.title,
      date: action.date
    }]
  })
}
const fetchedTodos = (state, action) => {
  console.log(action);
  const res = updateObject(state,
    {
      doneList: action.doneList ?? [],
      todoList: action.todoList ?? []
    })
  return res;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_MODAL: return openModal(state, action);
    case actionTypes.CLOSE_MODAL: return closeModal(state, action);
    case actionTypes.ADDED_TODO: return addedTodo(state, action);
    case actionTypes.FETCHED_TODOS: return fetchedTodos(state, action);
    default:
      return state;
  }
}

export default reducer;