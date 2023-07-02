import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { format } from "date-fns";
import { nanoid } from "nanoid";

const CreateTask = ({ modal, toggle, saveTask, taskList }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = () => {
    // const id = taskList.length ? taskList[taskList.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    let taskObj = {};
    taskObj["id"] = nanoid();
    taskObj["Datetime"] = datetime;
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["Checked"] = false;
    saveTask(taskObj);
    setTaskName("");
    setDescription("");
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                className="form-control"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                rows="5"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask