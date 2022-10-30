import styles from "../styles/Add.module.css";
import { useState } from "react";
import { useFormik } from 'formik';
import validate from "../helpers/validateAddStudentForm";
import { addStudentToSchool } from "../helpers/queries"
import toast, { Toaster } from 'react-hot-toast';
import GradeCard from "../components/gradeCard/GradeCard";


const AddStudent = () => {
    const [grades, setGrades] = useState([]);

    /** Creating form object */
    const formik = useFormik({
        initialValues: {
            schoolName: '',
            studentName: '',
            newClass: '',
            newMark: ''
        },
        validate,
        onSubmit: async (values, {resetForm}) => {
            //Form data to send to DB
            const school = values.schoolName;
            const student = {
                name: values.studentName,
                grades
            }
            
            //Send to DB
            try {
                await addStudentToSchool(school, student)
                toast.success('Successfully Added!!');
            }
            catch(e) {
                console.error(e);
                toast.error("Error updating DB");
            }
            
            //Reset values
            setGrades([]);
            resetForm();
        },
    });

    
    /** Add a new grade to the grades array, so a student can have multiple grades */
    const addGrade = () => {
        if (formik.errors.newClass || formik.errors.newMark || formik.values.newMark === "" || formik.values.newClass === "") {
            toast.error('Fix errors before adding a grade!!');
            return;
        }
        const newGrade = {
            mark: formik.values.newMark,
            class: formik.values.newClass
        }
        const updatedGrades = [...grades]
        updatedGrades.push(newGrade);
        setGrades(updatedGrades);

        formik.values.newClass = "";
        formik.values.newMark = "";
        console.log(grades);
    }

    return(
        <div className={styles.addContainer}>
            <Toaster />
            <div className={styles.addStudentFormContainer}>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <h1 className={styles.addStudentTitle}>Add a student and grades to a school</h1>

                    <div className={styles.formField}>
                        {formik.touched.schoolName && formik.errors.schoolName ? <div className={styles.error}>{formik.errors.schoolName}</div> : null}
                        <label htmlFor="schoolName">School Name</label>
                        <input id="schoolName" 
                                name="schoolName" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.schoolName} />
                    </div>

                    <div className={styles.formField}>
                        {formik.touched.studentName && formik.errors.studentName ? <div className={styles.error}>{formik.errors.studentName}</div> : null}
                        <label htmlFor="studentName">Student Name</label>
                        <input id="studentName" 
                                name="studentName"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.studentName} />
                    </div>

                    <div className={styles.formField}>
                        <h3 styles={styles.gradeTitle}>Add Grades</h3>

                        {formik.errors.newClass ? <div className={styles.error}>{formik.errors.newClass}</div> : null}
                        {formik.errors.newMark ? <div className={styles.error}>{formik.errors.newMark}</div> : null}
                        
                        <div className={styles.addNewGradesContainer}>
                            <label htmlFor="newClass">Enter Class</label>
                            <label htmlFor="newMark">Enter Mark</label>

                            <input id="newClass" 
                                    name="newClass"
                                    onChange={formik.handleChange}
                                    value={formik.values.newClass} />

                            <input id="newMark" 
                                    name="newMark" 
                                    onChange={formik.handleChange}
                                    value={formik.values.newMark} />
                        </div>
                        <button type="button" className={styles.addNewGradeButton} id="addNewGradeButton" onClick={addGrade}>Add More Grades</button>
                    </div>

                    { grades.length > 0 ? <GradeCard student={formik.values.studentName} grades={grades}/> : null}
                   
                    <button type="submit" className={styles.addStudentButton} id="addStudentButton">Add Student</button>
                </form>
            </div>
        </div>
    )
}

export default AddStudent;