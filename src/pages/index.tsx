import Head from 'next/head';
import styles from "../../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Teste| Desenvolvedor Front-end</title>
      </Head>
      <main className={styles.main}>
        <p className={styles.title1}>
          Mais ser
        </p>
        <p className={styles.title2}>
          Menos ter
        </p>
        <p className={styles.title3}>
          A proptech que vai transformar a sua experiência de moradia
        </p>

        <div className={styles.infoContent}>
        <Link className={styles.maisButton} href="/dashboard">
          <section >
            <span>Minha lista de propriedades</span>
          </section>
        </Link>
        </div>
      </main>
    </div>
  )
}
