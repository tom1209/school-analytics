import styles from "./NavMenu.module.css";
import Link from 'next/link'
import { NavMenuItems } from "../../helpers/NavMenuItems"

/**
 * Nav Menu bar inside header component (All the menu items, with their name and path)
 */
const NavMenu = ()=> {
    return (
        <ul className={styles.navMenu}>
            {
                NavMenuItems.map( (item) => {
                    return (
                        <li key={item.path}>
                            <Link href={item.path}>{item.name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu;