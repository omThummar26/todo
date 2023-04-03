import "./Task.css";
import DeleteIcon from "../../UI/DeleteIcon";
import CheckBox from "../../UI/CheckBox";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import produce from "immer";
import { setTaskArray } from "../../store/actions";
import classNames from "classnames";
const Task = (props) => {
  const taskTextDiv = useRef();
  const taskArray = useSelector((state) => state.taskArray);
  const dispatch = useDispatch();
  const isCompleted = taskArray[props.taskId].isCompleted;
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const taskClassName = classNames({
    task: notExpandable,
    taskUp: expandUp,
    taskDown: expandDown,
  });
  const taskTextClassName = classNames({
    taskText: notExpandable,
    taskTextUp: expandUp,
    taskTextDown: expandDown,
  });

  const changeTaskArray = (array) => {
    dispatch(setTaskArray(array));
  };

  const makeTextEditable = () => {
    taskTextDiv.current.contentEditable = true;
  };

  const makeTextUnEditable = () => {
    const array = produce(
      taskArray,
      (draft) =>
        void (draft[props.taskId].taskName = taskTextDiv.current.innerText)
    );
    changeTaskArray(array);
    taskTextDiv.current.contentEditable = false;
  };

  return (
    <div className={taskClassName}>
      <CheckBox taskId={props.taskId} isCompleted={isCompleted} />
      {!isCompleted && (
        <div
          className={taskTextClassName}
          ref={taskTextDiv}
          onDoubleClick={makeTextEditable}
          onBlur={makeTextUnEditable}
        >
          {props.taskName}
        </div>
      )}
      {isCompleted && (
        <div
          className={taskTextClassName}
          ref={taskTextDiv}
          style={{ textDecoration: "line-through" }}
          onDoubleClick={makeTextEditable}
          onBlur={makeTextUnEditable}
        >
          {props.taskName}
        </div>
      )}
      <DeleteIcon taskId={props.taskId} />
    </div>
  );
};

export default Task;
