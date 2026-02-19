import { getJobsAction } from "@/actions/get-jobs.action";
import type { Job } from "@/interfaces/job.interface";
import { useEffect, useState } from "react";

export const useJobs = () => {

    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const loadJobs = async () => {
        try {
            setIsLoading(true);
            const data = await getJobsAction();
            setJobs(data);

        } catch (error) {
            setError(error as string);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadJobs();
    }, [])


    return {
        jobs,
        isLoading,
        error,

        loadJobs,
    };
};
