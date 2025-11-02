import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase, trim } from "../../helpers/stringHelpers";
import { useState } from "react";
import { TAssignment, TStoreAssignment } from "../../interfaces";

import {useStoreAssignments} from "../../store"

// type Props = {
//   // setAssignments: React.Dispatch<React.SetStateAction<TAssignment[]>>;
//   setAssignments:(task: string) => void
// };




export function Header() {

  const { addAssignment } = useStoreAssignments(state => state);
  const [assignment, setAssignment] = useState("");
  const handleCreateButton = (e: React.FormEvent) => {
    e.preventDefault();
    
    addAssignment({ id: crypto.randomUUID(), task: assignment, completed: false });

    setAssignment("");
  };

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleCreateButton}>
        <input
          placeholder="Add a new assignment"
          type="text"
          value={assignment}
          onChange={(e) => setAssignment(trim(e.target.value))}
        />
        <button type="submit" disabled={!assignment}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
