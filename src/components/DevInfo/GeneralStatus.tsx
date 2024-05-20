import { CheckCircle2 } from 'lucide-react';

interface IGeneralStatus {}

export default function GeneralStatus({}: IGeneralStatus) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg transition duration-150 ease-in-out hover:scale-110 dark:bg-gray-950">
        <CheckCircle2 className="h-16 w-16 text-green-500" />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">All Systems Operational</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Your functions are up and running smoothly.
        </p>
      </div>
    </div>
  );
}
