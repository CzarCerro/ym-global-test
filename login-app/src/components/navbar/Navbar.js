import ChangeLanguageButton from '../common/buttons/ChangeLanguageButton';
import LogoutButton from '../common/buttons/LogoutButton';
import styles from './styles/navbar.module.css'

function Navbar() {

    return (
        <div className={styles.Navbar}>
            <ChangeLanguageButton/>
            <LogoutButton/>
        </div>
    )
}

export default Navbar;