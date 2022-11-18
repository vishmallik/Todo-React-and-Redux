import { connect } from "react-redux";
import { deleteTodo, toggleIsDone } from "../store/actions";

function Todo({ todo, dispatch }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => dispatch(toggleIsDone(todo.id))}
      />
      <p className={`${todo.isDone ? "completed" : ""}`}>{todo.title}</p>
      <i
        className="fas fa-xmark"
        onClick={() => dispatch(deleteTodo(todo.id))}
      ></i>
    </li>
  );
}

export default connect()(Todo);
