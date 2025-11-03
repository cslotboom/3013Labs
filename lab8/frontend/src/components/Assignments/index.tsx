import { TAssignment } from "../../interfaces";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: TAssignment[];
  removeDatabaseItem: (id: string) => void
  toggleDatabaseItem: (id: string, complete: boolean) => void
};
export function Assignments({ assignments, removeDatabaseItem, toggleDatabaseItem}: Props) {
  
  const handleDeleteButton = async (id: string) => {
    console.log('pressed delete', id)
    removeDatabaseItem(id)
  };

  const handleCompletedTask = (id: string, complete: boolean) => {
    toggleDatabaseItem(id, complete)
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
