import { StatusType } from '@/types/statusType';

export const getSystemStatusInfo = (tool: {
  name: string;
  color: string;
  reasons: string[];
  raw_data: Record<string, unknown>;
}) => {
  let status: StatusType = 'operational';
  let description = 'Operational';
  let color = 'text-green-500';

  if (tool.color === 'red') {
    status = 'no-connection';
    description = 'No connection';
    color = 'text-red-500';
  } else if (tool.color === 'yellow') {
    status = 'unstable';
    description = 'Partial outage';
    color = 'text-yellow-500';
  }

  return { status, description, color };
};
