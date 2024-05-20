import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { StatusType } from '@/types/statusType';
import { CircleIcon } from 'lucide-react';
import StatusIndication from './StatusIndication';

interface TrafficDialogProps {
  category: string;
  icon: React.ReactNode;
  tools: { [toolName: string]: StatusType };
}

// const statusCaptions = {
//   red: 'Down for maintenance',
//   yellow: 'Partial outage',
//   green: 'Operational',
// };

export default function TrafficDialog({
  category,
  icon,
  tools,
}: TrafficDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-72 cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-lg duration-150 ease-in-out hover:scale-110 dark:bg-gray-950">
          <CircleIcon className="h-6 w-6 text-yellow-500" />
          <div>
            {category}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Partial outage
            </p>
          </div>
          <Separator orientation="vertical" className="ml-auto h-10" />
          {icon}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex">
            <div className="mx-1 flex items-center">{icon}</div>
            <Separator orientation="vertical" className="mx-3 h-5" />
            <DialogTitle>{`${category} Status`}</DialogTitle>
          </div>
          <DialogDescription>
            Here are the statuses of {category}.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ul className="w-full space-y-2">
          {Object.entries(tools).map(([tool, status]) => (
            <div
              key={tool}
              className="flex items-center justify-start gap-4 rounded-lg p-4 shadow-lg duration-150 ease-in-out hover:scale-105"
            >
              <StatusIndication status={status} />
              <div>
                {/* //TODO: Apply status logic flow that is similar to whats here in the DialogTrigger*/}
                <h3 className="font-medium">{tool}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {status === 'operational'
                    ? 'Operational'
                    : status === 'unstable'
                      ? 'Partial outage'
                      : 'No connection'}
                </p>
              </div>
            </div>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
