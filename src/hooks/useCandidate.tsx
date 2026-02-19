import { CandidateContext } from "@/context/CandidateContext";
import { useContext } from "react"

export const useCandidate = () => {
  const context = useContext(CandidateContext);

  if(!context) throw new Error('useCandidate debe ser usado dentro de un CandidateProvider');
  
  return context;
}
