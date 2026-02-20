import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { getCandidateAction } from "@/actions/get-candidate.action";
import type { Candidate } from "@/interfaces/candidate.interface";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface CandidateContextProps {
    candidate: Candidate | null;
    authStatus: AuthStatus;
    isAuthenticated: boolean;
    error: string | null;
    login: (email: string) => Promise<void>;
    logout: () => void;
}

export const CandidateContext = createContext<CandidateContextProps>({} as CandidateContextProps);

export const CandidateProvider = ({ children }: PropsWithChildren) => {
    const [candidate, setCandidate] = useState<Candidate | null>(null);
    const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const savedCandidate = localStorage.getItem('candidate');
        if (savedCandidate) {
        try {
            const parsed = JSON.parse(savedCandidate);
            setCandidate(parsed);
            setAuthStatus("authenticated");
        } catch (error) {
            localStorage.removeItem('candidate');
            setAuthStatus("not-authenticated");
        }
    } else {
        setAuthStatus("not-authenticated");
    }
    }, []);

    const handleLogin = async (email: string) => {
        setAuthStatus("checking");
        setError(null);
        
        try {
            const data = await getCandidateAction({ email });
            
            setCandidate(data);
            setAuthStatus("authenticated");
            localStorage.setItem('candidate', JSON.stringify(data));
        } catch (err) {
            setError(err as string);
            setAuthStatus("not-authenticated");
            setCandidate(null);
        }
    }

    const handleLogout = () => {
        setCandidate(null);
        setAuthStatus("not-authenticated");
        localStorage.removeItem('candidate');
    }

    return (
        <CandidateContext
            value={{
                authStatus,
                candidate,
                error,
                isAuthenticated: authStatus === "authenticated",
                login: handleLogin,
                logout: handleLogout,
            }}
        >
            {children}
        </CandidateContext>
    )
}