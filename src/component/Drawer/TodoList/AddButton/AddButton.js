import React from 'react';
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { openModal } from '../../../../store/actions/index';
import classes from './AddButton.module.scss';

const AddButton = (props) => {
  const dispatch = useDispatch()

  return <button className={classes.AddButton} onClick={() => dispatch(openModal())}>
    <FaPlus className={classes.PlusIcon} />
    Add a Task
    </button>
}

export default AddButton;