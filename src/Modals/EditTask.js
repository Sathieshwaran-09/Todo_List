import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { format } from "date-fns";

const EditTask = ({ modal, toggle, updateTask,task }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const datetime = format(new Date(), "MMMM dd, yyyy pp");

  const handleUpdate=(e)=>{
    e.preventDefault()
    let temp={}
    temp["id"] = task.id;
    temp["Datetime"] = datetime;
    temp['Name']=taskName
    temp['Description']=description
   
    updateTask(temp)
  }

  useEffect(() => {
    setTaskName(task.Name);
    setDescription(task.Description);
  }, []);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
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
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTask