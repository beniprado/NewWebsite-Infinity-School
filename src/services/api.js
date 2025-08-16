const BASE_URL = "https://hackaton-7b6q.onrender.com";

async function fetchData(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}${endpoint}`);
    if (!res.ok) throw new Error(`Erro: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Erro na API:", err);
    return null;
  }
}

