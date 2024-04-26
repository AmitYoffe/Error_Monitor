import SourcesTable from '@/components/secondSubDashboard/SourcesTable';
import { getSourcesNames } from '@/lib/netwrokUtils';
import { AsyncReturnType } from '@/types';
import { ChangeEvent, useState } from 'react';
import { LoaderFunctionArgs, useLoaderData, useLocation } from 'react-router-dom';
import invariant from 'tiny-invariant';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  invariant(connection, 'connection parameter is required');

  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  // get the last part of the current user's URL, when standing on the sources page, it's value would be the current network.
  const networkKey = pathnames.slice(-1)[0].toLocaleLowerCase();
  const sources = await getSourcesNames(connection, networkKey);

  return { connection, sources };
}

export default function SecondSubDashboard() {
  const { sources } = useLoaderData() as AsyncReturnType<typeof loader>;
  console.log(sources);
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
