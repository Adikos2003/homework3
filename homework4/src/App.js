import './App.css';
import User from './components/user/User';
import Modal from './components/modal/Modal';
import { useState } from 'react';
import Input from './components/input/Input';
import CountPage from './pages/CountPage/CountPage';
import Button from './components/button/Button';
import Todo from './components/todo/Todo';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [ show, setShow ] = useState(false);
  const [ input, setInput ] = useState('');
  const [tasks, setTasks] = useState([{
    id:1 ,
    task: 'coding',
    completed: false
  },
    {
      id:2,
      task: 'eat',
      completed: false
    },
    {
      id:3,
      task: 'sleep',
      completed: false
    }])
  // const tasks = [
  //   {
  //     id:1 ,
  //     task: 'coding'
  //   },
  //   {
  //     id:2,
  //     task: 'eat'
  //   },
  //   {
  //     id:3,
  //     task: 'sleep'
  //   }
  // ];
  const handleShow = () => setShow(!show);

  const handleAdd = () => {
    setTasks(prev => [ ...prev, {
        id: tasks.length + 1,
        task: input
      }
      ]
    );
    console.log(tasks);
  };

  const handleDone = (id) => {
    console.log(id, 'done')
  }

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleDelete = (id) => {
    console.log(id);
    const deleted = tasks.filter(task => task.id!==id)
    setTasks(deleted)
  }
  // const a = [1,2,3]
  // const b = [4,5,6]
  // console.log([...a,...b]);

  return (
    <div>
      {
        show &&
        <Modal
          handleShow={handleShow}
          onChangeInput={onChangeInput}
          handleAdd={handleAdd}
        >

        </Modal>
      }
      <Button action={handleShow} text={'открыть'}/>
      <TodoList tasks={tasks} handleDelete={handleDelete} handleDone={handleDone}/>
    </div>
  );
}


export default App;
