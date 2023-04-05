import "./DeleteIcon.css";
import image from "./favicon.ico";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { useEffect } from "react";
import { deleteList, deleteTask } from "../store/actions";
const DeleteIcon = (props) => {
  const listArray = useSelector((state) => state.listArray);
  const taskArray = useSelector((state) => state.taskArray);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("listArray", JSON.stringify(listArray));
  }, [listArray]);

  useEffect(() => {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }, [taskArray]);

  const deleteListFun = (event) => {
    event.preventDefault();
    dispatch(deleteList(props.listId));
  };

  const deleteTaskFun = (event) => {
    event.preventDefault();
    dispatch(deleteTask(props.taskId));
  };

  return (
    <img
      className="delete"
      src={image}
      onClick={props.isList === "1" ? deleteListFun : deleteTaskFun}
    />
  );
};

export default DeleteIcon;
