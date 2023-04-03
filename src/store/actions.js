export const setCurrentListId = (props) => {
  return {
    type: "SET_CURRENT_LIST_ID",
    payload: props.payload,
  };
};

export const addItemInListArray = (value) => {
  return {
    type: "ADD_ITEM_IN_LISTARRAY",
    payload: value,
  };
};

export const setListArray = (array) => {
  return {
    type: "SET_LISTARRAY",
    payload: array,
  };
};

export const setListArrayToShowBySearch = (array) => {
  return {
    type: "SET_LISTARRAY_TO_SHOW_BY_SEARCH",
    payload: array,
  };
};

export const setTaskArray = (array) => {
  return {
    type: "SET_TASKARRAY",
    payload: array,
  };
};

export const setOptionValue = (value) => {
  return {
    type: "SET_OPTION_VALUE",
    payload: value,
  };
};

export const setExpandUp = (value) => {
  return {
    type: "SET_EXPANDUP",
    payload: value,
  };
};

export const setExpandDown = (value) => {
  return {
    type: "SET_EXPANDDOWN",
    payload: value,
  };
};

export const setNotExpandable = (value) => {
  return {
    type: "SET_NOTEXPANDABLE",
    payload: value,
  };
};
