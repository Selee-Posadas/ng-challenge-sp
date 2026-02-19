import { challengeApi } from "@/api/challengeApi"
import type { Candidate } from "@/interfaces/candidate.interface"
import { handleApiError } from "@/utils/handle-error";

interface Options {
    email: string;
}

export const getCandidateAction = async ({ email }: Options): Promise<Candidate> => {

    try {
        const { data } = await challengeApi.get<Candidate>(`/api/candidate/get-by-email`, {
            params: {
                email,
            }
        });
        return data;
    } catch (error) {
        const errorMessage = handleApiError(error);
        throw errorMessage;
    }

}
