import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState, useEffect } from "react";
import { TAssignment } from "./interfaces";
import { BASE_URL } from "./constants";

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


function setLoading(status:boolean){
  let a = 1
}
// const {assignments} = useQuery( () => fetch(assignmentURL))

// let cache = {}

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([]);

  function initData(){
    setLoading(true)
    getData(assignmentURL).then(data => setAssignments(data))
    console.log('recieved:' , assignments)
    setLoading(false)
  }

  function addNewToDatabase(task: string){
    console.log('task', task)
    setData(assignmentURL, task).then(data => setAssignments(data))
  }



  useEffect(initData, [])

  return (
    <>
      <Header setAssignments={addNewToDatabase} />
      <Assignments assignments={assignments} setAssignments={setAssignments} />
    </>
  );
}

export default App;
