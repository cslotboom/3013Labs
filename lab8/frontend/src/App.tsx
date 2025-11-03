import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { Spinner } from "./components/Spinner";
import { useState, useEffect } from "react";
import { TAssignment } from "./interfaces";
import { BASE_URL } from "./constants";


const assignmentURL = BASE_URL + '/assignments'

const getData = async (url: string): Promise<TAssignment[]> => {
  const response = await fetch(url)
  const data = await response.json()
  return data;
};

const postData = async (url: string, params: any): Promise<TAssignment[]> => {
  const response = await fetch(url,
                              {method: "POST",
                                body: JSON.stringify(params),
                                headers: { "Content-Type": "application/json"}
                          })
  const data = await response.json()
  return data;
};

function App() {
  const [assignments, setAssignments] = useState<TAssignment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function initData(){
    setLoading(true)
    getData(assignmentURL).then(data => {setAssignments(data)
          setLoading(false)
    })
  }

  /*
  * Adds a new item to the database
  */
  function addNewToDatabase(task: string){
    const msg = { 'task': task }
    setLoading(true)
    postData(assignmentURL, msg).then(data => {setAssignments(data)
      setLoading(false)

    })
  }

  /*
  * Removes items in the database
  */
  function removeDatabaseItem(id: string){
    const deleteURL = `${assignmentURL}/${id}/delete`
    const msg = { 'id': id }
    setLoading(true)
    postData(deleteURL, msg).then(data => {setAssignments(data)
      setLoading(false)

    })
  }

  /*
  * Toggles items completion in the database
  */
  function toggleDatabaseItem(id: string, completed: boolean){

    const msg = { 'id': id , 'completed': completed}

    const url = `${assignmentURL}/${id}/toggle`
    setLoading(true)

    postData(url, msg).then(data => {setAssignments(data)
      setLoading(false)
    })

  }



  useEffect(initData, [])

  return (
    <>
      <Header setAssignments={addNewToDatabase} />
      <div className='assignment-container'>
        <Spinner loading={loading}></Spinner>
        <div className={`${loading ? "blurred" : ""}`}>
          <Assignments 
                assignments={assignments}
                // loading={loading} 
                removeDatabaseItem={removeDatabaseItem}
                toggleDatabaseItem={toggleDatabaseItem} />
        </div>
      </div>

    </>
  );
}

export default App;
