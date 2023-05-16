import styles from './styles.module.css';
import Head from 'next/head';
import Navlink from '../../components/navLinks';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { fetchImoveis } from '../api/auth/api';
import { deleteImovel } from '../api/auth/api';
import { useRouter } from 'next/router';
import { FaTrashAlt } from 'react-icons/fa'
import { FaPencilAlt } from 'react-icons/fa'


export default function Home() {
    const [imoveis, setImoveis] = useState([]);
  
    useEffect(() => {
      async function getImoveis() {
        const data = await fetchImoveis();
        setImoveis(data);
      }
  
      getImoveis();
    }, []);
  
    async function handleDelete(id) {
        try {
          await deleteImovel(id);
          setImoveis((prevImoveis) => prevImoveis.filter((imovel) => imovel.id !== id));
        } catch (error) {
          console.log(error);
        }
      }

    return(
        <div className={styles.container}>
        <Head>
            <title>
               Meu painel de tarefas
            </title>
        </Head>
        <Navlink href="/novidades" label="Novidades" />
        <Link href="/addImovel">
            <button className={styles.addPropertyButton}>Adicionar Imóvel</button>
        </Link>
        <div>
            <Head>
                <title>Lista de Imóveis</title>
            </Head>
            <main  className={styles.containerLista}>
                <h1>Lista de Imóveis</h1>
                <ul className={styles.imoveisList}>
                {imoveis.map((imovel) => (
                    <li key={imovel.id} className={styles.imovelItem}>
                        <div className={styles.imovelName}>
                            <strong>{imovel.name}</strong>
                        </div>
                        <div className={styles.imovelAddress}>
                            {imovel.city} - {imovel.state}
                        </div>
                        <div className={styles.imovelQuartos}>
                            Quartos: {imovel.quartos}
                        </div>
                        <div className={styles.imovelTipoAluguel}>
                            Tipo de aluguel: {imovel.tipoAluguel}
                        </div>
                        <div className={styles.imovelStatus}>
                            Publicado em todas as listagens: {imovel.status}
                        </div>
                        <div className={styles.imovelButtons}>
                            <FaPencilAlt   className={styles.formIcons} size={25}   />
                            <FaTrashAlt  className={styles.formIcons}  size={25}  />
                        </div>
                    </li>
                ))}
                </ul>
            </main>
        </div>
    </div>
    )
}