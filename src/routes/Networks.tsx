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
  const [search, setSearch] = useState('');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }
  
  return (
    <div className="flex justify-center gap-4 overflow-hidden p-9">
      <NetworksTable
        data={networks}
        connection={connection}
        handleInputChange={handleInputChange}
        search={search}
      />
    </div>
  );
}
