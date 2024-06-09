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
import InfoJson from './InfoJson';
import ToolsList from './SystemToolList';

interface SystemDialogProps {
  category: string;
  icon: React.ReactNode;
  tools: { [toolName: string]: StatusType };
}

export default function SystemDialog({
  category,
  icon,
  tools,
}: SystemDialogProps) {
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
      <DialogContent className="sm:max-w-[1025px] h-3/4">
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
        <div className="flex gap-8 p-2">
          <ToolsList tools={tools} />
          <InfoJson />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Todo: Make the infoJson show data according to the selected option
