import { ModeToggle } from '@/components/mode-toggle';
import { InfoTable } from '@/components/subDashboard/InfoTable';
import { AsyncReturnType } from '@/types';
import { getLogs } from '@/utils';
import { Undo2 } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
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

  const socialNetwrokHeaders = [
    'Social Network',
    'Last Time Recieved',
    'Info',
    'status',
  ];

  const [search, setSearch] = useState('');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  const filteredItems = connectionLogs.filter(
    (connectionLog) =>
      connectionLog.name && connectionLog.name.includes(search.trim()),
  );

  return (
    <div className="h-screen overflow-hidden p-8">
      <ModeToggle />
      <Link to="/" className="absolute left-2 top-2">
        <Undo2 />
      </Link>
      <div className="flex flex-row gap-4">
        <InfoTable
          data={filteredItems}
          headers={socialNetwrokHeaders}
          status={'no-connection'}
          connection={connection}
          handleInputChange={handleInputChange}
          search={search}
        />
      </div>
    </div>
  );
}
