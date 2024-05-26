import { Skeleton } from '../ui/skeleton';

export default function DuckOutlineSkeleton() {
  return (
    <div className="flex flex-col items-center gap-1 p-1">
      <Skeleton className="mr-1 h-1 w-8" />
      <Skeleton className="mr-1 h-1 w-10" />
      <Skeleton className="h-1 w-12" />
      <Skeleton className="h-1 w-[52px]" />
      <div className="flex">
        <Skeleton className="h-1 w-12" />
        <Skeleton className="ml-1 mr-4 h-1 w-6" />
      </div>
      <Skeleton className="ml-2 h-1 w-[55px]" />
      <Skeleton className="ml-2 h-1 w-[58px]" />
      <Skeleton className="ml-2 h-1 w-[58px]" />
      <Skeleton className="ml-2 h-1 w-14" />
    </div>
  );
}
