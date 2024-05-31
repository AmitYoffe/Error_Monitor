import { NetworksTable } from '@/components/networks/NetworksTable';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import ErrorPage from '@/error-page';
import { ContextType } from '@/types/contextType';
import { ParsedNetwrokInfo } from '@/types/networkType';
import { extarctSocialNetworkNames } from '@/utils/netwrokUtils';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import invariant from 'tiny-invariant';

export default function Connection() {
  const { pathname } = useLocation();
  invariant(pathname, 'pathname parameter is required');
  const pathnames = pathname.split('/').filter((x) => x);
  const currentLocation = pathnames[0];

  const { data } = useOutletContext<ContextType>();

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [networks, setNetworks] = useState<ParsedNetwrokInfo[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await extarctSocialNetworkNames(currentLocation, data);
        setNetworks(result);
      } catch (error) {
        setError('Error fetching social networks');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentLocation, data]);

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  return (
    <div className="mt-8 flex justify-center gap-4 overflow-hidden p-9">
      <Suspense fallback={<TableSkeleton />}>
        {isLoading ? (
          <TableSkeleton />
        ) : error ? (
          <ErrorPage />
        ) : (
          <NetworksTable
            data={networks || []}
            connection={currentLocation}
            handleInputChange={handleInputChange}
            search={search}
          />
        )}
        {/* <Await resolve={networks} errorElement={<ErrorPage />}>
          {(resolvedNetworks: ParsedNetwrokInfo[]) => (
            <NetworksTable
              data={resolvedNetworks} // Ensure data is an array, even if null
              connection={currentLocation}
              handleInputChange={handleInputChange}
              search={search}
            />
          )}
        </Await> */}
      </Suspense>
    </div>
  );
}
