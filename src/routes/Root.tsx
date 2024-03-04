import MainDashboards from '@/components/mainDashboard/MainDashboards';
import { ModeToggle } from '@/components/mode-toggle';

export default function Root() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="absolute right-1 top-1">
        <ModeToggle />
      </div>
      <div className="mt-2 space-y-4">
        <MainDashboards />
      </div>
    </div>
  );
}

//TODO: Add a beautiful scrollbar