import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    alert(`Logado com: ${email}`);
    setError('');
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
            />
          </div>
          <div>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-xs text-center text-zinc-400 mt-6">
          © {new Date().getFullYear()} Painel Admin <a href="https://momple.com.br/" target="_blank" className="font-bold">Momple</a>
        </p>
      </div>
    </div>
  );
}
