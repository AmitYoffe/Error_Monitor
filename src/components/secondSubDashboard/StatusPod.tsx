import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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

function StatusPod({ name, status, link }: StatusPodProps) {
  const Component = link ? Link : 'div';

  return (
    <>
      <Component to={link || ''}>
        <div className="flex">
          <p className="mb-4 flex-1 text-lg">{name}</p>
          {statusIcons[status]}
        </div>
        <p className="text-sm">Status: {status}</p>
        <p className="text-sm">Last Updated: {new Date().toISOString()}</p>
      </Component>
      <Separator />
    </>
  );
}

export default StatusPod;
