import styles from "../styles/Add.module.css";
import { useState } from "react";

const AddStudent = () => {
    const [studentName, setStudentName] = useState("");
    const [schoolName, setSchoolName] = useState("");
    const [grades, setGrades] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <div className={styles.addContainer}>
            <form onSubmit={handleSubmit} autoComplete="off">
                <h1 className={styles.addStudentTitle}>Add a student and grades to a school</h1>
                <div className={styles.formField}>
                    <label>School Name</label>
                    <input id="schoolName" value={schoolName} onChange={ (e)=> setSchoolName(e.target.value)} />
                </div>
                <div className={styles.formField}>
                    <label>Student Name</label>
                    <input id="studentName" value={studentName} onChange={ (e)=> setStudentName(e.target.value)} />
                </div>
                <div className={styles.formField}>
                    <label>Add Grades</label>
                </div>
            </form>
        </div>
    )
}

export default AddStudent;