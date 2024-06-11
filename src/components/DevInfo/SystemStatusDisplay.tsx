import { SystemsInfo } from '@/utils/getSystemsInfo';
import GeneralStatus from './GeneralStatus';
import getSystemIcon from '@/utils/getSystemIcon';
import SystemDialog from './SystemDialog';

interface SystemStatusDisplayProps {
  systemsInfo: SystemsInfo;
}

export default function SystemStatusDisplay({
  systemsInfo,
}: SystemStatusDisplayProps) {
  return (
    <div className="mt-4 flex items-center justify-center gap-24 bg-secondary py-24">
      <GeneralStatus systemsInfo={systemsInfo} />
      <div className="flex flex-col items-center justify-center gap-6">
        {Object.entries(systemsInfo.high_level_apps).map(
          ([category, { apps }]) => (
            <SystemDialog
              key={category}
              category={category}
              icon={getSystemIcon(category)}
              tools={apps}
            />
          ),
        )}
      </div>
    </div>
  );
}
