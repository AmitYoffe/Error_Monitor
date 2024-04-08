import DeveloperInfo from '@/components/DeveloperInfoIcon';
import MainDashboards from '@/components/mainDashboard/MainDashboards';
import { ModeToggle } from '@/components/mode-toggle';

export default function Root() {
  return (
    <div className="h-screen overflow-hidden">
      <ModeToggle />
      <DeveloperInfo />
      <div className="mt-2 space-y-4">
        <MainDashboards />
      </div>
    </div>
  );
}
