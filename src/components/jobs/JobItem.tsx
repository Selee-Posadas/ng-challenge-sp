import { useState } from 'react';
import type { Job } from '@/interfaces/job.interface';
import { Send } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../ui/button';

interface Props {
  job: Job;
  onApply: (jobId: string, url: string) => Promise<void>;
}

export const JobItem = ({ job, onApply }: Props) => {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setUrlError(null);

    if (!url.trim()) {
      setUrlError("La URL es obligatoria.");
      return;
    }

    if (!url.includes('github.com')) {
      setUrlError("Por favor, ingresa una URL válida de GitHub.");
      return;
    }

    setIsSubmitting(true);
    try {
      await onApply(job.id, url);
      setUrl('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
    if (urlError) setUrlError(null);
  };

  return (
    <div className="border-4 border-black bg-white p-6 shadow-brutal mb-6 flex flex-col lg:flex-row items-center justify-between gap-6 hover:translate-x-1 hover:translate-y-1 transition-all rounded-2xl">
      <div className="flex-1 w-full text-left">
        <h3 className="text-xl font-black text-brutal-lilac uppercase tracking-tight leading-none">
          {job.title}
        </h3>
        <p className="text-[10px] font-bold text-gray-400 uppercase mt-2 font-mono">
          REFERENCE_ID: {job.id} // LEVEL: L1
        </p>
      </div>

      <div className="flex flex-col sm:flex-row w-full lg:w-2/3 gap-4 items-end">
        <div className="w-full">
          <label className="text-[9px] font-black uppercase mb-1 block">Repository URL</label>
          <input 
            type="text" 
            placeholder="https://github.com/your-repo"
            value={url}
            onChange={handleUrlChange}
            disabled={isSubmitting}
            className={`w-full border-2 border-black p-2 text-sm font-bold focus:outline-none focus:bg-brutal-lilac/5 bg-[#fafafa] disabled:opacity-50 rounded-xl ${urlError ? 'border-red-500 bg-red-50' : ''}`}
          />
          {urlError && (
            <p className="text-red-500 text-[10px] font-bold mt-1 uppercase">{urlError}</p>
          )}
        </div>
        
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto whitespace-nowrap bg-brutal-pink text-white border-4 border-black px-8 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:bg-black disabled:opacity-50 rounded-xl h-9.5"
        >
          {isSubmitting ? 'Sending...' : 'Apply Now'}
        </Button>
      </div>
    </div>
  );
};