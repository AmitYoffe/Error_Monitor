import BreadCrumbs from '@/components/BreadCrumbs';
import { ModeToggle } from '@/components/mode-toggle';
import { InfoTable } from '@/components/subDashboard/InfoTable';
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

export default function Connection() {
  const { connection, connectionLogs } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  const agenciesHeaders = ['Agency', 'Last Time Recieved', 'Info', 'status'];
  const [search, setSearch] = useState('');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  return (
    <div className="h-screen overflow-hidden p-8">
      <ModeToggle />
      <BreadCrumbs />
      <InfoTable
        data={connectionLogs}
        headers={agenciesHeaders}
        connection={connection}
        search={search}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
