import BreadCrumbs from '@/components/BreadCrumbs';
import { ModeToggle } from '@/components/mode-toggle';
import { NetworksTable } from '@/components/subDashboard/NetworksTable';
import { getSocialNetworksNames } from '@/lib/netwrokUtils';
import { AsyncReturnType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  invariant(connection, 'connection parameter is required');

  const networks = await getSocialNetworksNames(connection);
  return { connection, networks };
}

export default function Connection() {
  const { connection, networks } = useLoaderData() as AsyncReturnType<
    typeof loader
  >;

  const socialNetwrokHeaders = [
    'Social Network',
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
      <div className="flex flex-row gap-4">
        <NetworksTable
          data={networks}
          headers={socialNetwrokHeaders}
          connection={connection}
          handleInputChange={handleInputChange}
          search={search}
        />
      </div>
    </div>
  );
}
