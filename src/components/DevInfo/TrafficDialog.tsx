import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { CircleIcon } from 'lucide-react';
import StatusIndication from './StatusIndication';

interface TrafficDialogProps {
  category: string;
  icon: React.ReactNode;
  tools: string[];
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
        <div className="flex w-64 cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-lg duration-150 ease-in-out hover:scale-110 dark:bg-gray-950">
          <CircleIcon className="h-6 w-6 text-yellow-500" />
          <div>
            <div className="flex">
              {/* <div className="flex items-center">{icon}</div> */}
              {/* <Separator orientation="vertical" className="mx-2 h-5" /> */}
              <span>{category}</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Partial outage
            </p>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div className="">{icon}</div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div>
            <div className="flex">
              <div className="mx-1 flex items-center">{icon}</div>
              <Separator orientation="vertical" className="mx-3 h-5" />
              <DialogTitle>{`${category} Status`}</DialogTitle>
            </div>
          </div>
          <DialogDescription>
            Here are the statuses of the {category}.
          </DialogDescription>
        </DialogHeader>
        <Separator />
        {/* make this component appear for each child in the tools argument*/}
        <ul className="w-full space-y-2">
          {tools.map((tool) => (
            <div className="flex items-center justify-between rounded-lg p-4 shadow-lg duration-150 ease-in-out hover:scale-105">
              <div className="flex items-center gap-4">
                <StatusIndication status={'operational'} />
                <div>
                  <h3 className="font-medium">{tool}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Partial outage
                  </p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}

// Todo:
// 1) Prettify the dialog
// 2) Add some sort of Status indication in the parent component
// (i was thinking of adding the big one on the top left and moving the duck to the right...)
