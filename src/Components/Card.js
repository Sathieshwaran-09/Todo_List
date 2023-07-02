import React, { useState } from "react";
import EditTask from "../Modals/EditTask";
import Task from "./Task";

const Card = ({ task, index, deleteTask, updateListArray, handleCheck }) => {
  const [modal, setModal] = useState(false);
  const [view, setView] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const toggleView = () => {
    setView(!view);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <div className="card-wrapper mr-5" onDoubleClick={() => setView(true)}>
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={
            task.Checked
              ? {
                  textDecoration: "line-through",
                  backgroundColor: colors[index % 5].secondaryColor,
                  borderRadius: "10px",
                }
              : {
                  backgroundColor: colors[index % 5].secondaryColor,
                  borderRadius: "10px",
                }
          }
        >
          {/* {task.Name} */}
          {task.Name.length <= 16 ? task.Name : `${task.Name.slice(0, 16)}...`}
        </span>
        <p
          className="desc mt-3"
          style={
            task.Checked
              ? {
                  textDecoration: "line-through",
                }
              : 
              null
          }
        >
          {/* {task.Description} */}
          {task.Description.length <= 305
            ? task.Description
            : `${task.Description.slice(0, 305)}...`}
        </p>
        <label
          style={{
            position: "absolute",
            left: "20px",
            bottom: "20px",
            color: "grey",
            fontSize: 13,
          }}
        >
          {task.Datetime}
        </label>
        <div
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            alignItems: "center",
          }}
        >
          <i
            className="fa-regular fa-circle-check  fa-fw"
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
            }}
            onClick={() => handleCheck(task.id)}
          ></i>
          <i
            className="far fa-edit fa-fw"
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
            }}
            onClick={() => setModal(true)}
          ></i>
          <i
            className="fa-solid fa-trash"
            style={{
              color: colors[index % 5].primaryColor,
              cursor: "pointer",
            }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        task={task}
      />
      <Task
        view={view}
        toggleView={toggleView}
        task={task}
        modal={modal}
        toggle={toggle}
        setModal={setModal}
        updateTask={updateTask}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Card;
