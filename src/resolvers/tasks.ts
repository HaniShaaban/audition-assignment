import { ApolloError } from "apollo-server";
import { phasesData, Task, tasksData } from "../data/seed";
import { updateTask } from "../functions/tasks";

export const getTasks = () => {
  // Return list of tasks from our seed file (static content)
  // Ideal solution is to have them stored in Database
  return phasesData
    .map((el) => {
      return {
        ...el,
        tasks: tasksData.filter((task) => task.phase === el.id),
      };
    })
    .sort((a, b) => a.order - b.order);
};

export const markCompleted = (_, { taskID }) => {
  try {
    // Assuming markCompleted will only be used as "TRUE" value for simplicity
    return updateTask(taskID);
  } catch (e) {
    console.log(e);
    return new ApolloError("error occured");
  }
};

export const addTask = (_, { data }) => {
  try {
    const { name, phase } = data;
    // Getting last id in order to create the newly added task, for simplicity im using small numbers to test
    const lastID = tasksData[tasksData.length - 1].id;
    const payload: Task = {
      completed: false,
      id: lastID + 1,
      name,
      phase: parseInt(phase),
    };
    tasksData.push(payload);
    return payload;
  } catch (e) {
    console.log(e);
    return new ApolloError("error occured");
  }
};
