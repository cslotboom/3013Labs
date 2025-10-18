import type {AssigmentType} from "../../types"
import styles from "./assignments.module.css";
// import { useState } from "react";
import { getCompletedItems} from "./assignmentHelpers";
import { Assignment } from "../Assignment";




interface AssignmentsPropsType {
  assignmentState: AssigmentType[]
  onDeleteAssignment: (a: string) => void
  onStatusChange: (a: string) => void
}

function AssignmentList({assignmentState, onDeleteAssignment, onStatusChange}: AssignmentsPropsType){
    let assignmentHtmlList =  []
    for (let ii = 0; ii < assignmentState.length; ii++) {
      let assignment = assignmentState[ii]
  
      let html = <Assignment 
                    title = {assignment.text} 
                    id = {assignment.id} 
                    key = {assignment.id} 
                    complete={assignment.complete}
                    onDeleteAssignment = {onDeleteAssignment}
                    onStatusChange = {onStatusChange}/>
  
      assignmentHtmlList.push(html)
    }

    return (
      <>
      {...assignmentHtmlList}
      </>
    )
  }






export function Assignments({assignmentState, onDeleteAssignment, onStatusChange}:AssignmentsPropsType) {

  // Initalize state dependant variables
  const Nitem = assignmentState.length
  let Ncomplete = getCompletedItems(assignmentState)


  // let assignmentHtmlList = setupAssignments(assignmentState)
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{Nitem}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{Ncomplete} of {Nitem}</span>
        </div>
      </header>

      <div className={styles.list}>
        <AssignmentList 
          assignmentState = {assignmentState}
          onDeleteAssignment = {onDeleteAssignment}
          onStatusChange = {onStatusChange}/>
      </div>

    </section>
  );
}
