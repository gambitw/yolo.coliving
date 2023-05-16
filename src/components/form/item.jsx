import { useState, useEffect } from 'react';
import { fetchImoveis, deleteImovel } from '../api';

function MyList() {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    async function getImoveis() {
      const data = await fetchImoveis();
      setImoveis(data);
    }

    getImoveis();
  }, []);

  async function handleDelete(id) {
    await deleteImovel(id);
    const data = await fetchImoveis();
    setImoveis(data);
  }

  return (
    <ul>
      {imoveis.map(imovel => (
        <li key={imovel.id}>
          <h3>{imovel.endereco}</h3>
          <p>{imovel.cidade}, {imovel.estado} - {imovel.cep}</p>
          <p>Tipo de aluguel: {imovel.tipo}</p>
          <p>Quartos: {imovel.quartos}</p>
          <button type="button" onClick={() => handleDelete(imovel.id)}>Excluir</button>
          <button type="button">Editar</button>
        </li>
      ))}
    </ul>
  );
}

export default MyList;