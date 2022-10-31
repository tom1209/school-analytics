import styles from "./Header.module.css"
import Link from 'next/link'
import NavMenu from "../navMenu/NavMenu";
import { UilCell } from '@iconscout/react-unicons'

/**
 * Header component (Top menu bar)
 */
const Header = () => {

    return (
        <div className={styles.header}>
            <div className={styles.headerImage}>
                <Link href="/">
                    <h1 className={styles.title}>
                        <UilCell size="40" />
                        <span className={styles.titleText}>School Analytics Tool</span>
                    </h1>
                </Link>
            </div>
            <div className={styles.navMenuContainer}>
                <NavMenu />
            </div>
        </div>
    )
}

export default Header;