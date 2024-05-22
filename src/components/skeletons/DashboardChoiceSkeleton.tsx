import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import NetworkChoiceSkeleton from './NetworkChoiceSkeleton';

export default function DashboardChoiceSkeleton() {
  return (
    <div className="h-4/5 min-w-[585px] flex-shrink-0 basis-1/2 md:basis-1/4">
      <Card className="flex-col p-2">
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4">
          <Skeleton className="mb-2 h-10 w-10 rounded-full" />
          <Skeleton className="h-2 w-10" />
        </p>
        <NetworkChoiceSkeleton   />
        <NetworkChoiceSkeleton   />
      </Card>
    </div>
  );
}

// Todo: skeleton for dashboard choice when loading the "/" route
