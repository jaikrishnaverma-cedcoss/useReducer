import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
const Modal = ({ setIsOpen,formData }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}> 

          <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
 <div className="col p1">
    <table>
    {
Object.entries(formData).map(([key,val])=><tr><th style={{background:"none",color:"darkgreen"}}>{key}</th><td style={{textAlign:"left"}}>:&nbsp;{val}</td></tr>)
}
    </table>

 </div>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.deleteBtn} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;