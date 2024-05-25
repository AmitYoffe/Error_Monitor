import { ToolsCollectionJson } from '@/types/statusType';
import GeneralStatus from '../devInfo/GeneralStatus';
import TrafficDialog from '../devInfo/TrafficDialog';

interface TrafficLightsDisplayProps {
  toolsCollectionJson: ToolsCollectionJson;
}

export default function TrafficLightsDisplay({
  toolsCollectionJson,
}: TrafficLightsDisplayProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-24 bg-secondary py-24">
      <GeneralStatus toolsCollectionJson={toolsCollectionJson} />
      <div className="flex flex-col items-center justify-center gap-6">
        {Object.entries(toolsCollectionJson).map(
          ([category, { icon, tools }]) => (
            <TrafficDialog
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
