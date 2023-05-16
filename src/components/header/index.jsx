import { FaUserCircle } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/assets/logo.png';

export function Header (){
    return(
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={120} />
                </Link>
                </nav>
                <button className={styles.loginButton} onClick={ ()=> signIn("google")}>
                    <FaUserCircle size={20} strokeWidth={0}  className={styles.userIcon} />
                    <FaBars  size={20} strokeWidth={0}  className={styles.userIcon} />
                </button>
            </section>
            <div className={styles.shadow}></div>
        </header>
    )
}