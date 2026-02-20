export const LoadingScreen = () => (
    <div className="min-h-screen bg-[#f3f4f6] flex flex-col items-center justify-center p-6">
        <div className="border-4 border-black bg-white p-8 shadow-brutal max-w-xs w-full text-center rounded-2xl">
            <h2 className="text-xl font-black uppercase mb-4 animate-pulse">Sincronizando el Sistema...</h2>
            <div className="w-full h-8 border-4 border-black bg-gray-200 overflow-hidden rounded-2xl">
                <div className="h-full bg-brutal-blue animate-[loading_2s_infinite] w-1/2"></div>
            </div>
            <p className="mt-4 font-mono text-[10px] font-bold uppercase">Conectando con Nimble_Gravity_Mainframe</p>
        </div>
    </div>
);