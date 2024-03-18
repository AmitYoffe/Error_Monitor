import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

export type SecondSubDashboard = 'operational' | 'unstable' | 'no-connection';

type StatusPodProps = {
  name: string;
  status: string; //actual status?
  link?: string;
};

export const statusIcons: Record<StatusPodProps, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

function StatusPod({ name, status }: StatusPodProps) {
  return (
    <div className="w-1/6">
      <div className="flex">
        <p className="mb-4 flex-1 p-1 text-lg">{name}</p>
        {statusIcons[status]}
      </div>
      <p className="p-1 text-sm">Status: {status}</p>
      <p className="p-1 text-sm">Last Updated: {new Date().toISOString()}</p>
      <Separator />
    </div>
  );
}

export default StatusPod;
