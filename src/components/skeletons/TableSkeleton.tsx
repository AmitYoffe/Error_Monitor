import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export default function TableSkeleton() {
  // Create an array with 10 undefined elements
  const skeletonRows = Array.from({ length: 10 });

  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2 mt-8">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <div className="flex">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="ml-5 mt-3 h-5 w-56" />
          </div>
          <Skeleton className="mt-2 h-2 w-64" />
        </div>
        <Skeleton className="mt-6 h-8 w-56" />
      </div>
      <Table className="border-t-2">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Skeleton className="h-4 w-28" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-32" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-24" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 w-28" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-18 h-4" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skeletonRows.map((_, rowIndex) => (
            <TableRow key={rowIndex} className="h-16">
              <TableCell>
                <Skeleton className="h-2 w-28" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2 w-64" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2 w-24" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2 w-72" />
              </TableCell>
              <TableCell>
                <Skeleton className="h-2 w-20" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
