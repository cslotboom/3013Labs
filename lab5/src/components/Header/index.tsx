import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { useState } from "react";
import { AssigmentType } from "../../types";

interface SubmitButtonProps {
  isActive: boolean;
}

function SubmitButton({isActive}: SubmitButtonProps){
  return (<button disabled = {isActive}>
              Create <AiOutlinePlusCircle size={20} />
          </button>)
}

type FormProps = {
  onNewAssigment: (assignment: AssigmentType) => void;
};

export function Header({onNewAssigment}: FormProps) {

  // Manages the text and component text
  const [newAssignmentText, textSetter] = useState<string>('')

  // Handles changes to the input text field
  function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    textSetter(e.target.value)
  }

  // Handles changes to the input text field
  function handleSubmitEvent(e: React.FormEvent){
    e.preventDefault()
    // let newText = e.target.
    const newAssignment = {'text':newAssignmentText, id:crypto.randomUUID(), 'complete':false }
    onNewAssigment(newAssignment)
    textSetter('')
  }

  let isActive = newAssignmentText.length === 0 ? true: false
  console.log(isActive)

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm} onSubmit={handleSubmitEvent}>
        <input  placeholder="Add a new assignment" 
                type="text"
                value={newAssignmentText}
                onChange={handleChange} />
        <SubmitButton isActive = {isActive}/>
      </form>
    </header>
  );
}
