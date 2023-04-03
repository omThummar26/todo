import List from "./List";
import React from "react";
import { connect } from "react-redux";
const ListsBox = (props) => {
  const filterListArray = props.listArrayToShowBySearch.filter(
    (list) => list != null
  );

  const lists = filterListArray.map((list) => (
    <List key={list.listId} listId={list.listId} name={list.listName}></List>
  ));

  return <div className="listsBox">{lists}</div>;
};

const mapStateToProps = (state) => {
  return {
    listArrayToShowBySearch: state.listArrayToShowBySearch,
  };
};

export default connect(mapStateToProps)(ListsBox);
