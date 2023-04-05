import produce from "immer";

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

(function setInitialValue() {
  let tempListArray = [{ listName: "Add your to-do here", listId: 0 }];
  let tempTaskArray = [];

  if (localStorage.getItem("listArray"))
    tempListArray = JSON.parse(localStorage.getItem("listArray"));

  if (localStorage.getItem("taskArray"))
    tempTaskArray = JSON.parse(localStorage.getItem("taskArray"));

  initialState.listArray = tempListArray;
  initialState.listArrayToShowBySearch = tempListArray;
  initialState.taskArray = tempTaskArray;
})();

const reducer = (state = initialState, action) => {
  if (action.type === "SET_CURRENT_LIST_ID") {
    return {
      ...state,
      currentListId: action.payload,
    };
  }

  if (action.type === "ADD_ITEM_IN_LISTARRAY") {
    return produce(
      state,
      (draft) =>
        void (draft.listArray.push(action.payload),
        draft.listArrayToShowBySearch.push(action.payload))
    );
  }

  if (action.type === "SET_LISTARRAY") {
    return produce(state, (draft) => void (draft.listArray = action.payload));
  }

  if (action.type === "SET_LISTARRAY_TO_SHOW_BY_SEARCH") {
    return produce(
      state,
      (draft) => void (draft.listArrayToShowBySearch = action.payload)
    );
  }

  if (action.type === "SET_TASKARRAY") {
    return produce(state, (draft) => void (draft.taskArray = action.payload));
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

  if (action.type === "SET_DELETE_LIST") {
    return produce(
      state,
      (draft) =>
        void ((draft.listArray[action.payload] = null),
        (draft.listArrayToShowBySearch[action.payload] = null))
    );
  }

  if (action.type === "SET_TASK_ISCOMPLETED") {
    return produce(
      state,
      (draft) =>
        void (draft.taskArray[action.payload].isCompleted =
          !draft.taskArray[action.payload].isCompleted)
    );
  }

  if (action.type === "SET_DELETE_TASK") {
    return produce(
      state,
      (draft) => void (draft.taskArray[action.payload] = null)
    );
  }

  if (action.type === "ADD_ITEM_IN_TASKARRAY") {
    return produce(state, (draft) => void draft.taskArray.push(action.payload));
  }

  return state;
};

export default reducer;
