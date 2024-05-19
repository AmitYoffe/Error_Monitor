import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CircleIcon } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Separator } from '@/components/ui/separator';

interface TrafficDialogProps extends PropsWithChildren {
  category: string;
  icon: React.ReactNode;
  tools: string[];
}

export default function TrafficDialog({
  category,
  icon,
  children,
}: TrafficDialogProps) {
  return (
    // <div className="flex justify-center">
    //   <Dialog>
    //     <DialogTrigger asChild>
    //       <Button variant="outline" className='flex flex-col h-full'>
    // <div className='flex'>
    //   <div>
    //     {icon}
    //   </div>
    //   <Separator orientation="vertical" className="mr-2" />
    //   <span>
    //     {category}
    //   </span>
    // </div>
    //         <Separator className="my-1" />
    //         <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-800">
    //           <span className="inline-flex w-6 h-6 bg-green-400 rounded-full" />
    //         </div>
    //       </Button>
    //     </DialogTrigger>
    //     <DialogContent className="gap-0 sm:max-w-md">
    //       <div className="flex justify-start">
    //         {icon}
    //         <Separator orientation="vertical" className="mr-3" />
    //         <DialogTitle className="my-auto">{category}</DialogTitle>
    //       </div>
    //       <DialogFooter className="mx-4 flex flex-col sm:justify-start">
    //         {children}
    //       </DialogFooter>
    //     </DialogContent>
    //   </Dialog>
    // </div>

    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950 cursor-pointer w-64">
          <div className="flex items-center gap-4">
            <CircleIcon className="h-6 w-6 text-yellow-500" />
            <div>
              <div className='flex'>
                <div>
                  {icon}
                </div>
                <Separator orientation="vertical" className="mr-2 h-5" />
                <span>
                  {category}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Partial outage</p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div>
            <div className='flex'>
              <div>
                {icon}
              </div>
              <Separator orientation="vertical" className="mr-3 h-5" />
              <DialogTitle>{`${category} Status`}</DialogTitle>
            </div>
          </div>
          <DialogDescription>Here are the statuses of different routes inside Website {category}.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <CircleIcon className="h-6 w-6 text-yellow-500" />
              <div>
                <h3 className="font-medium">/</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Partial outage</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <CircleIcon className="h-6 w-6 text-green-500" />
              <div>
                <h3 className="font-medium">/about</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">All systems operational</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg dark:bg-gray-950">
            <div className="flex items-center gap-4">
              <CircleIcon className="h-6 w-6 text-red-500" />
              <div>
                <h3 className="font-medium">/contact</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Down for maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Todo:
// 1) Prettify the dialog
// 2) Add some sort of Status indication in the parent component
// 3) Find a way to add the big traffic cone somewhere near the other trafficCones.
// (i was thinking of adding the big one on the top left and moving the duck to the right...)
