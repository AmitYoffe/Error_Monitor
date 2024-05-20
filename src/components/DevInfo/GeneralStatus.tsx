import { getOverallStatus } from '@/utils/getStatusDetails';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { ToolsCollectionJson } from './TrafficLightsDisplay'; // Ensure the path is correct

interface IGeneralStatus {
  toolsCollectionJson: ToolsCollectionJson;
}

export default function GeneralStatus({ toolsCollectionJson }: IGeneralStatus) {
  const { status, description } = getOverallStatus(toolsCollectionJson);

  const iconProps = {
    operational: { icon: CheckCircle2, color: 'text-green-500' },
    unstable: { icon: AlertTriangle, color: 'text-yellow-500' },
    'no-connection': { icon: XCircle, color: 'text-red-500' },
  };

  const { icon: Icon } = iconProps[status];

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg transition duration-150 ease-in-out hover:scale-110 dark:bg-gray-950 ${color}">
        <Icon className="h-16 w-16" />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{description}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {description === 'All Systems Operational'
            ? 'Your functions are up and running smoothly.'
            : 'Some functions may be experiencing issues.'}
        </p>
      </div>
    </div>
  );
}
