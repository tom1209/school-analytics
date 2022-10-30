import styles from "./GradeCard.module.css";
import { UilBookReader } from '@iconscout/react-unicons';

const GradeCard = ({student, grades}) => {
  return (
    <div className={styles.gradeCardContainer}>
        <div className={styles.titleContainer}>
            <UilBookReader /> {student}
        </div>
        <div className={styles.grades}>
            
            <table className={styles.gradeTable}>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        grades.map( grade => {
                            const key = Math.floor(Math.random() * 1000);
                            return (
                                <tr key={key}>
                                    <td>{grade.class}</td>
                                    <td>{grade.mark}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                
            </table>
        </div>
    </div>
  )
}

export default GradeCard;