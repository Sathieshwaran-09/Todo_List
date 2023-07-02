import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import EditTask from '../Modals/EditTask';

const Task = ({
  view,
  task,
  toggleView,
  modal,
  updateTask,
  toggle,
  setModal,
  handleDelete
}) => {
  return (
    <div>
      <Modal isOpen={view} toggle={toggleView}>
        <ModalHeader toggle={toggleView}>
          {task.Name.length <= 38 ? task.Name : `${task.Name.slice(0, 38)}...`}
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <p className="desc mt-3">{task.Description}</p>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(true)}>
            Edit
          </Button>
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button color="secondary" onClick={toggleView}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        task={task}
      />
    </div>
  );
};

export default Task