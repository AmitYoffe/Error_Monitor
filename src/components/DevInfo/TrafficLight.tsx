import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { AlertCircle } from 'lucide-react';

interface ITrafficLight {
  toolsInfo
  name: string;
  children: React.ReactNode;
  // status color
  // error description
}

export default function TrafficLight({ tools }: ITrafficLight) {
  return (
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{tools.name}</Button>
        </DialogTrigger>
        <DialogContent className="gap-0 sm:max-w-md">
          <div className="flex justify-start">
            {tools.icon}
            <Separator orientation="vertical" className="mx-3" />
            <DialogTitle className="my-auto">{tools.name}</DialogTitle>
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
// 2) Add some sort of StatusIndication
// 3) Find a way to add the big traffic cone somewhere near the other trafficCones.
// (i was thinking of adding the big one on the top left and moving the duck to the right...)
