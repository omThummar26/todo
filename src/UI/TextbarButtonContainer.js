import "./TextbarButtonContainer.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import produce from "immer";
import classNames from "classnames";
import { setCurrentListId } from "../store/actions";
import {
  setListArrayToShowBySearch,
  setTaskArray,
  addItemInListArray,
} from "../store/actions";

const TextbarButtonContainer = (props) => {
  const dispatch = useDispatch();
  const listArray = useSelector((state) => state.listArray);
  const taskArray = useSelector((state) => state.taskArray);
  const currentListId = useSelector((state) => state.currentListId);
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const textbarButtonContainerClassName = classNames({
    textbarButtonContainer: notExpandable,
    textbarButtonContainerUp: expandUp,
    textbarButtonContainerDown: expandDown,
  });

  useEffect(() => {
    localStorage.setItem("listArray", JSON.stringify(listArray));
  }, [listArray]);

  useEffect(() => {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }, [taskArray]);

  const changeListArrayToShowBySearch = (array) => {
    dispatch(setListArrayToShowBySearch(array));
  };

  const funAddItemInListArray = (value) => {
    dispatch(addItemInListArray(value));
  };

  const changeTaskArray = (array) => {
    dispatch(setTaskArray(array));
  };

  const changeInputValue = (event) => {
    if (props.buttonId === "search") {
      const array = listArray.filter(
        (list) =>
          list != null &&
          list.listName
            .toUpperCase()
            .indexOf(event.target.value.toUpperCase()) > -1
      );
      changeListArrayToShowBySearch(array);
    }
  };

  const setFunAddItemInListArray = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    if (inputValue.trim() === "") return;
    const itemObject = {
      listName: inputValue,
      listId: listArray.length,
    };
    event.target[0].value = "";
    funAddItemInListArray(itemObject);
  };

  const AddTaskInListArray = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    if (inputValue.trim() === "") return;
    const taskObject = {
      taskName: inputValue,
      isCompleted: false,
      listId: currentListId,
      taskId: taskArray.length,
    };
    const array = produce(taskArray, (draft) => void draft.push(taskObject));
    changeTaskArray(array);
    event.target[0].value = "";
  };

  const setListIdBySearch = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value;
    if (inputValue.trim() === "") return;
    let listId = -1;
    for (let iterator = 0; iterator < listArray.length; iterator++) {
      if (
        listArray[iterator] != null &&
        listArray[iterator].listName === inputValue
      ) {
        listId = iterator;
        break;
      }
    }
    if (listId !== -1) dispatch(setCurrentListId({ payload: listId }));
    changeListArrayToShowBySearch(listArray);
    event.target[0].value = "";
  };

  return (
    <form
      className={textbarButtonContainerClassName}
      onSubmit={
        props.buttonId === "addTask"
          ? AddTaskInListArray
          : props.buttonId === "search"
          ? setListIdBySearch
          : setFunAddItemInListArray
      }
    >
      <input
        className="textbar"
        type={props.textbarType}
        id={props.textbarId}
        placeholder={props.textbarPlaceHolder}
        onChange={changeInputValue}
      ></input>
      <button
        className="button"
        type="submit"
        id={props.buttonId}
        value={props.buttonValue}
      >
        {props.buttonValue}
      </button>
    </form>
  );
};

export default TextbarButtonContainer;
