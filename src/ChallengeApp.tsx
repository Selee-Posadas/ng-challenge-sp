import { useState } from "react";

import { useJobs } from "./hooks/useJobs";
import { useCandidate } from "./hooks/useCandidate";

export const ChallengeApp = () => {
  const { candidate, login, authStatus, error } = useCandidate();
  const { jobs } = useJobs();
  const [emailInput, setEmailInput] = useState("");


  if (authStatus === "checking") return <p>Iniciando terminal...</p>;


  if (!candidate) {
    return (
      <div className="p-10">
        <h1>Ingreso de Candidato</h1>
        <input 
          type="email" 
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="Tu email de registro"
          className="border p-2 mr-2 text-black"
        />
        <button 
          onClick={() => login(emailInput)}
          className="bg-blue-500 p-2 rounded"
        >
          Validar
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    );
  }


  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold text-lilac-400">
        Bienvenida, {candidate.firstName} {candidate.lastName}
      </h1>
      <p>ID: {candidate.candidateId}</p>
      
      <h2 className="mt-8 text-xl">Trabajos disponibles:</h2>
      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  );
};