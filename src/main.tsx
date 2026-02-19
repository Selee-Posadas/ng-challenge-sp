import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ChallengeApp } from './ChallengeApp';
import { CandidateProvider } from './context/CandidateContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CandidateProvider>
      <ChallengeApp />
    </CandidateProvider>
  </StrictMode>
)
