import type { Candidate } from "@/interfaces/candidate.interface";
import { LogOut, User } from "lucide-react";
import { Button } from "../ui/button";

interface Props {
    candidate: Candidate;
    onLogout: () => void;
}

export const CandidateCard = ({ candidate, onLogout }: Props) => {
    return (
        <div className="border-4 border-black bg-[#ffffd1] p-6 shadow-brutal mb-10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all rounded-2xl">
            <div className="flex items-center gap-6">
                <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                    <User size={40} strokeWidth="2.5" />
                </div>
                <div>
                    <h2 className="text-2xl font-black uppercase italic leading-none">
                        {candidate.firstName} {candidate.lastName}
                    </h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[10px] font-mono font-bold bg-black text-white px-2 py-0.5">
                            ID: {candidate.applicationId}
                        </span>
                        <span className="text-[10px] font-mono font-bold border-2 border-black px-2 py-0.5 bg-white">
                            {candidate.email}
                        </span>
                    </div>
                </div>
            </div>

            <Button
                onClick={onLogout}
                className="w-full md:w-auto bg-brutal-blue border-4 border-black px-6 py-2 font-black uppercase flex items-center justify-center gap-2 hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all rounded-xl"
            >
                <LogOut size={20} strokeWidth={3} /> Logout
            </Button>
        </div>
    )
}