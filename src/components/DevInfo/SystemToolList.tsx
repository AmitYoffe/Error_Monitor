import React from 'react';
import { getSystemStatusInfo } from '@/utils/getSystemStatusInfo';
import StatusIndication from './StatusIndication';

interface SystemToolListProps {
  tools: {
    name: string;
    color: string;
    reasons: string[];
    raw_data: Record<string, unknown>;
  }[];
  setSelectedTool: React.Dispatch<React.SetStateAction<string>>; // Add prop to update selected tool
  selectedTool: string; // Add prop to know which tool is selected
}

const SystemToolList: React.FC<SystemToolListProps> = ({
  tools,
  setSelectedTool,
  selectedTool,
}) => {
  return (
    <div className="w-full flex-1">
      <ul className="space-y-2">
        {tools.map((tool) => {
          const { description } = getSystemStatusInfo(tool);
          return (
            <div
              key={tool.name}
              className={`flex cursor-pointer items-center justify-start gap-4 rounded-lg p-4 shadow-lg duration-150 ease-in-out hover:scale-105 
              ${selectedTool === tool.name ? 'bg-secondary' : 'bg-inherit'}`}
              onClick={() => setSelectedTool(tool.name)} // Update selected tool
            >
              <StatusIndication color={tool.color} />
              <div className="flex flex-1 flex-col justify-between">
                <h3 className="font-medium">{tool.name}</h3>
                <p className={'text-sm'}>{description}</p>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SystemToolList;
