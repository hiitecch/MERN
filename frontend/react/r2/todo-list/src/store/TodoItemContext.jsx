import { createContext, useState } from "react";

export const TodoItemContext = createContext();

const initialState = [];

export const TodoitemProvider = ({ children }) => {
  const [todoItem, setTodoItem] = useState(initialState);

  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = [
      ...todoItem,
      {
        Todo: itemName,
        DueDate: itemDueDate,
      },
    ];

    setTodoItem(newItem);
  };

  const handleDelete = (itemName) => {
    const newTodoItem = todoItem.filter(
      (item) => item.Todo !== itemName
    );

    setTodoItem(newTodoItem);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoItem,
        handleNewItem,
        handleDelete,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};