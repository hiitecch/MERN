import { useContext, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { TodoItemContext } from "../store/TodoitemContext";

function TodoInput() {

  const { handleNewItem } = useContext(TodoItemContext);

  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddButtonClicked = () => {

    if (!todoName.trim() || !todoDate) {
      alert("Please enter both a task and a date!");
      return;
    }

    handleNewItem(todoName, todoDate);

    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">

      <div className="row ps-rows">

        <div className="col-6">
          <input
            type="text"
            value={todoName}
            placeholder="enter todo"
            onChange={handleNameChange}
          />
        </div>

        <div className="col-4">
          <input
            type="date"
            value={todoDate}
            onChange={handleDateChange}
          />
        </div>

        <div className="col-2">
          <button
            className="btn btn-success ps-button"
            onClick={handleAddButtonClicked}
          >
            <IoAddCircle />
          </button>
        </div>

      </div>

    </div>
  );
}

export default TodoInput;