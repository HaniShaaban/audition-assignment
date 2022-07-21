import { gql } from "apollo-server";

const typeDefs = gql`
  ## better have the id of type ID, but for simplicity i used small numbers as Int

  enum PHASE_STATUS {
    PENDING
    DONE
  }

  type Task {
    id: ID
    name: String
    phase: Int
    completed: Boolean
  }

  type Phase {
    id: ID
    name: String
    order: Int
    status: PHASE_STATUS
    tasks: [Task]
  }

  input taskInput {
    phase: ID
    name: String
  }

  type Query {
    tasks: [Phase]
  }

  type Mutation {
    markCompleted(taskID: ID!): Task
    addTask(data: taskInput): Task
  }
`;

export default typeDefs;
