import { useJobs } from "./hooks/useJobs"

export const ChallengeApp = () => {

  const {jobs, isLoading, error, loadJobs} = useJobs();

  if(isLoading)return <div>Cargando empleos...</div>
  if (error) {
    return (
      <div>
        <p style={{ color: 'red' }}>Ups! {error}</p>
        <button onClick={loadJobs}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Puestos Disponibles</h1>
      <pre>
        {JSON.stringify(jobs, null, 2)}
      </pre>
    </div>
  )
}
 