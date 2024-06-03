import { NetworksTable } from '@/components/networks/NetworksTable';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import ErrorPage from '@/error-page';
import { Location, ParsedNetwrokInfo } from '@/types/networkType';
import { extractAgencyNames } from '@/utils/netwrokUtils';
import { ChangeEvent, Suspense, useState } from 'react';
import { Await, useLocation, useOutletContext } from 'react-router-dom';
import invariant from 'tiny-invariant';

export default function Connection() {
  const [search, setSearch] = useState('');
  const { dataPromise } = useOutletContext() as {
    dataPromise: Promise<Location>;
  };

  const { pathname } = useLocation();
  invariant(pathname, 'pathname parameter is required');
  const pathnames = pathname.split('/').filter((x) => x);
  const formattedCurrentLocation = pathnames[0]?.split('%20').join(' ');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  return (
    <div className="h-screen overflow-hidden p-9">
      <Suspense fallback={<TableSkeleton />}>
        <Await
          resolve={dataPromise.then((resolvedAgencies) =>
            extractAgencyNames(formattedCurrentLocation, resolvedAgencies),
          )}
          errorElement={<ErrorPage />}
        >
          {(agenciesData: ParsedNetwrokInfo[]) => (
            <NetworksTable
              data={agenciesData}
              connection={formattedCurrentLocation}
              handleInputChange={handleInputChange}
              search={search}
            />
          )}
        </Await>
      </Suspense>
    </div>
  );
}
