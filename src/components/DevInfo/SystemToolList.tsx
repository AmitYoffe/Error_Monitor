import React, { useEffect, useState } from 'react';
import { getCategoryStatusDetails } from '@/utils/getStatusDetails';
import StatusIndication from './StatusIndication';
import { StatusType } from '@/types/statusType';

interface SystemToolListProps {
  tools: { [toolName: string]: StatusType };
}

const SystemToolList: React.FC<SystemToolListProps> = ({ tools }) => {
  const [selectedTool, setSelectedTool] = useState<string>('');

  // give the state an initial value of the first tool
  useEffect(() => {
    const toolNames = Object.keys(tools);
    if (toolNames.length > 0) {
      setSelectedTool(toolNames[0]);
    }
  }, [tools]);

  return (
    <div className="w-full flex-1">
      <ul className="space-y-2">
        {Object.entries(tools).map(([tool, status]) => {
          const { description } = getCategoryStatusDetails({
            [tool]: status,
          });
          return (
            <div
              key={tool}
              className={`flex cursor-pointer items-center justify-start gap-4 rounded-lg p-4 shadow-lg duration-150 ease-in-out hover:scale-105 
              ${selectedTool === tool ? 'bg-secondary' : 'bg-inherit'}`}
              onClick={() => setSelectedTool(tool)}
            >
              <StatusIndication status={status} />
              <div className="flex flex-1 flex-col justify-between">
                <h3 className="font-medium">{tool}</h3>
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
