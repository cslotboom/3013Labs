import type { AssigmentType } from "../../types";

export function getCompletedItems(assignmentState: AssigmentType[]) {
  let Ncomplete = 0;
  for (let ii = 0; ii < assignmentState.length; ii++) {
    Ncomplete = Ncomplete + Number(assignmentState[ii].complete);

  }
  return Ncomplete;
}

