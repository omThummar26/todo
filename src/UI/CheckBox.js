import "./CheckBox.css";
import { useSelector, useDispatch } from "react-redux";
import produce from "immer";
import { useEffect } from "react";
import { setTaskArray } from "../store/actions";
const CheckBox = (props) => {
  const currentListId = useSelector((state) => state.currentListId);
  const taskArray = useSelector((state) => state.taskArray);
  const dispatch = useDispatch();
  const checkBoxId = `checkBox${currentListId}task${props.taskId}`;

  useEffect(() => {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }, [taskArray]);

  const changeTaskArray = (array) => {
    dispatch(setTaskArray(array));
  };

  const checkTaskFun = () => {
    const array = produce(taskArray, (draft) => {
      draft[props.taskId].isCompleted = !draft[props.taskId].isCompleted;
    });
    changeTaskArray(array);
  };

  return (
    <input
      type="checkbox"
      className="checkBox"
      id={checkBoxId}
      onChange={checkTaskFun}
      checked={props.isCompleted}
    />
  );
};

export default CheckBox;
