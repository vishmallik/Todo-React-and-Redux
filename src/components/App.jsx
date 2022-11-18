import { connect } from "react-redux";
import { addTodo, search } from "../store/actions";
import Header from "./Header";
import Todo from "./Todo";

function App(props) {
  function handleAddTodo(event) {
    if (event.key === "Enter" && event.target.value) {
      props.dispatch(addTodo(event.target.value));
      event.target.value = "";
    }
  }
  return (
    <>
      <Header />
      <main className="wrapper">
        <input
          type="text"
          name="todo"
          id="add-todo"
          placeholder="Add new todo"
          onKeyUp={handleAddTodo}
        />
        <input
          type="text"
          name="todo"
          id="search-todo"
          placeholder="Search todo"
          onChange={(event) => props.dispatch(search(event.target.value))}
        />
        <ul>
          {props.allTodos.map(
            (todo) =>
              todo.title.includes(props.query) && (
                <Todo key={todo.id} todo={todo} />
              )
          )}
        </ul>
      </main>
    </>
  );
}
function mapStateToProps(state) {
  return {
    allTodos: state.allTodos,
    query: state.query,
  };
}
export default connect(mapStateToProps)(App);
