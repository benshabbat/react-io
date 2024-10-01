import "./todolist.css";
export default function FooterToDo() {
  function getItem(e){
    console.log(e)
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong> items left
      </span>
      <button className="clear-completed" onClick={getItem}>Clear completed</button>
    </footer>
  );
}
