# audition-assignment

1- clone the project
2- cd to audition-assignment
3- npm install
4- npm run start
5- access the application by going to http://localhost:4000/

Query reference:

1- Get tasks

```
query GetTasks {
  tasks {
    id
    name
       order
    status
    tasks {
      id
      name
      phase
      completed
    }
  }
}
```

2- Mark Task as completed

```
mutation MarkComplete($taskId: ID!) {
  markCompleted(taskID: $taskId) {
    id
    name
    phase
    completed
  }
}
```

params:

```
{
  "taskId": 1
}
```

3- Add Task

```
mutation AddTask($data: taskInput!) {
  addTask(data: $data) {
    id
    name
    phase
    completed
  }
}
```

params:

```
{
  "data": {
    "phase": 2,
    "name": "Testing newly added Task"
  }
}
```
