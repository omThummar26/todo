import DeleteIcon from "../../UI/DeleteIcon";
import "./List.css";
import { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import produce from "immer";
import classNames from "classnames";
import {
  setExpandDown,
  setExpandUp,
  setNotExpandable,
} from "../../store/actions";
import {
  setCurrentListId,
  setListArray,
  setListArrayToShowBySearch,
} from "../../store/actions";

const List = (props) => {
  const listTextId = `listText${props.listId}`;
  const listTextDiv = useRef();
  const listClassName = classNames({
    list: props.notExpandable,
    listUp: props.expandUp,
    listDown: props.expandDown,
  });
  const listTextClassName = classNames({
    listText: props.notExpandable,
    listTextUp: props.expandUp,
    listTextDown: props.expandDown,
  });

  const makeTextEditable = () => {
    props.onClickChangeCurrentListId(props.listId);
    listTextDiv.current.contentEditable = true;
  };

  const makeTextUnEditable = () => {
    const array = produce(
      props.listArray,
      (draft) =>
        void (draft[props.currentListId].listName =
          listTextDiv.current.innerText)
    );
    props.changeListArray(array);
    listTextDiv.current.contentEditable = false;
  };

  const setOnClickChangeCurrentListId = () => {
    props.onClickChangeCurrentListId(props.listId);
    if (!props.notExpandable) {
      props.setExpand();
    }
  };
  return (
    <div
      className={listClassName}
      id={props.listId}
      onClick={setOnClickChangeCurrentListId}
    >
      <div
        className={listTextClassName}
        id={listTextId}
        ref={listTextDiv}
        onClick={setOnClickChangeCurrentListId}
        onDoubleClick={makeTextEditable}
        onBlur={makeTextUnEditable}
      >
        {props.name}
      </div>
      <DeleteIcon isList="1" listId={props.listId} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentListId: state.currentListId,
    listArray: state.listArray,
    expandUp: state.expandUp,
    expandDown: state.expandDown,
    notExpandable: state.notExpandable,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickChangeCurrentListId: (idToSet) =>
      dispatch(setCurrentListId({ payload: idToSet })),
    changeListArray: (array) => {
      dispatch(setListArray(array));
      dispatch(setListArrayToShowBySearch(array));
    },
    setExpand: () => {
      dispatch(setExpandDown(false));
      dispatch(setExpandUp(true));
      dispatch(setNotExpandable(false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
