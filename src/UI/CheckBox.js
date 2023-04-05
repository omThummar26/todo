import "./CheckBox.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setTaskIsCompleted } from "../store/actions";
const CheckBox = (props) => {
  const currentListId = useSelector((state) => state.currentListId);
  const taskArray = useSelector((state) => state.taskArray);
  const dispatch = useDispatch();
  const checkBoxId = `checkBox${currentListId}task${props.taskId}`;

  useEffect(() => {
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }, [taskArray]);

  const checkTaskFun = () => {
    dispatch(setTaskIsCompleted(props.taskId));
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
