import { ModeToggle } from '@/components/mode-toggle';
import { InfoTable } from '@/components/subDashboard/InfoTable';
import { AsyncReturnType } from '@/types';
import { getLogs } from '@/utils';
import { Undo2 } from 'lucide-react';
import { Link, LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  invariant(connection, 'connection parameter is required');
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
      <InfoTable
        data={connectionLogs}
        headers={agenciesHeaders}
        status={'operational'}
        connection={connection}
      />
    </div>
  );
}
