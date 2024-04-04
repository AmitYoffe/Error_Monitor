import BreadCrumbs from '@/components/BreadCrumbs';
import { ModeToggle } from '@/components/mode-toggle';
import { NetworksTable } from '@/components/subDashboard/NetworksTable';
import { getNetworkNames } from '@/lib/netwrokUtils';
import { AsyncReturnType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  invariant(connection, 'connection parameter is required');
  const networks = await getNetworkNames();
  // console.log(networks);
  return { connection, networks };
}

export default function Connection() {
  const { connection, networks } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  const agenciesHeaders = [
    'Agency',
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
    <div className="h-screen overflow-hidden p-9">
      <ModeToggle />
      <BreadCrumbs />
      <NetworksTable
        data={networks}
        headers={agenciesHeaders}
        connection={connection}
        search={search}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
