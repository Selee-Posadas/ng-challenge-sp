import { challengeApi } from "@/api/challengeApi";
import { handleApiError } from "@/utils/handle-error";

interface PostulacionOptions {
  uuid: string;
  candidateId: string;
  applicationId: string;
  jobId: string;
  repoUrl: string;
}

export const postPostulationAction = async (payload: PostulacionOptions) => {
  try {
    const { data } = await challengeApi.post('/api/candidate/apply-to-job', payload);

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};