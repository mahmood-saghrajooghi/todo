import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, closeModal } from '../../store/actions/index';
import classes from './Modal.module.scss';

const Modal = () => {
  const titleInput = useRef();
  const dateInput = useRef();

  const dispatch = useDispatch();
  const modalIsOpen = useSelector(state => state.main.modalIsOpen)
  const addTodoHandler = () => {
    dispatch(addTodo(titleInput.current.value, dateInput.current.value))
    titleInput.current.value = ''
    dateInput.current.value = ''
  }
  return (
    <div className={[classes.Modal, modalIsOpen ? classes.Open : ''].join(' ')}>
      <div className={classes.BackDrop} onClick={() => dispatch(closeModal())}></div>
      <div className={classes.ModalContent}>
        <input placeholder="title" ref={titleInput} />
        <input type="date" className={classes.Date} ref={dateInput} />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
    </div>
  )
}

export default Modal;