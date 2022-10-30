import styles from "../styles/Add.module.css";
import { useState } from "react";
import { useFormik } from 'formik';
import validate from "../helpers/validateAddStudentForm";
import { addStudentToSchool } from "../helpers/queries"
import toast, { Toaster } from 'react-hot-toast';
import NewGradeCard from "../components/newGradeCard/NewGradeCard";


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
            const school = values.schoolName;
            const grades = [
                {
                    class: values.newClass,
                    mark: values.newMark
                }
            ];

            const student = {
                name: values.studentName,
                grades
            }
            
            await addStudentToSchool(school, student)
            toast.success('Successfully Added!!');
            resetForm();
        },
    });

    

    const addGrade = () => {
        const newGrade = {
            class: newClass,
            mark: newMark
        }
        console.log(newGrade);
        
        let updatedGrades = [...grades];
        updatedGrades.push(newGrade);
        setGrades(updatedGrades);
        console.log(grades);
        
        //Reset inputs
        setNewClass("");
        setNewMark(0);
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
                        <h3>Add Grades</h3>

                        {/* <div className={styles.gradeDisplayContainer}>
                            {
                                grades.map( grade=> {
                                    <NewGradeCard newClass={grade.class} mark={grade.mark} />
                                })
                            }
                        </div> */}

                        {formik.touched.newClass && formik.errors.newClass ? <div className={styles.error}>{formik.errors.newClass}</div> : null}
                        <label htmlFor="newClass">Enter Class</label>
                        <input id="newClass" 
                                name="newClass"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newClass} />

                        {formik.touched.newMark && formik.errors.newMark ? <div className={styles.error}>{formik.errors.newMark}</div> : null}
                        <label htmlFor="newMark">Enter Mark</label>
                        <input id="newMark" 
                                name="newMark" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.newMark} />

                        {/* <button type="button" className={styles.addNewGradeButton} id="addNewGradeButton" onClick={addGrade}>Add Grade</button> */}
                    </div>

                    <button type="submit" className={styles.addStudentButton} id="addStudentButton">Add Student</button>
                </form>
            </div>
        </div>
    )
}

export default AddStudent;