import "./Option.css";
import { useSelector, useDispatch } from "react-redux";
import { setOptionValue } from "../store/actions";
const Option = () => {
  const currentListId = useSelector((state) => state.currentListId);
  const dispatch = useDispatch();
  const optionId = `option${currentListId}`;

  const changeOptionValueFun = (event) => {
    dispatch(setOptionValue(event.target.value));
  };

  return (
    <select
      id={optionId}
      className="optionTask"
      onChange={changeOptionValueFun}
    >
      {" "}
      <option value="All">All</option>{" "}
      <option value="Completed">Completed</option>{" "}
      <option value="Uncompleted">Uncompleted</option>
    </select>
  );
};

export default Option;
