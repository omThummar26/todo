let initialState = {
  listArray: [],
  currentListId: 0,
  listArrayToShowBySearch: [],
  taskArray: [],
  optionValue: "All",
  notExpandable: true,
  expandUp: false,
  expandDown: false,
};

const setInitialValue = () => {
  let tempListArray = [{ listName: "Add your to-do here", listId: 0 }];
  let tempTaskArray = [];

  if (localStorage.getItem("listArray"))
    tempListArray = JSON.parse(localStorage.getItem("listArray"));

  if (localStorage.getItem("taskArray"))
    tempTaskArray = JSON.parse(localStorage.getItem("taskArray"));

  initialState.listArray = tempListArray;
  initialState.listArrayToShowBySearch = tempListArray;
  initialState.taskArray = tempTaskArray;
};

setInitialValue();

const reducer = (state = initialState, action) => {
  if (action.type === "SET_CURRENT_LIST_ID") {
    return {
      ...state,
      currentListId: action.payload,
    };
  }

  if (action.type === "ADD_ITEM_IN_LISTARRAY") {
    return {
      ...state,
      listArray: [...state.listArray, action.payload],
      listArrayToShowBySearch: [
        ...state.listArrayToShowBySearch,
        action.payload,
      ],
    };
  }

  if (action.type === "SET_LISTARRAY") {
    return {
      ...state,
      listArray: [...action.payload],
    };
  }

  if (action.type === "SET_LISTARRAY_TO_SHOW_BY_SEARCH") {
    return {
      ...state,
      listArrayToShowBySearch: [...action.payload],
    };
  }

  if (action.type === "SET_TASKARRAY") {
    return {
      ...state,
      taskArray: [...action.payload],
    };
  }

  if (action.type === "SET_OPTION_VALUE") {
    return {
      ...state,
      optionValue: action.payload,
    };
  }

  if (action.type === "SET_EXPANDUP") {
    return {
      ...state,
      expandUp: action.payload,
    };
  }

  if (action.type === "SET_EXPANDDOWN") {
    return {
      ...state,
      expandDown: action.payload,
    };
  }

  if (action.type === "SET_NOTEXPANDABLE") {
    return {
      ...state,
      notExpandable: action.payload,
    };
  }

  return state;
};

export default reducer;
