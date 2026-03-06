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
  const useMock = import.meta.env.VITE_MOCK_MODE === 'true';

  if (useMock) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, message: "Postulación enviada con éxito" };
  }

  try {
    const { data } = await challengeApi.post('/api/candidate/apply-to-job', payload);

    return data;
  } catch (error) {
    throw handleApiError(error);
  }
};