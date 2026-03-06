import { challengeApi } from "@/api/challengeApi";
import type { Job } from "@/interfaces/job.interface";
import { handleApiError } from "../utils/handle-error";
import { mockJobs } from "@/mocks/jobs.mock";


export const getJobsAction = async ():Promise<Job[]> => {
    const useMock = import.meta.env.VITE_MOCK_MODE === 'true';

    if (useMock) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockJobs;
    }

    try {
        const { data } = await challengeApi.get<Job[]>(`/api/jobs/get-list`);
        return data;
    } catch (error) {
        const errorMessage = handleApiError(error);
        throw errorMessage;
    }
}