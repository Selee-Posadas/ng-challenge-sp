import { CustomFooter } from "@/components/shared/CustomFooter";
import { CustomHeader } from "@/components/shared/CustomHeader";
import type { PropsWithChildren } from "react";


export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen flex flex-col items-stretch bg-[#f3f4f6] font-sans text-black w-full">
            <CustomHeader />
            <main className="grow  w-full max-w-6xl mx-auto p-6">
                {children}
            </main>
            <CustomFooter />
        </div>
    );
}
