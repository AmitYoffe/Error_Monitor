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
}

export default function TrafficLight({ name }: ITrafficLight) {
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
          <DialogFooter className="flex sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <StatusIndication status={'operational'} name={'intuview'} />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
