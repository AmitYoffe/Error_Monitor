import BreadCrumbs from '@/components/BreadCrumbs';
import { ModeToggle } from '@/components/mode-toggle';
import SourcesTable from '@/components/secondSubDashboard/SourcesTable';
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

function SecondSubDashboard() {
  const { networks } = useLoaderData() as AsyncReturnType<typeof loader>;

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
          data={networks}
          handleInputChange={handleInputChange}
          search={search}
        />
      </div>
    </>
  );
}

export default SecondSubDashboard;
