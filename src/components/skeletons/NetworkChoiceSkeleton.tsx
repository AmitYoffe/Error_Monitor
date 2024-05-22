import { Card, CardDescription, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function NetworkChoiceSkeleton() {
  return (
    <Card className="flex-col p-2 hover:bg-secondary active:border-primary">
      <CardTitle className="p-2 text-center underline">
      <Skeleton className="m-auto h-5 w-36" />
      </CardTitle>
      <CardDescription className="mx-12 flex justify-between">
        Last Time Recieved:
        <Skeleton className="my-auto h-[9px] w-[170px]" />
      </CardDescription>
      <CardDescription className="mx-12 flex justify-between">
        Docs from 3 days ago:
        <Skeleton className="my-auto h-[9px] w-[110px]" />
      </CardDescription>
      <CardDescription className="mx-12 flex justify-between">
        Total Docs:
        <Skeleton className="my-auto h-[9px] w-[132px]" />
      </CardDescription>
    </Card>
  );
}
