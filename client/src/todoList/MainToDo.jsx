import "./todolist.css";

export default function MainToDo() {

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Test</label>
          <button className="destroy" />
        </div>
        <input className="edit" />
      </li>
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>Test</label>
          <button className="destroy" />
        </div>
        <input className="edit" />
      </li>
      </ul>
    </section>
  );
}
