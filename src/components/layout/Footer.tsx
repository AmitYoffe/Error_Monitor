import moment from 'moment';
import { Separator } from '../ui/separator';

export default function Footer() {
  const currentYear = `${moment().year()}`;

  return (
    <div className="absolute bottom-2 z-[-1] flex w-full flex-col items-center max-[1680px]:hidden">
      <Separator className="w-56" />
      <div className="text-center">© {currentYear} Error Monitor.</div>
    </div>
  );
}
