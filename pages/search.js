import { useState } from "react";
import styles from '../styles/Search.module.css'
import { searchSchoolInDB } from "../helpers/queries"
import  GradeCard from "../components/gradeCard/GradeCard";

const Search = () => {
    const [search, setSearch] = useState("");
    const [schoolData, setSchoolData] = useState({});

    const searchForSchool = async () => {
        console.log(`searching school by name: ${search}`)
        //TODO - validate input
        const result = await searchSchoolInDB(search)

        console.log(result);
        setSchoolData(result)
    }

    const downloadPDF = () => {
        console.log(`downloading`);
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