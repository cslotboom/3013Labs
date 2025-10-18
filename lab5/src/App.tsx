import { useState } from "react";

import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { AssigmentType } from "./types";



function App() {

  const assignments = [
    {text:"test", id:'1', complete:false},
    {text:"test", id:'2', complete:true},
  ]
  const [assignmentState, stateSetter] = useState<Array<AssigmentType>>(assignments)

  function onNewAssigment(newAssignment:AssigmentType){
    console.log(newAssignment)
    stateSetter([...assignmentState, newAssignment])
  }

  function onDeleteAssigment(deleteID: string){
    let newAssignment = []

    for (let ii = 0; ii < assignmentState.length; ii++) {
      if (assignmentState[ii].id != deleteID){
        newAssignment.push(assignmentState[ii])
      }
      
    }
    stateSetter(newAssignment)
  }

  // Updates the state when a complete button is clicked.
  function onStatusChange(clickID: string){
    
    let newAssignment = []
    for (let ii = 0; ii < assignmentState.length; ii++) {
      let assignment = assignmentState[ii]      
      if (assignment.id === clickID){
        newAssignment.push({...assignment, 'complete':!assignment.complete})
      }
      else{
        newAssignment.push({...assignment})
      }      
    }
    stateSetter(newAssignment)

  }

  return (
    <>
      <Header onNewAssigment = {onNewAssigment}/>
      <Assignments 
        assignmentState = {assignmentState}
        onDeleteAssignment = {onDeleteAssigment}
        onStatusChange = {onStatusChange}/>
    </>
  );
}

export default App;
