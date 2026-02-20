import { useCandidate } from '@/hooks/useCandidate';
import { useState } from 'react';

export const LoginView = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const { login, error: authError } = useCandidate();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError(null);

    if (!email.trim()) {
      setEmailError("El email es obligatorio.");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Por favor, ingresa un email válido (ej: usuario@prueba.com).");
      return;
    }

    login(email);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6">
      <div className="bg-white border-4 border-black p-8 max-w-md w-full shadow-brutal rounded-2xl relative overflow-hidden">
        <div className="bg-black text-white p-2 mb-6 -mx-8 -mt-8 text-center font-black uppercase italic rounded-t-xl">
          Security Protocol V2.0
        </div>

        <h2 className="text-3xl font-black uppercase mb-2 tracking-tighter">Acceso Requerido</h2>
        <p className="mb-8 font-bold text-sm text-gray-600 leading-tight">
          Por favor ingresa tu correo electrónico registrado para establecer una conexión segura con el portal de reclutamiento.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="text-xs font-black uppercase mb-1 block">Neural ID (Email)</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="developer@ejemplo.com"
              className={`w-full border-4 border-black p-3 font-bold focus:outline-none focus:bg-brutal-blue/5 placeholder:text-gray-300 rounded-xl ${emailError ? 'border-red-500 bg-red-50' : ''}`}
            />
            {emailError && (
              <p className="text-red-500 text-xs font-bold mt-1 uppercase">{emailError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-brutal-pink text-white border-4 border-black p-4 font-black uppercase shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:bg-black rounded-xl"
          >
            Autenticarse
          </button>
        </form>

        {authError && (
          <div className="mt-6 border-2 border-black bg-red-100 p-3 text-xs font-bold text-red-600 uppercase rounded-xl">
            Error: {authError}
          </div>
        )}
      </div>
    </div>
  );
};