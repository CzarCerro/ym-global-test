import LogoutButton from '../buttons/LogoutButton';
import styles from './styles/navbar.module.css'

function Navbar() {

    return (
        <div className={styles.Navbar}>
            <LogoutButton/>
        </div>
    )
}

export default Navbar;