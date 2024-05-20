import GeneralStatus from './GeneralStatus';
import TrafficDialog from './TrafficDialog';

type ToolCategory = {
  icon: React.ReactNode;
  tools: string[];
};

export type ToolsCollectionJson = {
  [category: string]: ToolCategory;
};

interface TrafficLightsDisplayProps {
  toolsCollectionJson: ToolsCollectionJson;
}

export default function TrafficLightsDisplay({
  toolsCollectionJson,
}: TrafficLightsDisplayProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-24 bg-secondary py-24">
      <GeneralStatus />
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
