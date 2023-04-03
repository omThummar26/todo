import "./TasksBox.css";
import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import classNames from "classnames";
const TasksBox = () => {
  const listArray = useSelector((state) => state.listArray);
  const currentListId = useSelector((state) => state.currentListId);
  const taskArray = useSelector((state) => state.taskArray);
  const optionValue = useSelector((state) => state.optionValue);
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const tasksBoxClassName = classNames({
    tasksBox: notExpandable,
    tasksBoxUp: expandUp,
    tasksBoxDown: expandDown,
  });

  if (listArray[currentListId] === null) return;
  const filterdTasks = taskArray.filter(
    (item) =>
      item != null &&
      item.listId === currentListId &&
      (optionValue === "All" ||
        (optionValue === "Completed" && item.isCompleted === true) ||
        (optionValue === "Uncompleted" && item.isCompleted === false))
  );

  const tasks = filterdTasks.map((item) => (
    <Task
      key={item.taskId}
      taskId={item.taskId}
      taskName={item.taskName}
      taskIsCompleted={item.isCompleted}
    />
  ));
  return <div className={tasksBoxClassName}>{tasks}</div>;
};

export default TasksBox;
