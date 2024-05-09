import { NetworksTable } from '@/components/networks/NetworksTable';
import { getAgencyNames } from '@/utils/netwrokUtils';
import { AsyncReturnType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  invariant(connection, 'connection parameter is required');

  const networks = await getAgencyNames(connection);
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
    <div className="h-screen overflow-hidden p-9">
      <NetworksTable
        data={networks}
        connection={connection}
        search={search}
        handleInputChange={handleInputChange}
      />
    </div>
  );
}
