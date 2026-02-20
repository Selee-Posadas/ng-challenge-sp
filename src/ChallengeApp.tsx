import { LoginView } from "./components/auth/LoginView";
import { CandidateCard } from "./components/candidate/CandidateCard";
import { JobsList } from "./components/jobs/JobList";
import { LoadingScreen } from "./components/shared/LoadingScreen";
import { useCandidate } from "./hooks/useCandidate";
import { useJobs } from "./hooks/useJobs";
import { MainLayout } from "./layouts/MainLayout";

export const ChallengeApp = () => {
  const { candidate, authStatus, logout } = useCandidate();
  const { jobs } = useJobs();

  if(authStatus === "checking") return <LoadingScreen/>;

  if(!candidate) return <LoginView/>;

return (
    <MainLayout>

      <CandidateCard candidate={candidate} onLogout={logout} />


      <section className="mt-8">
        <div className="flex justify-between items-end mb-8 border-b-4 border-black pb-2">
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none">
              Vacantes <span className="text-brutal-lilac">Disponibles</span>
            </h2>
            <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase">
              Recruitment Portal // Secure_Access_Granted
            </p>
          </div>
          
          <div className="text-right">
            <span className="font-mono text-xs font-black bg-black text-white px-2 py-1">
              RESULTS: {jobs.length}
            </span>
          </div>
        </div>


        <JobsList />
      </section>
    </MainLayout>
  );
};