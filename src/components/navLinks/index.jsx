import { useRouter } from 'next/router';
import styles from './styles.module.css';


export default function Navlink() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navlist}>
        <li className={`${styles.navitem} ${router.pathname === '/outracoisa' ? styles.active : ''}`}>
          <a href="/dashboard" className={styles.navlink}>
            Meu painel
          </a>
        </li>
        <li className={`${styles.navitem} ${router.pathname === '/novidades' ? styles.active : ''}`}>
          <a href="/novidades" className={styles.navlink}>
            Novidades
          </a>
        </li>
        <li className={`${styles.navitem} ${router.pathname === '/mensagens' ? styles.active : ''}`}>
          <a href="/mensagens" className={styles.navlink}>
            Mensagens
          </a>
        </li>
        <li className={`${styles.navitem} ${router.pathname === '/dashboard' ? styles.active : ''}`}>
          <a href="/imoveis" className={styles.navlink}>
            Meus imóveis
          </a>
        </li>
        <li className={`${styles.navitem} ${router.pathname === '/configuracoes' ? styles.active : ''}`}>
          <a href="/configuracoes" className={styles.navlink}>
            Configurações
          </a>
        </li>
      </ul>
    </nav>
  );
}
