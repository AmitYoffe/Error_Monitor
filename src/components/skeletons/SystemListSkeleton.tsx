import { CircleIcon } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Skeleton } from '../ui/skeleton';

export default function SystemListSkeleton() {
  return (
    <div className="flex w-72 items-center gap-4 rounded-lg bg-white p-4 shadow-lg duration-150 ease-in-out hover:scale-110 dark:bg-gray-950">
      <CircleIcon className="h-6 w-6" />
      <div className='flex flex-col gap-1'>
        <Skeleton className="h-2 w-24" />
        <Skeleton className="h-1 w-16" />
      </div>
      <Separator orientation="vertical" className="ml-auto h-10" />
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  );
}
