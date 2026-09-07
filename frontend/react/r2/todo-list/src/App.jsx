import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./component/AppName";
import TodoInput from "./component/TodoInput";
import TodoItems from "./component/TodoItems";
import WelcomeMessage from "./component/WelcomeMessage";
import "./style/App.css";

import { useContext } from "react";
import { TodoItemContext } from "./store/TodoitemContext";

function App() {

  const { todoItem } = useContext(TodoItemContext);

  return (
    <div className="container text">
      <AppName />

      <TodoInput />

      {todoItem.length === 0 && <WelcomeMessage />}

      <TodoItems />
    </div>
  );
}

export default App;