import SourcesTable from '@/components/secondSubDashboard/SourcesTable';
import { getSourcesNames } from '@/lib/netwrokUtils';
import { AsyncReturnType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  // const connection = params.connection;
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
  const { sources } = useLoaderData() as AsyncReturnType<typeof loader>;
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
        handleInputChange={handleInputChange}
        search={search}
      />
    </div>
  );
}
