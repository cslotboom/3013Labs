import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

interface SubmitButtonProps {
  title: string;
  id:string
  complete: boolean
  onDeleteAssignment: (a: string) => void
  onStatusChange: (a: string) => void

}

export function Assignment({title, id, complete, onDeleteAssignment, onStatusChange}: SubmitButtonProps) {
  
  function handleDelete(){
    onDeleteAssignment(id)
  }

  function handleCompleteChange(){
    console.log('clicked!')
    onStatusChange(id)
  }

  const strikeclass = complete?styles.textCompleted:'' 
  const completeIcon = complete?<FaRegCheckCircle/>:<div /> 

  return (
    <div className={styles.assignment} id = {id}>
      <button className={styles.checkContainer} onClick={handleCompleteChange}>
        {completeIcon}
        
      </button>

      <p className={strikeclass}>{title}</p>

      <button className={styles.deleteButton} onClick={handleDelete}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
