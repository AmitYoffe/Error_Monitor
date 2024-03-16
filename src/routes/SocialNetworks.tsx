import { ModeToggle } from '@/components/mode-toggle';
import { InfoTable } from '@/components/subDashboard/InfoTable';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AsyncReturnType } from '@/types';
import { getLogs } from '@/utils';
import { Undo2 } from 'lucide-react';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  const connectionLogs = await getLogs();

  return { connection, connectionLogs };
}

export default function Connection() {
  const { connection, connectionLogs } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  const socialNetwrokHeaders = [
    'Social Network',
    'Last Time Recieved',
    'Info',
    'status',
  ];

  return (
    <div className="h-screen overflow-hidden p-8">
      <ModeToggle />
      <Link to="/" className="absolute left-2 top-2">
        <Undo2 />
      </Link>
      <Card className='container flex flex-col p-4'>
        <div className='flex items-start p-1 justify-between'>
          <div className='flex flex-col'>
            <h2 className="text-2xl font-bold tracking-tight">{connection}</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your social networks!
            </p>
          </div>
          <Input placeholder="search..." className='w-2/12 focus:w-3/12 transition-all duration-200 ease-in-out'></Input>
          {/*need to add something like this:
          value={search}
          onChange={handleInputChange} */}
        </div>
        <div className="flex flex-row gap-4">
          <InfoTable
            data={connectionLogs}
            headers={socialNetwrokHeaders}
            status={'no-connection'}
          />
        </div>
      </Card>
    </div>
  );
}