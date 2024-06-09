import { Card, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function NetworkChoiceSkeleton() {
  return (
    <Card className="flex-col p-2 hover:bg-secondary active:border-primary">
      <CardTitle className="my-2 p-2">
        <Skeleton className="m-auto h-5 w-36" />
      </CardTitle>
      <div className="mx-12 flex justify-between py-1">
        <Skeleton className="my-auto h-[9px] w-32" />
        <Skeleton className="my-auto h-[9px] w-[170px]" />
      </div>
      <div className="mx-12 flex justify-between py-1">
        <Skeleton className="my-auto h-[9px] w-48" />
        <Skeleton className="my-auto h-[9px] w-[110px]" />
      </div>
    </Card>
  );
}
