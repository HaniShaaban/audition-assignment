import { previousPhasesDone, isCurrentPhaseDone } from "../helpers/helpers";
import { tasksData } from "./../data/seed";
import { ApolloError, UserInputError } from "apollo-server";

export const getTask = (taskID) => {
  // Since taskID is of type ID, im using parseInt for simplicity in order to test the application with small integers
  return tasksData.find((el) => el.id === parseInt(taskID));
};

export const updateTask = (taskID) => {
  try {
    // Get the desired task

    const task = getTask(taskID);

    if (!task) {
      return new UserInputError("Task does not exist");
    }
    const { phase } = task;
    // Check if there are any incompleted tasks from previous phase
    const arePreviousPhasesDone = previousPhasesDone(phase);
    if (!arePreviousPhasesDone) {
      return new UserInputError(
        "All tasks from previous phases must be completed before moving to next phase"
      );
    }
    task.completed = true;

    // Check if all tasks in current phase are done, if YES it changes the status to DONE
    isCurrentPhaseDone(phase);
    return task;
  } catch (e) {
    console.log(e);
    return new ApolloError("Error occured");
  }
};
