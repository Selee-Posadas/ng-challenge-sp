import { useJobs } from "@/hooks/useJobs";
import { JobItem } from "./JobItem";
import { toast } from "sonner";
import { useCandidate } from "@/hooks/useCandidate";
import { postPostulationAction } from "@/actions/post-postulation.action";


export const JobsList = () => {
  const { jobs, isLoading, error } = useJobs();
  const { candidate } = useCandidate();

  const handleApply = async (jobId: string, url: string) => {
    if (!candidate ) {
      toast.error("Información de candidato incompleta. Reintenta el login.");
      return;
    }

    try {
      await postPostulationAction({
        uuid: candidate.uuid,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        jobId: jobId,
        repoUrl: url
      });

      toast.success("Postulación enviada con éxito", {
        description: "El sistema ha registrado tu repositorio.",
        className: "border-4 border-black rounded-none font-bold"
      });

    } catch (error) {
      toast.error(error as string);
    }
  };



  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-24 w-full border-4 border-black bg-gray-200 animate-pulse shadow-brutal" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-4 border-black bg-red-100 p-6 text-center shadow-brutal">
        <p className="font-black uppercase text-red-600 italic">Error: {error}</p>
      </div>
    );
  }


  if (jobs.length === 0) {
    return (
      <div className="border-4 border-black bg-white p-12 text-center shadow-brutal">
        <h3 className="text-2xl font-black uppercase italic mb-2">No se encuentran posiciones abiertas</h3>
        <p className="font-bold text-gray-500 text-sm">Por favor, inténtalo de nuevo más tarde para mas oportunidades.</p>
      </div>
    );
  }

  return (
    <div className="w-full pb-10">
      {jobs.map((job) => (
        <JobItem
          key={job.id}
          job={job}
          onApply={handleApply}
        />
      ))}
    </div>
  );
};