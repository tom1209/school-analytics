import styles from '../styles/Home.module.css'

/**
 * Index Page / Landing Page
 */
export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>School Analytics</h1>
      <p>
          Welcome to the school analytics site. You&apos;re able to search for a school, 
          and check on the students and their grades. Or you can add a student and their grades to a school
      </p>
      <div className={styles.testNameContainer}>
          If you&apos;re looking for test schools to search for, you can search:
          <span className={styles.schoolHomeName}>Mohawk College</span>
          <span className={styles.schoolHomeName}>University of Toronto</span>
          <span className={styles.schoolHomeName}>McMaster University</span>
          <span className={styles.schoolHomeName}>Hogwarts</span>
      </div>

    </div>
  )
}
