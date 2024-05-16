import { Separator } from '../ui/separator';
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
    <div className="grid h-24 grid-cols-4 content-around gap-2 px-8">
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
  );
}
