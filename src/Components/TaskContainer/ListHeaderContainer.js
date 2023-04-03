import "./ListHeaderContainer.css";
import Option from "../../UI/Option";
import { useSelector } from "react-redux";
import classNames from "classnames";
const ListHeaderContainer = () => {
  const currentListId = useSelector((state) => state.currentListId);
  const listArray = useSelector((state) => state.listArray);
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const headerTextId = `headerText${currentListId}`;
  const listHeaderContainerClassName = classNames({
    listHeaderContainer: notExpandable,
    listHeaderContainerUp: expandUp,
    listHeaderContainerDown: expandDown,
  });
  const headerTextClassName = classNames({
    headerText: notExpandable,
    headerTextUp: expandUp,
    headerTextDown: expandDown,
  });

  if (listArray[currentListId] === null) return;
  const listName = listArray[currentListId].listName;

  return (
    <div className={listHeaderContainerClassName}>
      <div className={headerTextClassName} id={headerTextId}>
        {listName}
      </div>
      <Option />
    </div>
  );
};

export default ListHeaderContainer;
