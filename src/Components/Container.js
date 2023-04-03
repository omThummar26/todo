import ListContainer from "./ListContainer/ListContainer";
import TaskContainer from "./TaskContainer/TaskContainer";
import "./Container.css";
import { setExpandDown, setExpandUp, setNotExpandable } from "../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
const Container = () => {
  const dispatch = useDispatch();
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const containerClassName = classNames({
    container: notExpandable,
    containerUp: expandUp,
    containerDown: expandDown,
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 800px)",
  });

  useEffect(() => {
    if (isMobile) {
      console.log("hello from om bhai");
      dispatch(setExpandDown(true));
      dispatch(setExpandUp(false));
      dispatch(setNotExpandable(false));
    } else {
      dispatch(setExpandDown(false));
      dispatch(setExpandUp(false));
      dispatch(setNotExpandable(true));
    }
  }, [isMobile]);

  return (
    <div className={containerClassName}>
      <ListContainer />
      <TaskContainer />
    </div>
  );  
};

export default Container;
