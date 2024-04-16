import Header from '@/components/Header';
import MainDashboards from '@/components/mainDashboard/MainDashboards';

export default function Root() {
  return (
    <div className="h-screen overflow-hidden">
      <div className="space-y-4">
        <Header showBreadcrumbs={false} />
        <MainDashboards />
      </div>
    </div>
  );
}
