import TableSkeleton from '@/components/skeletons/TableSkeleton';
import SourcesTable from '@/components/sources/SourcesTable';
import { ParsedSource } from '@/types/NetworkType';
import { getSourcesNames } from '@/utils/netwrokUtils';
import React, { ChangeEvent, useState } from 'react';
import {
  Await,
  defer,
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const { connection, network: networkKey } = params;
  invariant(connection, 'connection parameter is required');
  invariant(networkKey, 'network parameter is required');
  const sources = getSourcesNames(connection, networkKey.toLocaleLowerCase());

  return defer({
    connection,
    sources,
  });
}

export default function SecondSubDashboard() {
  const data = useLoaderData() as {
    connection: string;
    sources: Promise<ParsedSource[]>;
  };
  const { sources, connection } = data;
  const [search, setSearch] = useState('');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  return (
    <div className="flex justify-center gap-4 overflow-hidden p-9">
      <React.Suspense fallback={<TableSkeleton />}>
        <Await resolve={sources} errorElement={<p>Error!</p>}>
          {(resolvedSources: ParsedSource[]) => (
            <SourcesTable
              data={resolvedSources}
              connection={connection}
              handleInputChange={handleInputChange}
              search={search}
            />
          )}
        </Await>
      </React.Suspense>
    </div>
  );
}
