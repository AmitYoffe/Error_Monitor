import { InfoTable } from '@/components/subDashboard/InfoTable';
import Status from '@/components/subDashboard/Status';
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

  const agenciesHeaders = ['Agency', 'Last Time Recieved', 'Info'];
  const socialNetwrokHeaders = ['Social Network', 'Last Time Recieved', 'Info'];

  return (
    <div className="h-screen p-4">
      <Link to="/" className="absolute left-1 top-1">
        <Undo2 />
      </Link>
      <p className="text-center text-3xl">{connection}</p>
      <div className="container mt-12 flex justify-between">
        <div className="flex flex-row gap-4">
          <InfoTable data={connectionLogs} headers={agenciesHeaders} />
          <InfoTable data={connectionLogs} headers={socialNetwrokHeaders} />
        </div>
        <div className="space-y-4">
          <Status name="Facebook" status="operational" />
          <Status name="Twitter" status="unstable" />
          <Status name="Youtube" status="operational" />
        </div>
      </div>
    </div>
  );
}
