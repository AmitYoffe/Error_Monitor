import { CardHeader } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import DuckOutlineSkeleton from './DuckOutlineSkeleton';
import GeneralStatusSkeleton from './GeneralStatusSkeleton';
import SystemListSkeleton from './SystemListSkeleton';

export default function DeveloperInfoSkeleton() {
  return (
    <div>
      <CardHeader className="flex w-full items-center pt-8">
        <DuckOutlineSkeleton />
        <Skeleton className="h-4 w-48" />
        <Skeleton className="h-2 w-56" />
      </CardHeader>
      <div className="mt-4 flex items-center justify-center gap-24 bg-secondary py-24">
        <GeneralStatusSkeleton />
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Reapeat the "SystemListSkeleton" component 4 times */}
          {Array.from({ length: 4 }).map((_, index) => (
            <SystemListSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
