import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState, useEffect } from "react";
import { TAssignment, TStoreAssignment } from "./interfaces";
import { BASE_URL } from "./constants";

import {useStoreAssignments} from "./store"

// https://krython.com/tutorial/typescript/zustand-lightweight-state-management


const assignmentURL = BASE_URL + '/assignments'

const getData = async (url: string): Promise<TAssignment[]> => {
  const response = await fetch(url)
  const data = await response.json()
  return data;
};

const setData = async (url: string, task: string): Promise<TAssignment[]> => {
  console.log(task)
  const response = await fetch(url,
                              {method: "POST",
                                body: JSON.stringify({ 'task': task }),
                                headers: { "Content-Type": "application/json"}
                          })
  const data = await response.json()
  return data;
};

// function _addToState(state: StoreAssignment, newAssignment: TAssignment){
//     return  [...state.assignments, newAssignment]
// }

// function addAssigment(assignment:TAssignment){
//   _addToState()
// }



function App() {
  // const [assignments, setAssignments] = useState<TAssignment[]>([]);
  const {assignments, setAssignments} = useStoreAssignments((state) => state)



  function initData(){
    getData(assignmentURL).then(data => setAssignments(data))
    console.log('recieved:' , assignments)
  }

  function addNewToDatabase(task: string){
    console.log('task', task)
    setData(assignmentURL, task).then(data => setAssignments(data))
  }



  useEffect(initData, [])

  return (
    <>
      <Header />
      <Assignments />
    </>
  );
}

export default App;
