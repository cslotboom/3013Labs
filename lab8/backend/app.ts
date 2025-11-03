import express from "express";
import cors from "cors";
import database from "./database";

import { TAssignment } from "../frontend/src/interfaces";

// A helper function to create the assignments.
function createAssigment(task:string):TAssignment{
  return {'id':crypto.randomUUID(), 'task': task, 'completed': false }
}

// Helper function to test "loading spinners" in React
const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));

// Initialize the application
const app = express();
app.use(cors());
app.use(express.json());

app.get("/assignments", async (req, res) => {
  await sleep(3000);
  res.json(database.assignments);
});


app.post("/assignments", async (req, res) => {
  await sleep(3000);

  const {task} = req.body
  const newAssignment = createAssigment(task)
  database.assignments.push(newAssignment)  
  res.json(database.assignments);
});


app.post("/assignments/:id/delete", async (req, res) => {

  await sleep(3000);
  const id = req.params.id;

  const updatedAssignmentList = database.assignments.filter(
    (assignment) => assignment.id !== id
  );

  database.assignments = updatedAssignmentList
  res.json(database.assignments);

});

app.post("/assignments/:id/toggle", async (req, res) => {
  await sleep(3000);
  const {id, completed} = req.body
  const updatedAssignmentList = database.assignments.map((assignments) =>
    assignments.id === id
      ? { ...assignments, completed: completed }
      : assignments
  );
  
  database.assignments = updatedAssignmentList
  res.json(database.assignments);

});

app.listen(8000, () => {
  console.log("Backend Web Server has started 🚀");
});
