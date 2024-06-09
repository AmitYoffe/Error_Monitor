import React from 'react';
import { getCategoryStatusDetails } from '@/utils/getStatusDetails';
import StatusIndication from './StatusIndication';
import { StatusType } from '@/types/statusType';

interface SystemToolListProps {
  tools: { [toolName: string]: StatusType };
}

const SystemToolList: React.FC<SystemToolListProps> = ({ tools }) => {
  return (
    <ul className="w-full flex-1 space-y-2">
      {Object.entries(tools).map(([tool, status]) => {
        const { description } = getCategoryStatusDetails({
          [tool]: status,
        });
        return (
          <div
            key={tool}
            className="flex items-center justify-start gap-4 rounded-lg p-4 shadow-lg duration-150 ease-in-out hover:scale-105"
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
  );
};

export default SystemToolList;
