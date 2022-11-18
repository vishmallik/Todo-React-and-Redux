export function addTodo(data) {
  return {
    type: "addTodo",
    payload: data,
  };
}
export function deleteTodo(id) {
  return {
    type: "deleteTodo",
    payload: id,
  };
}
export function toggleIsDone(id) {
  return {
    type: "toggleIsDone",
    payload: id,
  };
}
export function search(data) {
  return {
    type: "search",
    payload: data,
  };
}
