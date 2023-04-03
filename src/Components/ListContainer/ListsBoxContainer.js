import YourList from "./YourList";
import ListsBox from "./ListsBox";
import "./ListsBoxContainer.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
const ListsBoxContainer = () => {
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const listBoxContainerClassName = classNames("listsBoxContainer", {
    ListsBoxContainer: notExpandable,
    listsBoxContainerUp: expandUp,
    listsBoxContainerDown: expandDown,
  });

  return (
    <div className={listBoxContainerClassName}>
      <YourList />
      <ListsBox />
    </div>
  );
};
export default ListsBoxContainer;
