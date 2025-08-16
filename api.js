const BASE_URL = "https://hackaton-7b6q.onrender.com";

/**
 * Função genérica para buscar dados da API.
 * @param {string} endpoint - O endpoint da API a ser consultado.
 * @returns {Promise<any|null>} Os dados da resposta em JSON ou null em caso de erro.
 */
async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) {
      // Lança um erro mais detalhado para facilitar a depuração
      throw new Error(`Erro ao buscar o endpoint ${endpoint}. Status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Erro na chamada da API:", err);
    return null;
  }
}

/* ==========================================================================
   Funções da Tabela: cursos
   ========================================================================== */

// Busca o curso inteiro pelo ID
export async function getCurso(id) {
  return await fetchData(`/cursos/${id}`);
}

// Busca colunas individuais do curso
export async function getCursoNome(id) {
  return await fetchData(`/cursos/${id}/nome_curso`);
}
export async function getCursoDescricao1(id) {
  return await fetchData(`/cursos/${id}/descricao_1`);
}
export async function getCursoDescricao2(id) {
  return await fetchData(`/cursos/${id}/descricao_2`);
}
export async function getCursoDescricao3(id) {
  return await fetchData(`/cursos/${id}/descricao_3`);
}
export async function getCursoDescricao4(id) {
  return await fetchData(`/cursos/${id}/descricao_4`);
}
export async function getCursoDescricao5(id) {
  return await fetchData(`/cursos/${id}/descricao_5`);
}
export async function getCursoImagemUrl(id) {
  return await fetchData(`/cursos/${id}/imagem_curso_url`);
}

/* ==========================================================================
   Funções da Tabela: depoimentos
   ========================================================================== */

// Busca o depoimento inteiro pelo ID
export async function getDepoimento(id) {
  return await fetchData(`/depoimentos/${id}`);
}

// Busca colunas individuais do depoimento
export async function getDepoimentoNomeAluno(id) {
  return await fetchData(`/depoimentos/${id}/nome_aluno`);
}
export async function getDepoimentoTexto(id) {
  return await fetchData(`/depoimentos/${id}/depoimento`);
}
export async function getDepoimentoCurso(id) {
  return await fetchData(`/depoimentos/${id}/curso`);
}
export async function getDepoimentoImagemUrl(id) {
  return await fetchData(`/depoimentos/${id}/imagem_aluno_url`);
}
export async function getDepoimentoStars(id) {
  return await fetchData(`/depoimentos/${id}/stars`);
}

/* ==========================================================================
   Funções da Tabela: login
   ========================================================================== */

// Busca o login inteiro pelo ID
export async function getLogin(id) {
  return await fetchData(`/login/${id}`);
}

// Busca colunas individuais do login
export async function getLoginUsuario(id) {
  return await fetchData(`/login/${id}/login`);
}
export async function getLoginSenha(id) {
  return await fetchData(`/login/${id}/senha`);
}

/* ==========================================================================
   Funções da Tabela: top
   ========================================================================== */

// Busca o registro 'top' inteiro pelo ID
export async function getTop(id) {
  return await fetchData(`/top/${id}`);
}

// Busca colunas individuais do 'top'
export async function getTopNome(id) {
  return await fetchData(`/top/${id}/nome`);
}
export async function getTopCurso(id) {
  return await fetchData(`/top/${id}/curso`);
}
export async function getTopImagemUrl(id) {
  return await fetchData(`/top/${id}/imagem_aluno_top_url`);
}
export async function getTopDataEntrada(id) {
  return await fetchData(`/top/${id}/data_entrada`);
}
