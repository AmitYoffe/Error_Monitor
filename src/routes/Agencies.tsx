import { ModeToggle } from '@/components/mode-toggle';
import { InfoTable } from '@/components/subDashboard/InfoTable';
import { Card } from '@/components/ui/card';
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

  const agenciesHeaders = ['Agency', 'Last Time Recieved', 'Info', 'status'];

  return (
    <div className="h-screen overflow-hidden p-8">
      <ModeToggle />
      <Link to="/" className="absolute left-2 top-2">
        <Undo2 />
      </Link>
      <Card className='container flex flex-col p-4'>
        <div className='flex flex-col items-start p-1'>
          <h2 className="text-2xl font-bold tracking-tight">{connection}</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your agencies!
          </p>
        </div>
        <InfoTable
          data={connectionLogs}
          headers={agenciesHeaders}
          status={'operational'}
        />
      </Card>
    </div>
  );
}
