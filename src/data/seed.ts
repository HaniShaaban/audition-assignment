export type Phase = {
  id: number;
  name: string;
  order: number;
  status: "PENDING" | "DONE";
};

export type Task = {
  id: number;
  name: string;
  phase: number;
  completed: boolean;
};

export enum PHASE_STATUS {
  PENDING = "PENDING",
  DONE = "DONE",
}

export const phasesData: Phase[] = [
  {
    id: 1,
    name: "Foundation",
    order: 1,
    status: PHASE_STATUS.PENDING,
  },
  {
    id: 2,
    name: "Discovery",
    order: 2,
    status: PHASE_STATUS.PENDING,
  },
  {
    id: 3,
    name: "Delivery",
    order: 3,
    status: PHASE_STATUS.PENDING,
  },
];

export const tasksData: Task[] = [
  {
    id: 1,
    name: "Setup virtual office",
    phase: 1,
    completed: false,
  },
  {
    id: 2,
    name: "Set mission & vision",
    phase: 1,
    completed: false,
  },
  {
    id: 3,
    name: "Select business name",
    phase: 1,
    completed: false,
  },
  {
    id: 4,
    name: "Buy domains",
    phase: 1,
    completed: false,
  },
  {
    id: 5,
    name: "Create roadmap",
    phase: 2,
    completed: false,
  },
  {
    id: 6,
    name: "Competitor analysis",
    phase: 2,
    completed: false,
  },
  {
    id: 7,
    name: "Release marketing website",
    phase: 3,
    completed: false,
  },
  {
    id: 8,
    name: "Release MVP",
    phase: 3,
    completed: false,
  },
];
