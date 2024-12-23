import { createContext, ReactElement, useReducer } from "react";

export enum ActionType {
  Add,
  Update,
  Remove,
}

export interface Task {
  id: number;
  name: string;
}

export const TaskContext = createContext<Array<Task> | null>(null);
export const TasksDispatchContext = createContext<any>(null);

let lastId = 1;
export const initialState: Array<Task> = [
  {
    id: 1,
    name: "Rick",
  },
];

function TaskReducer(
  tasks: Array<Task>,
  { type, task }: { type: ActionType; task: Task }
) {
  switch (type) {
    case ActionType.Add: {
      const newTask = task;
      const nextId = lastId + 1;
      lastId = nextId;
      newTask.id = nextId;
      return [...tasks, newTask];
    }

    default: {
      throw Error("Operação desconhecida!");
    }
  }
}

export default function TaskProvider({ children }: { children: ReactElement }) {
  const [tasks, dispatch] = useReducer(TaskReducer, initialState);
  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
