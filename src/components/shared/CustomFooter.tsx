
export const CustomFooter = () => {
    return (
        <footer className="w-full border-t-4 border-black bg-white p-8 mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="font-black uppercase text-sm">Created by Selene Posadas</p>
                <div className="flex gap-8 font-bold text-xs uppercase">
                    <a href="https://www.linkedin.com/in/selene-posadas-dev/" className="hover:underline decoration-2 underline-offset-4">LinkedIn</a>
                    <a href="https://selee-posadas.github.io/portfolioSp/#/" className="hover:underline decoration-2 underline-offset-4">Portfolio</a>
                </div>
            </div>
        </footer>
    )
}
