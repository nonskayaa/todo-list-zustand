import React from "react";
import classes from "./DeleteButton.module.css";
import { useStore } from "../../../store/taskStore";
import delete_img from "../../../assets/images/delete.png";

export default function DeleteButton({ id }: { id: number }) {
  const { deleteTask } = useStore();
  return (
    <button className={classes.btn_delete} onClick={() => deleteTask(id)}>
      <img src={delete_img} className={classes.btn_delete__icon} alt="delete" />
    </button>
  );
}
