import { useState } from "react";
import styles from '../styles/Search.module.css'
import { searchSchoolInDB } from "../helpers/queries"
import { useFormik } from 'formik';
import validate from "../helpers/validateSearchForm";
import  GradeCard from "../components/gradeCard/GradeCard";
import { jsPDF } from "jspdf";

/**
 * Component for search page
 */
const Search = () => {
    const [schoolData, setSchoolData] = useState({});   //Keeps track of school data returned from search

    /** Form setup */
    const formik = useFormik({
        initialValues: {
            search: ''
        },
        validate,
        onSubmit: async (values,{resetForm}) => {
            setSchoolData({})
            const search = values.search;
            const result = await searchSchoolInDB(search)
            setSchoolData(result) 
            resetForm();
        }
    })

    /** Generate PDF for school data */
    const downloadPDF = async () => {
        //positions to display in doc
        let x = 100;    
        let y = 20;
        const doc = new jsPDF();
        doc.text(x, y, `School Name: ${schoolData.name}`, 'center');

        //Iterate through school data and add to document, pushing it a line down each time
        schoolData.students.forEach( student => {
            y +=10
            doc.text(x, y, `Student: ${student.name}`, 'center')
            student.grades.forEach( grade => {
                y +=10
                doc.text(x, y, `Class: ${grade.class}, Mark: ${grade.mark}`, 'center')
            });
        })
        doc.save("schoolData");
    }

    return (
        <div>
            <div className={styles.searchContainer}>
                <form className={styles.searchForm} autoComplete="off" onSubmit={formik.handleSubmit}>
                    <div>
                        {formik.touched.search && formik.errors.search ? <div className={styles.error}>{formik.errors.search}</div> : null}

                        <label className={styles.searchLabel}>Search for a school</label>
                        <input className={styles.searchInput} 
                                id="search" 
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.search} />
                    </div>
                    <button type="submit" className={styles.searchButton} id="searchButton">Search</button>      
                </form>
            </div>

            {
                schoolData && schoolData.students && schoolData.students.length > 0 ?
                
                <div className={styles.schoolData}>
                    <h1 className={styles.schoolTitle}>{schoolData.name}</h1>         
                    <div className={styles.studentContainer}>
                        <button className={styles.downloadPDF} id="downloadPDF" onClick={() => downloadPDF()}>Download School Grades</button>

                        {schoolData.students.map( (student)=> {
                            const key = Math.floor(Math.random() * 1000);
                            return(
                                <GradeCard key={key} student={student.name} grades={student.grades} />
                            )
                        })}
                    </div>
                    
                </div>
                : null
            }
        </div>
    )
}

export default Search;