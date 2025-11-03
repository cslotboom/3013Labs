
import styles from "./spinner.module.css";
import { MoonLoader } from "react-spinners";

type Props = {
  loading: boolean

};
export function Spinner({loading}: Props) {
    let htmlContent
    if (loading){
      htmlContent = <MoonLoader color="#ffffffff"/>
    }

  return (
    <div className={styles.spinnercontainer}>
      {/* <div className="spinner"> */}
      {htmlContent}

      {/* </div> */}
    </div>
  );
}
