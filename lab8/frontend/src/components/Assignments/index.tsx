import { TAssignment } from "../../interfaces";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import {useStoreAssignments} from "../../store"

type Props = {
  assignments: TAssignment[];
  setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
};
export function Assignments() {
  const { assignments, setAssignments} = useStoreAssignments(state => state);
  
  const handleDeleteButton = async (id: string) => {
    const updatedAssignmentList = assignments.filter(
      (assignment) => assignment.id !== id
    );

    setAssignments(updatedAssignmentList);
  };

  const handleCompletedTask = (id: string, complete: boolean) => {
    // toggle the completion state on the server
    const updatedAssignmentList = assignments.map((assignments) =>
      assignments.id === id
        ? { ...assignments, completed: complete }
        : assignments
    );


    
    setAssignments(updatedAssignmentList);
  };

  const countCompletedTasks = () => {
    return assignments.filter((assignment) => assignment.completed).length;
  };
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>
            {countCompletedTasks()} of {assignments.length}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments.map((assignment, index) => (
          <Assignment
            id={assignment.id}
            assignment={assignment.task}
            completed={assignment.completed}
            handleDeleteButton={handleDeleteButton}
            handleCompletedTask={handleCompletedTask}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
