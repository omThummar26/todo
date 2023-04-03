import "./TaskContainer.css";
import ListHeaderContainer from "./ListHeaderContainer";
import TextbarButtonContainer from "../../UI/TextbarButtonContainer";
import TasksBox from "./TasksBox";
import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
const TaskContainer = () => {
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const taskContainerClassName = classNames({
    taskContainer: notExpandable,
    taskContainerUp: expandUp,
    taskContainerDown: expandDown,
  });

  return (
    <div className={taskContainerClassName}>
      <TextbarButtonContainer
        textbarType="text"
        textbarId="textAddTask"
        textbarPlaceHolder="Add Task"
        buttonType="submit"
        buttonId="addTask"
        buttonValue="AddTask"
      />
      <ListHeaderContainer />
      <TasksBox />
    </div>
  );
};

export default TaskContainer;
