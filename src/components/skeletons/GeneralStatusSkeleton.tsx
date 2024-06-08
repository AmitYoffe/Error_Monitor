import { Skeleton } from '../ui/skeleton';

export default function GeneralStatusSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-950 duration-150 ease-in-out hover:scale-110">
        <Skeleton className="h-16 w-16 rounded-full" />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-72" />
        <Skeleton className="m-auto h-3 w-48" />
      </div>
    </div>
  );
}
