import styles from "./NewGradeCard.module.css";

const NewGradeCard = ({newClass, mark}) => {
    return (
        <div className={styles.newGradeBadge}>
            <span>
                {newClass}
            </span>
            <span>
                {mark}
            </span>
        </div>
    )
}

export default NewGradeCard;