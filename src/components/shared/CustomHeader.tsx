
export const CustomHeader = () => {
  return (
    <header className=" w-full border-b-4 border-black bg-white p-4 sticky top-0 z-10">
        <div className="w-full max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-black uppercase tracking-tighter">
                NG // <span className="text-brutal-blue">Challenge V2.0</span>
            </h1>
            <div className="hidden md:block text-xs font-mono font-bold bg-black text-white px-2 py-1">
                SYS_STATUS: ONLINE
            </div>
        </div>
    </header>
  );
};

