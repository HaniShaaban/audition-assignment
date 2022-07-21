import { UserInputError } from "apollo-server";
import { markPhaseAsDone } from "../functions/phases";
import { phasesData, PHASE_STATUS, tasksData } from "../data/seed";

export const previousPhasesDone = (phaseID) => {
  const currentPhase = phasesData.find((el) => el.id === phaseID);
  if (!currentPhase) {
    return new UserInputError("phase does not exist");
  }
  const { order } = currentPhase;
  // Order = 1 it means this is the first phase, so there is no need to check for incomplete
  if (order === 1) {
    return true;
  }

  // Check if previous phases are all DONE
  const previousPhases = phasesData.filter(
    (el) => el.order < order && el.status === PHASE_STATUS.PENDING
  );

  if (previousPhases.length > 0) {
    return false;
  }

  return true;
};

export const isCurrentPhaseDone = (phaseID) => {
  const incompletedTasks = tasksData.filter(
    (el) => el.phase === phaseID && el.completed === false
  );
  if (incompletedTasks?.length > 0) {
    return false;
  }
  markPhaseAsDone(phaseID);
};
