
import { TAssignment, TStoreAssignment } from "./interfaces";
import {create} from 'zustand';



export const useStoreAssignments = create<TStoreAssignment>((set:any) => ({
  assignments: [],

  setAssignments: (assignments) => set((state: TStoreAssignment) => {
    return {
      assignments: assignments
    }
  }),


  addAssignment: (newAssignment) => set((state: TStoreAssignment) => {
    return {
      assignments: [...state.assignments, newAssignment]
    }
  }),

  deleteAssignment: (id) => set((state: TStoreAssignment) => {
    const updatedAssignmentList = state.assignments.filter(
      (assignment) => assignment.id !== id)
    return {
      assignments: updatedAssignmentList
    }
  }),

  modifyAssignment: (newAssignment) => set((state: TStoreAssignment) => {
    const updatedAssignmentList = []
    for (let ii = 0; ii < state.assignments.length; ii++) {
      if (state.assignments[ii].id === newAssignment.id){
        updatedAssignmentList.push(newAssignment)
      } else{
        updatedAssignmentList.push(state.assignments[ii])
      }      
    }
    return {
      assignments: updatedAssignmentList
    }
  })

}))


// const useStoreAssignments = create<TStoreAssignment>((set:any) => ({
//   assignments: [],
//   addAssignment: (newAssignment:TAssignment) => set((state: TStoreAssignment) => {
//     return {
//       ...state,
//       assignments: [...state.assignments, newAssignment]
//     }
//   }),
//   deleteAssignment: (id:string) => set((state: TStoreAssignment) => {
//     const updatedAssignmentList = state.assignments.filter(
//       (assignment) => assignment.id !== id)
//     return {
//       ...state,
//       assignments: updatedAssignmentList
//     }
//   }),
//   modifyAssignment: (newAssignment:TAssignment) => set((state: TStoreAssignment) => {
//     const updatedAssignmentList = []
//     for (let ii = 0; ii < state.assignments.length; ii++) {
//       if (state.assignments[ii].id === newAssignment.id){
//         updatedAssignmentList.push(newAssignment)
//       } else{
//         updatedAssignmentList.push(state.assignments[ii])
//       }      
//     }
//     return {
//       ...state,
//       assignments: updatedAssignmentList
//     }
//   })

// }))

