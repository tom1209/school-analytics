import { useState } from "react";
import styles from '../styles/Search.module.css'
import { searchSchoolInDB } from "../helpers/queries"
import  GradeCard from "../components/gradeCard/GradeCard";
import { jsPDF } from "jspdf";

const Search = () => {
    const [search, setSearch] = useState("");
    const [schoolData, setSchoolData] = useState({});

    const searchForSchool = async () => {
        //TODO - validate input
        const result = await searchSchoolInDB(search)
        setSchoolData(result)
    }

    const downloadPDF = async () => {
        let x = 100;
        let y = 20;
        const doc = new jsPDF();
        doc.text(x, y, `School Name: ${schoolData.name}`, 'center');
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
                <div className={styles.searchForm}>
                    <label className={styles.searchLabel}>Search for a school</label>
                    <input className={styles.searchInput} id="search" value={search} onChange={ (e)=> setSearch(e.target.value)} />
                </div>
                <button className={styles.searchButton} id="searchButton" onClick={() => searchForSchool()}>Search</button>
            </div>

            {
                schoolData.students && schoolData.students.length > 0 ?
                
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