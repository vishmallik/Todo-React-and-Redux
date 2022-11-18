import { legacy_createStore as createStore } from "redux";
import { v4 as uuid } from "uuid";
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function reducer(state = { allTodos: [], query: "" }, action) {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        allTodos: state.allTodos.concat({
          title: action.payload,
          isDone: false,
          id: uuid(),
        }),
      };
    case "deleteTodo":
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo.id !== action.payload),
      };

    case "toggleIsDone":
      return {
        ...state,
        allTodos: state.allTodos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          }
          return todo;
        }),
      };
    case "search":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
}
export default store;
