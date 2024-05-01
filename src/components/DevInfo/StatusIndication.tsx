import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { StatusType } from '@/types/dashboardTypes';
import { Label } from '@radix-ui/react-dropdown-menu';
import { PropsWithChildren } from 'react';
import { statusIcons } from '../subDashboard/NetworksTable';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface StatusLinkProps extends PropsWithChildren {
  status: StatusType;
  name: string;
}

export default function StatusIndication({
  status,
  children,
  name,
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
              <span className="p-1">{name}</span>
              {statusIcons[status]}
              <p>{children}</p>
            </Label>
          </TooltipTrigger>
          <TooltipContent>{status}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
