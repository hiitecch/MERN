import { useContext } from "react";
import Todolist from "./Todolist";
import { TodoItemContext } from "../store/TodoitemContext";

function TodoItems() {

  const { todoItem, handleDelete } = useContext(TodoItemContext);

  return (
    <div className="items-container">
      {todoItem.map((item, index) => (
        <Todolist
          key={index}
          todoName={item.Todo}
          todoDate={item.DueDate}
          onDeleteClick={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoItems;