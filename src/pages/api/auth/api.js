export async function fetchImoveis() {
  const response = await fetch('https://643eadb0c72fda4a0bfdd604.mockapi.io/api/v1/property');
  const data = await response.json();
  return data;
}

export async function deleteImovel(id) {
  const response = await fetch(`https://643eadb0c72fda4a0bfdd604.mockapi.io/api/v1/property/${id}`, {
    method: 'DELETE'
  });

  if (!response.ok) {
    throw new Error(`Erro ao deletar imóvel: ${response.statusText}`);
  }
}