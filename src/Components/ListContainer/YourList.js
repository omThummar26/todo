import "./YourList.css";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import {
  setExpandDown,
  setExpandUp,
  setNotExpandable,
} from "../../store/actions";
import { useEffect} from "react";
const YourList = () => {
  useEffect(() => {}, []);
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const dispatch = useDispatch();
  const yourListClassName = classNames({
    YourList: notExpandable,
    yourListUp: expandUp,
    yourListDown: expandDown,
  });
  const yourListTextClassName = classNames({
    YourListText: notExpandable,
    yourListTextUp: expandUp,
    yourListTextDown: expandDown,
  });
  const expandClassName = classNames({
    expand: notExpandable,
    expandUp: expandUp,
    expandDown: expandDown,
  });

  const setExpandOfReminder = (event) => {
    if (event.target.value === "-") {
      dispatch(setExpandDown(false));
      dispatch(setExpandUp(true));
      dispatch(setNotExpandable(false));
      event.target.value = "+";
    } else {
      dispatch(setExpandDown(true));
      dispatch(setExpandUp(false));
      dispatch(setNotExpandable(false));
      event.target.value = "-";
    }
  };

  return (
    <div className={yourListClassName}>
      <div className={yourListTextClassName}>Your List</div>
      <button
        className={expandClassName}
        value="-"
        onClick={setExpandOfReminder}
      >
        {"expand"}
      </button>
    </div>
  );
};

export default YourList;
