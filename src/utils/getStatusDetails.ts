import { StatusType, ToolsCollectionJson } from '@/types/statusType';

export const getCategoryStatusDetails = (tools: {
  [toolName: string]: StatusType;
}) => {
  let status: StatusType = 'operational';
  let description = 'Operational';
  let color = 'text-green-500';

  if (Object.values(tools).includes('no-connection')) {
    status = 'no-connection';
    description = 'No connection';
    color = 'text-red-500';
  } else if (Object.values(tools).includes('unstable')) {
    status = 'unstable';
    description = 'Partial outage';
    color = 'text-yellow-500';
  }

  return { status, description, color };
};

export const getOverallStatus = (toolsCollectionJson: ToolsCollectionJson) => {
  let status: StatusType = 'operational';
  let description = 'All Systems Operational';

  Object.values(toolsCollectionJson).forEach(({ tools }) => {
    if (Object.values(tools).includes('no-connection')) {
      status = 'no-connection';
      description = 'Some Systems are Down';
    } else if (
      Object.values(tools).includes('unstable') &&
      status !== 'no-connection'
    ) {
      status = 'unstable';
      description = 'Some Systems are Unstable';
    }
  });

  return { status, description };
};

//Todo: ideally use one function for all status indications, tools, their categories & the location dashboards