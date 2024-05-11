import SourcesTable from '@/components/sources/SourcesTable';
import { getSourcesNames } from '@/utils/netwrokUtils';
import { AsyncReturnType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const { connection, network: networkKey } = params;
  invariant(connection, 'connection parameter is required');
  invariant(networkKey, 'network parameter is required');
  const sources = await getSourcesNames(
    connection,
    networkKey.toLocaleLowerCase(),
  );

  return { connection, sources };
}

export default function SecondSubDashboard() {
  const { sources, connection } = useLoaderData() as AsyncReturnType<
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
      <SourcesTable
        data={sources}
        connection={connection}
        handleInputChange={handleInputChange}
        search={search}
      />
    </div>
  );
}
