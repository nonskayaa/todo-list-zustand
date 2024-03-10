import React from "react";
import classes from "./TasksList.module.css";
import ClearAllButton from "../Buttons/ClearAllButton/ClearAllButton";
import TaskItem from "../TaskItem/TaskItem";
import { useStore } from "../../store/taskStore";
import emoji_sad from "../../assets/images/emoji_sad.png";

export default function TasksList() {
  const { taskList } = useStore();

  return (
    <ul className={classes.task_list}>
      {taskList.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
      {taskList.length > 0 ? (
        <ClearAllButton />
      ) : (
        <li className={classes.task_list__item_empty}>
          <p className={classes.item_empty__title}>
            Пока у тебя <br /> нет задачек :(
          </p>
          <img
            src={emoji_sad}
            alt="sad emoji"
            className={classes.item_empty__emoji}
          />
        </li>
      )}
    </ul>
  );
}
