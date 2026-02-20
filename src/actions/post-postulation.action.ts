import { challengeApi } from "@/api/challengeApi";
import { handleApiError } from "@/utils/handle-error";

interface PostulacionOptions {
  uuid: string;
  jobId: string;
  candidateId: string;
  repoUrl: string;
}

export const postPostulationAction = async ({ 
  uuid, 
  jobId, 
  candidateId, 
  repoUrl 
}: PostulacionOptions) => {
  try {
    const { data } = await challengeApi.post('/api/candidate/apply-to-job', {
      uuid,
      jobId,
      candidateId,
      repoUrl
    });
    
    return data; 
  } catch (error) {
    throw handleApiError(error);
  }
};