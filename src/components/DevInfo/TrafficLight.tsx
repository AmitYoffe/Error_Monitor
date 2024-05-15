import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card } from '../ui/card';
import StatusIndication from './StatusIndication';

interface ITrafficLight {
  name: string;
  children: React.ReactNode;
  // status color
  // error description
}

export default function TrafficLight({ name, children }: ITrafficLight) {
  return (
    <Card className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{name}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:justify-start">
            {children}
            {/* <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose> */}
            {/* <StatusIndication status={'operational'} name={'intuview'} /> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

// Todo:
// 1) Prettify the dialog
// 2) Add some sort of StatusIndication
// 3) Find a way to add the big traffic cone somewhere near the other trafficCones.
// 4) Add the footer
// (i was thinking of adding the big one on the top left and moving the duck to the right...)