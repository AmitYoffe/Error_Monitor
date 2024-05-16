import { buttonVariants } from '@/components/ui/button';
import { StatusType } from '@/types/statusType';
import { cn } from '@/utils/utils';
import { Label } from '@radix-ui/react-dropdown-menu';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { PropsWithChildren } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export const statusIcons: Record<StatusType, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

interface StatusLinkProps extends PropsWithChildren {
  status: StatusType;
  // children: React.ReactNode;
  // name: string;
}

export default function StatusIndication({
  status,
  // children,
  // name,
}: StatusLinkProps) {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Label
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'justify-center',
              )}
            >
              {/* <span className="p-1">{name}</span> */}
              {statusIcons[status]}
              {/* <p>{children}</p> */}
            </Label>
          </TooltipTrigger>
          <TooltipContent>{status}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
