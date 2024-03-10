import React from "react";
import classes from "./TodoForm.module.css";
import { useStore } from "../../store/taskStore";
import { useState } from "react";


export default function TodoForm() {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useStore();
  return (
    <form className={classes.todo_list__form}>
      <div className={classes.todo_list__input_container}>
        <input
          type="text"
          className={classes.todo_list__input_box}
          placeholder="добавь новую задачку, ну добавь ну..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className={classes.todo_list__btn}
          type="button"
          onClick={() => {
            setTaskName("");
            addTask(taskName);
          }}
        >
          тык
        </button>
      </div>
    </form>
  );
}
