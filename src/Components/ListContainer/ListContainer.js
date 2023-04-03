import "./ListContainer.css";
import TextbarButtonContainer from "../../UI/TextbarButtonContainer";
import ListsBoxContainer from "./ListsBoxContainer";
import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";
const ListContainer = () => {
  const expandUp = useSelector((state) => state.expandUp);
  const expandDown = useSelector((state) => state.expandDown);
  const notExpandable = useSelector((state) => state.notExpandable);
  const listContainerClassName = classNames({
    listContainer: notExpandable,
    listContainerUp: expandUp,
    listContainerDown: expandDown,
  });

  return (
    <div className={listContainerClassName}>
      <TextbarButtonContainer
        textbarType="search"
        textbarId="searchBar"
        textbarPlaceHolder="Search"
        buttonType="submit"
        buttonId="search"
        buttonValue="Search"
      />
      <ListsBoxContainer />
      <TextbarButtonContainer
        textbarType="text"
        textbarId="textAddList"
        textbarPlaceHolder="Add List"
        buttonType="submit"
        buttonId="addList"
        buttonValue="AddList"
      />
    </div>
  );
};

export default ListContainer;
