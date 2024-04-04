import BreadCrumbs from '@/components/BreadCrumbs';
import { ModeToggle } from '@/components/mode-toggle';
import SourcesTable from '@/components/secondSubDashboard/SourcesTable';
import { AsyncReturnType } from '@/types';
import { getLogs } from '@/utils';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  invariant(connection, 'connection parameter is required');
  const connectionLogs = await getLogs();

  return { connection, connectionLogs };
}

function SecondSubDashboard() {
  const { connection, connectionLogs } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  const sourcesHeaders = [
    'Source name',
    'Source ID',
    'Last Time Recieved',
    'Total Docs',
    'Docs From 3 Days Ago',
    // 'status',
  ];

  const [search, setSearch] = useState('');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  return (
    <>
      <BreadCrumbs />
      <ModeToggle />
      <div className="flex justify-center gap-4 overflow-hidden p-9">
        <SourcesTable
          data={connectionLogs}
          headers={sourcesHeaders}
          connection={connection}
          handleInputChange={handleInputChange}
          search={search}
        />
      </div>
    </>
  );
}

export default SecondSubDashboard;
