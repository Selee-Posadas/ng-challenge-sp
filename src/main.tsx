import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ChallengeApp } from './ChallengeApp';
import { CandidateProvider } from './context/CandidateContext';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CandidateProvider>
      <ChallengeApp />
      <Toaster position="top-center" toastOptions={{
        className: 'border-4 border-black rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
        style: { background: 'white', color: 'black' }
      }} />
    </CandidateProvider>
  </StrictMode>
)
