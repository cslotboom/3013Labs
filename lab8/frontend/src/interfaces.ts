export type TAssignment = { id: string; task: string; completed: boolean };

export interface TStoreAssignment {
    assignments: TAssignment[]
    setAssignments: (assignment: TAssignment[]) => void
    addAssignment: (assignment: TAssignment) => void
    deleteAssignment: (id: string) => void
    modifyAssignment: (assignment: TAssignment) => void
}