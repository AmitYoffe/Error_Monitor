import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

interface generalStatusProps {
  systemsInfo: {
    total_system_color: 'green' | 'yellow' | 'red';
    high_level_apps: Record<string, unknown>;
    data_graphs: Record<string, unknown>;
  };
}

export default function GeneralStatus({ systemsInfo }: generalStatusProps) {
  const { total_system_color } = systemsInfo;

  const statusMap = {
    green: {
      icon: CheckCircle2,
      color: 'text-green-500',
      description: 'All Systems Operational',
    },
    yellow: {
      icon: AlertTriangle,
      color: 'text-yellow-500',
      description: 'Systems Unstable',
    },
    red: {
      icon: XCircle,
      color: 'text-red-500',
      description: 'No Connection',
    },
  };

  const { icon: Icon, color, description } = statusMap[total_system_color];

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div
        className={`flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg transition duration-150 ease-in-out hover:scale-110 dark:bg-gray-950 ${color}`}
      >
        <Icon className="h-16 w-16" />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{description}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {description === statusMap.green.description
            ? 'Your functions are up and running smoothly.'
            : 'Some functions may be experiencing issues.'}
        </p>
      </div>
    </div>
  );
}
