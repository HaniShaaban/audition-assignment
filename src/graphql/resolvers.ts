import { addTask, getTasks, markCompleted } from "../resolvers/tasks";

const resolvers = {
  Query: {
    tasks: getTasks,
  },
  Mutation: {
    markCompleted,
    addTask,
  },
};

export default resolvers;
