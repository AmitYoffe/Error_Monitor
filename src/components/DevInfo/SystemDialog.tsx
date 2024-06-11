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
import SystemToolsList from './SystemToolList';
import { getSystemStatusInfo } from '@/utils/getSystemStatusInfo';
import RawDataPreview from './RawDataPreview';
import { useState } from 'react';

interface SystemDialogProps {
  category: string;
  icon: React.ReactNode;
  tools: {
    name: string;
    color: string;
    reasons: string[];
    raw_data: Record<string, unknown>;
  }[];
}

export default function SystemDialog({
  category,
  icon,
  tools,
}: SystemDialogProps) {
  // Initialize with the first tool
  const [selectedTool, setSelectedTool] = useState<string>(tools[0].name);

  const toolStatusInfo = tools.map((tool) => getSystemStatusInfo(tool));
  const overallStatus = toolStatusInfo.find(
    (info) => info.status !== 'operational',
  );
  const selectedToolData = tools.find(
    (tool) => tool.name === selectedTool,
    )?.raw_data; // Find raw_data of selected tool
    console.log('tools: ', tools)
    console.log(selectedToolData, selectedTool);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex w-72 cursor-pointer items-center gap-4 rounded-lg bg-white p-4 shadow-lg duration-150 ease-in-out hover:scale-110 dark:bg-gray-950">
          <CircleIcon
            className={`h-6 w-6 ${overallStatus ? overallStatus.color : 'text-green-500'}`}
          />
          <div>
            {category}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {overallStatus ? overallStatus.description : 'Operational'}
            </p>
          </div>
          <Separator orientation="vertical" className="ml-auto h-10" />
          {icon}
        </div>
      </DialogTrigger>
      <DialogContent className="h-3/4 sm:max-w-[1025px]">
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
        <div className="flex h-full gap-8 overflow-y-hidden p-2">
          <SystemToolsList
            tools={tools}
            setSelectedTool={setSelectedTool}
            selectedTool={selectedTool}
          />
          <RawDataPreview rawData={selectedToolData} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
