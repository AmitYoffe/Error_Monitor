import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { PropsWithChildren } from 'react';

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
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            {icon}
            {category}
          </Button>
        </DialogTrigger>
        <DialogContent className="gap-0 sm:max-w-md">
          <div className="flex justify-start">
            {icon}
            <Separator orientation="vertical" className="mr-3" />
            <DialogTitle className="my-auto">{category}</DialogTitle>
          </div>
          <DialogFooter className="mx-4 flex flex-col sm:justify-start">
            {children}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

// Todo:
// 1) Prettify the dialog
// 2) Add some sort of Status indication in the parent component
// 3) Find a way to add the big traffic cone somewhere near the other trafficCones.
// (i was thinking of adding the big one on the top left and moving the duck to the right...)
