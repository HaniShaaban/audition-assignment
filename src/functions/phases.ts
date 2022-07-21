import { phasesData, PHASE_STATUS } from "./../data/seed";

export const getPhase = (phaseID) => {
  return phasesData.find((el) => el.id === phaseID);
};

export const markPhaseAsDone = (phaseID) => {
  const phase = getPhase(phaseID);
  phase.status = PHASE_STATUS.DONE;
  return phase;
};
