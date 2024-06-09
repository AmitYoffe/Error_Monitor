import { ToolsCollectionJson } from '@/types/statusType';
import GeneralStatus from './GeneralStatus';
import SystemDialog from './SystemDialog';

interface SystemStatusDisplayProps {
  toolsCollectionJson: ToolsCollectionJson;
}

export default function SystemStatusDisplay({
  toolsCollectionJson,
}: SystemStatusDisplayProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-24 bg-secondary py-24">
      <GeneralStatus toolsCollectionJson={toolsCollectionJson} />
      <div className="flex flex-col items-center justify-center gap-6">
        {Object.entries(toolsCollectionJson).map(
          ([category, { icon, tools }]) => (
            <SystemDialog
              key={category}
              category={category}
              icon={icon}
              tools={tools}
            />
          ),
        )}
      </div>
    </div>
  );
}
