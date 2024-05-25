import { StatusType } from '@/types/statusType';
import { CircleIcon } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{statusIcons[status]}</TooltipTrigger>
        <TooltipContent>{status}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
