import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <div className="flex flex-col items-center absolute bottom-2 w-full">
      <Separator className="w-56" />
      <div className="text-center">
        © 2024 Error Monitor.
      </div>
    </div>
  )
}