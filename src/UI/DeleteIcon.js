import "./DeleteIcon.css";
import image from "./favicon.ico";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import produce from "immer";
import { useEffect } from "react";
import {
  setListArray,
  setListArrayToShowBySearch,
  setTaskArray,
} from "../store/actions";
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

  const changeTaskArray = (array) => {
    dispatch(setTaskArray(array));
  };

  const changeListArray = (array) => {
    dispatch(setListArray(array));
    dispatch(setListArrayToShowBySearch(array));
  };

  const deleteListFun = (event) => {
    event.preventDefault();
    const array = produce(
      listArray,
      (draft) => void (draft[props.listId] = null)
    );
    changeListArray(array);
  };

  const deleteTaskFun = (event) => {
    event.preventDefault();
    const array = produce(
      taskArray,
      (draft) => void (draft[props.taskId] = null)
    );
    changeTaskArray(array);
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
