import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Drawer from './container/Drawer/Drawer';
import Main from './container/Main/Main';
import Modal from './container/Modal/Modal';
import { getTodos } from './store/actions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  return (
    <div className="wrapper">
      <div className="container">
        <Drawer></Drawer>
        <Main></Main>
      </div>
      <Modal />
    </div>
  );
}

export default App;
