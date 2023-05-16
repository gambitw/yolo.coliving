import styles from './styles.module.css';
import Head from 'next/head';
import Navlink from '../../components/navLinks';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddImoveis() {
  const [form, setForm] = useState({
    nome: '',
    rua: '',
    cidade: '',
    estado: '',
    cep: '',
    tipoAluguel: '',
    quartos: ''
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    
    const response = await fetch('https://643eadb0c72fda4a0bfdd604.mockapi.io/api/v1/property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
    if (!response.ok) {
      throw new Error(`Erro ao adicionar imóvel: ${response.statusText}`);
    }
    router.push('/dashboard');
  }
  return (
        <div className={styles.container}>
            <Head>
                <title>
                   Adicionar Imóvel
                </title>
            </Head>
            <Navlink href="/novidades" label="Novidades" />
            

            <form className={styles.form} onSubmit={handleSubmit}>
            <h1  className={styles['text-title']}>Adicionar Imóvel</h1>
            
                <h2>Nome da propriedade</h2>
                <input type="text" className={styles['input-form']} name="nome" value={form.nome} onChange={handleChange} />
              

              <div className={styles.formSection}>
                <h2>Endereço</h2>
                
                  <label className={styles['input-label']}>Rua/Avenida</label>
                  <input type="text" name="rua" className={styles['input-form']} value={form.rua} onChange={handleChange} />
                
                <div className={`${styles.formInputRow}`}>
                  <label>Cidade</label>
                  <input type="text" className={styles['input-form']} name="cidade" value={form.cidade} onChange={handleChange} />
                  <label>Estado</label>
                  <input type="text" name="estado" className={styles['input-form']} value={form.estado} onChange={handleChange} />
                  <label>CEP</label>
                  <input type="text" name="cep" className={styles['input-form']} value={form.cep} onChange={handleChange} />
                </div>
              </div>

              <div className={`${styles.formSection} ${styles.formInputRow}`}>
                <label>Tipo de Aluguel</label>
                <select name="tipoAluguel" className={styles['input-form']} value={form.tipoAluguel} onChange={handleChange}>
                  <option value="apartamentoInteiro">Apartamento Inteiro</option>
                  <option value="apartamentoMetades">Apartamento Metades</option>
                </select>

                <label>Quantidade de Quartos</label>
                <select name="quartos" className={styles['input-form']} value={form.quartos} onChange={handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>

              <div className={styles.formButtons}>
                <button className={`${styles['btn']} ${styles['btn-delete']}`}>Excluir</button>
                <button className={`${styles['btn']} ${styles['btn-save']}`}>Salvar</button>
              </div>
              
            </form>

        </div>
    )
}







