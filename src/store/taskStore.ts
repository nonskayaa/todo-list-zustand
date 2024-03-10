import { create } from "zustand";

export type Task = {
  id: number;
  name: string;
  check: boolean;
};

type TaskState = {
  taskList: Task[];
  addTask: (name: string) => void;
  deleteTask: (id: number) => void;
  checkTask: (id: number) => void;
  deleteAllDoneTask: () => void;
};

export const useStore = create<TaskState>((set) => ({
  taskList: [],
  addTask: (name: string) => {
    set((state) => ({
      taskList: [
        ...state.taskList,
        {
          id: Date.now(),
          name,
          check: false,
        } as Task,
      ],
    }));
  },
  deleteTask: (id) => {
    set((state) => ({
      taskList: state.taskList.filter((task) => task.id !== id),
    }));
  },
  checkTask: (id) => {
    set((state) => ({
      taskList: state.taskList.map((task) =>
        task.id === id ? ({ ...task, check: !task.check } as Task) : task
      ),
    }));
  },
  deleteAllDoneTask: () => {
    set((state) => ({
      taskList: state.taskList.filter((task) => !task.check),
    }));
  },
}));
