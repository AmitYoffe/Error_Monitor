import { ToolsCollectionJson } from '@/types/statusType';
import GeneralStatus from './GeneralStatus';
import SystemDialog from './SystemDialog';
import getSystemIcon from '@/utils/getSystemIcon';

interface SystemStatusDisplayProps {
  toolsCollectionJson: ToolsCollectionJson;
}
// Todo: for each returned value of console.log(extractSystemStatuses()); i need to show a SystemDialog component

export default function SystemStatusDisplay({
  toolsCollectionJson,
}: SystemStatusDisplayProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-24 bg-secondary py-24">
      <GeneralStatus toolsCollectionJson={toolsCollectionJson} />
      <div className="flex flex-col items-center justify-center gap-6">
        {Object.entries(toolsCollectionJson).map(([category, { tools }]) => (
          <SystemDialog
            key={category}
            category={category}
            icon={getSystemIcon(category)}
            tools={tools}
          />
        ))}
      </div>
    </div>
  );
}
