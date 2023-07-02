import './App.css';
import React, { useEffect, useState } from "react";
import TodoList from './Components/TodoList';
import { Route, Routes} from "react-router-dom";

function App() {

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (task) => {
    taskList.sort(function (a, b) {
      return new Date(b.Datetime) - new Date(a.Datetime);
    });
    let temp = taskList;
    temp.push(task);
    localStorage.setItem("taskList", JSON.stringify(temp));
    setTaskList(temp);
    setModal(false);
  };

  useEffect(() => { 
    let array = localStorage.getItem("taskList");
    if (array) {
      let obj = JSON.parse(array);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let temp = taskList;
    temp.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(temp));
    setTaskList(temp);
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let temp = taskList;
    temp[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(temp));
    setTaskList(temp);
    window.location.reload();
  };

   const handleCheck = async (id) => {
    const temp = taskList.map((task) =>
      task.id === id ? { ...task, Checked: !task.Checked } : task
    );
     setTaskList(temp);
      localStorage.setItem("taskList", JSON.stringify(temp));
   }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              setModal={setModal}
              taskList={taskList}
              modal={modal}
              toggle={toggle}
              saveTask={saveTask}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              handleCheck={handleCheck}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
