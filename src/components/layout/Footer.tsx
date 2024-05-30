import moment from "moment";
import { Separator } from "../ui/separator";

export default function Footer() {
  const currentYear = `${moment().year()}`

  return (
    <div className="flex flex-col items-center absolute bottom-2 w-full z-[-1]">
      <Separator className="w-56" />
      <div className="text-center">
        © {currentYear} Error Monitor.
      </div>
    </div>
  )
}