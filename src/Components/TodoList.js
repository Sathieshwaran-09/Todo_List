import React from "react";
import CreateTask from "../Modals/CreateTask";
import Card from "./Card";

const TodoList = ({
  setModal,
  taskList,
  modal,
  toggle,
  saveTask,
  deleteTask,
  updateListArray,
  handleCheck,
}) => {
  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((task, index) => (
            <Card
              key={task.id}
              task={task}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
              handleCheck={handleCheck}
            />
          ))}
      </div>
      <CreateTask
        taskList={taskList}
        modal={modal}
        toggle={toggle}
        saveTask={saveTask}
      />
    </>
  );
}; 

export default TodoList;
