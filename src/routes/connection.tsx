import { ConnectionLog, ConnectionTable } from '@/components/ConnectionTable';
import Status from '@/components/Status';
import { AsyncReturnType } from '@/types';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import uniqid from 'uniqid';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  const connectionLogs: ConnectionLog[] = [
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'no-connection',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'unstable',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
    {
      logid: uniqid('id-'),
      status: 'operational',
      time: new Date().toISOString(),
    },
  ];
  return { connection, connectionLogs };
}

export default function Connection() {
  const { connection, connectionLogs } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  return (
    <div className="h-screen p-4">
      <p className="text-center text-3xl">{connection}</p>
      <div className="container mt-32 flex justify-between">
        <div className="">
          <ConnectionTable ConnectionLogs={connectionLogs} />
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
