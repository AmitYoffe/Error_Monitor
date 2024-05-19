import { Separator } from '../ui/separator';
import GeneralStatus from './GeneralStatus';
import StatusIndication from './StatusIndication';
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
    <div className="flex items-center justify-center gap-24 mt-16">
      <GeneralStatus />
      <div className="flex flex-col items-center justify-center gap-6">
        {Object.entries(toolsCollectionJson).map(
          ([category, { icon, tools }]) => (
            <TrafficDialog
              key={category}
              category={category}
              icon={icon}
              tools={tools}
            >
              <ul className="w-full">
                {tools.map((tool) => (
                  <div key={tool}>
                    <Separator className="my-3" />
                    <div className="flex justify-between">
                      <li className="my-auto">{tool}</li>
                      <StatusIndication status={'operational'} />
                    </div>
                  </div>
                ))}
              </ul>
            </TrafficDialog>
          ),
        )}
      </div>
    </div>
  );
}
