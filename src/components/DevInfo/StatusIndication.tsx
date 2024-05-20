import { StatusType } from '@/types/statusType';
import { CircleIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

// export const statusIcons: Record<StatusType, JSX.Element> = {
//   operational: <CheckCircle2 className="text-green-400" />,
//   unstable: <AlertCircle className="text-yellow-400" />,
//   'no-connection': <XCircle className="text-red-400" />,
// };

export const statusIcons: Record<StatusType, JSX.Element> = {
  operational: <CircleIcon className="text-green-400" />,
  unstable: <CircleIcon className="text-yellow-400" />,
  'no-connection': <CircleIcon className="text-red-400" />,
};

interface StatusLinkProps {
  status: StatusType;
}

export default function StatusIndication({ status }: StatusLinkProps) {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{statusIcons[status]}</TooltipTrigger>
          <TooltipContent>{status}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
