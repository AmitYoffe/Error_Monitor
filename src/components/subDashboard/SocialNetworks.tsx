import { InfoTable } from '@/components/subDashboard/InfoTable';
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
    <div className="h-screen overflow-y-hidden p-4">
      <Link to="/" className="absolute left-1 top-1">
        <Undo2 />
      </Link>
      <p className="text-center text-3xl">{connection}</p>
      <div className="container mt-12 flex justify-between">
        <div className="flex flex-row gap-4">
          <InfoTable
            data={connectionLogs}
            headers={socialNetwrokHeaders}
            status={'no-connection'}
          />
        </div>
      </div>
    </div>
  );
}
