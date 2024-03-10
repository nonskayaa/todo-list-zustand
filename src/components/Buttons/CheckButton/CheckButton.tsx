import React from "react";
import classes from "./CheckButton.module.css";
import classNames from "classnames";
import { useStore } from "../../../store/taskStore";

export default function CheckButton({
  id,
  taskChecked,
}: {
  id: number;
  taskChecked: boolean;
}) {
  const { checkTask } = useStore();
  return (
    <button
      className={
        taskChecked
          ? classNames(classes.btn_check, classes.btn_check__done)
          : classes.btn_check
      }
      onClick={() => checkTask(id)}
    ></button>
  );
}
