// exemplo.js
import { getCursoNome, getCursoDescricao1, getDepoimentoStars, getTopNome } from "./api.js";

async function exemplo() {
  // Exemplo da tabela CURSOS
  const nomeCurso = await getCursoNome(1);
  console.log("Nome do Curso:", nomeCurso);

  const desc1 = await getCursoDescricao1(1);
  console.log("Descrição 1 do Curso:", desc1);

  // Exemplo da tabela DEPOIMENTOS
  const estrelas = await getDepoimentoStars(2);
  console.log("Estrelas do Depoimento:", estrelas);
  
  // Exemplo da tabela TOP
  const nomeTop = await getTopNome(1);
  console.log("Nome do Aluno Top:", nomeTop);
}

exemplo();