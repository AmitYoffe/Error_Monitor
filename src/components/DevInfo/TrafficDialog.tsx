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
import { getCategoryStatusDetails } from '@/utils/getStatusDetails';
import { CircleIcon } from 'lucide-react';
import StatusIndication from './StatusIndication';

interface TrafficDialogProps {
  category: string;
  icon: React.ReactNode;
  tools: { [toolName: string]: StatusType };
}

export default function TrafficDialog({
  category,
  icon,
  tools,
}: TrafficDialogProps) {
  const { description, color } = getCategoryStatusDetails(tools);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-72 cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-lg duration-150 ease-in-out hover:scale-110 dark:bg-gray-950">
          <CircleIcon className={`h-6 w-6 ${color}`} />
          <div>
            {category}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <Separator orientation="vertical" className="ml-auto h-10" />
          {icon}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex">
            <div className="flex items-center">{icon}</div>
            <Separator orientation="vertical" className="mx-2 h-7" />
            <DialogTitle className="text-xl">{`${category} Status`}</DialogTitle>
          </div>
          <DialogDescription>
            Here are the statuses of {category}.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <ul className="w-full space-y-2">
          {Object.entries(tools).map(([tool, status]) => {
            const { description } = getCategoryStatusDetails({
              [tool]: status,
            });
            return (
              <div
                key={tool}
                className="flex items-center justify-start gap-4 rounded-lg p-4 shadow-lg duration-150 ease-in-out hover:scale-105"
              >
                <StatusIndication status={status} />
                <div>
                  <h3 className="font-medium">{tool}</h3>
                  <p className={'text-sm'}>{description}</p>
                </div>
              </div>
            );
          })}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
