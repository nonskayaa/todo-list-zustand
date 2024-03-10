import React from "react";
import classes from "./ClearAllButton.module.css";
import interested_emoji from "../../../assets/images/interested_emoji.png";
import { useStore } from "../../../store/taskStore";

export default function ClearAllButton() {
  const { deleteAllDoneTask } = useStore();
  return (
    <button
      className={classes.todo_list__clear_btn}
      onClick={() => deleteAllDoneTask()}
    >
      убрать выполненные задачи
      <img
        src={interested_emoji}
        alt="interested emoji"
        className={classes.todo_list__emoji}
      />
    </button>
  );
}
