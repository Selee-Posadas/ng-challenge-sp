import { challengeApi } from "@/api/challengeApi"
import type { Candidate } from "@/interfaces/candidate.interface"
import { handleApiError } from "@/utils/handle-error";
import { mockCandidates } from "@/mocks/candidate.mock";

interface Options {
    email: string;
}

export const getCandidateAction = async ({ email }: Options): Promise<Candidate> => {
    const useMock = import.meta.env.VITE_MOCK_MODE === 'true';

    if (useMock) {
        await new Promise(resolve => setTimeout(resolve, 500));
        return mockCandidates[0];
    }

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
