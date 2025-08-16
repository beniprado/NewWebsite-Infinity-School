import { useState } from 'react';
import {
  getLoginUsuario,
  getLoginSenha,
} from "../../services/api"; // <-- ajuste o caminho conforme onde está o api.js

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validateCredentials = async (inputEmail, inputPassword) => {
    try {
      // Assumindo que você tem um número limitado de usuários admin
      // Ajuste o valor conforme necessário
      const totalUsuarios = 5;

      for (let id = 1; id <= totalUsuarios; id++) {
        const usuarioData = await getLoginUsuario(id);
        const senhaData = await getLoginSenha(id);

        if (usuarioData?.login && senhaData?.senha) {
          // Verifica se as credenciais coincidem
          if (usuarioData.login === inputEmail && senhaData.senha === inputPassword) {
            return { success: true, userId: id };
          }
        }
      }

      return { success: false };
    } catch (err) {
      console.error("Erro ao validar credenciais:", err);
      return { success: false, error: "Erro interno do servidor" };
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const result = await validateCredentials(email, password);

      if (result.success) {
        // Login realizado com sucesso
        alert(`Login realizado com sucesso! Usuário: ${email}`);
        setError('');
        
      } else {
        setError(result.error || 'Email ou senha incorretos');
      }
    } catch (err) {
      console.error("Erro no login:", err);
      setError('Erro interno. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-900 px-4">
      <div className="w-full max-w-sm bg-zinc-800 p-6 rounded-xl shadow-xl">
        <h1 className="text-2xl font-semibold text-white text-center mb-6">Login Admin</h1>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-2 rounded-md transition ${
              loading 
                ? 'bg-gray-600 cursor-not-allowed text-gray-400' 
                : 'bg-red-600 hover:bg-red-700 text-white cursor-pointer'
            }`}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
        <p className="text-xs text-center text-zinc-400 mt-6">
          © {new Date().getFullYear()} Painel Admin <a href="https://momple.com.br/" target="_blank" className="font-bold">Momple</a>
        </p>
      </div>
    </div>
  );
}