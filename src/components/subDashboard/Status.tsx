import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export type Status = 'operational' | 'unstable' | 'no-connection';

type StatusProps = {
  name: string;
  status: Status;
  link?: string;
};

export const statusIcons: Record<Status, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

function Status({ name, status, link }: StatusProps) {
  const Component = link ? Link : 'div';

  return (
    <>
      <div>
        <Component to={link || ''}>
          <div className="flex">
            <p className="mb-4 flex-1 text-lg">{name}</p>
            {statusIcons[status]}
          </div>
          <p className="text-sm">Status: {new Date().toISOString()}</p>
          <p className="text-sm">Last Updated: {new Date().toISOString()}</p>
        </Component>
      </div>
      <Separator />
    </>
  );
}

export default Status;
