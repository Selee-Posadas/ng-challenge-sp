import { challengeApi } from "@/api/challengeApi";
import type { Job } from "@/interfaces/job.interface";
import { handleApiError } from "../utils/handle-error";


export const getJobsAction = async ():Promise<Job[]> => {
    try {
        const { data } = await challengeApi.get<Job[]>(`/api/jobs/get-list`);
        return data;
    } catch (error) {
        const errorMessage = handleApiError(error);
        throw errorMessage;
    }
}