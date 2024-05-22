import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import NetworkChoiceSkeleton from './NetworkChoiceSkeleton';

export default function MainDashboardsSkeleton() {
  return (
    <>
      <CardHeader className="flex w-full items-center pt-0">
        <Skeleton className="h-20 w-20 rounded-full" />
        <CardTitle>Error Monitor</CardTitle>
        <CardDescription>Lead your quest to find the errors.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            className="h-4/5 min-w-[585px] flex-shrink-0 basis-1/2 p-2 md:basis-1/4"
          >
            <div className="flex flex-col items-center justify-between rounded-md border-2 p-4">
              <Skeleton className="mb-2 h-10 w-10 rounded-full" />
              <Skeleton className="h-2 w-16" />
            </div>
            <NetworkChoiceSkeleton />
            <NetworkChoiceSkeleton />
          </Card>
        ))}
      </CardContent>
    </>
  );
}
