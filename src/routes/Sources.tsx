import TableSkeleton from '@/components/skeletons/TableSkeleton';
import SourcesTable from '@/components/sources/SourcesTable';
import ErrorPage from '@/error-page';
import { ContextType } from '@/types/contextType';
import { ParsedSource } from '@/types/networkType';
import { extractSourcesNames } from '@/utils/netwrokUtils';
import { ChangeEvent, Suspense, useEffect, useState } from 'react';
import { useLocation, useOutletContext } from 'react-router-dom';
import invariant from 'tiny-invariant';

export default function Connection() {
  const { pathname } = useLocation();
  invariant(pathname, 'pathname parameter is required');
  const pathnames = pathname.split('/').filter((x) => x);
  const currentLocation = pathnames[0];
  invariant(currentLocation, 'currentLocation parameter is required');
  const networkKey = pathnames[2];
  invariant(networkKey, 'networkKey parameter is required');

  const { data } = useOutletContext<ContextType>();

  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sources, setSources] = useState<ParsedSource[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await extractSourcesNames(
          currentLocation,
          networkKey.toLocaleLowerCase(),
          data,
        );
        setSources(result);
      } catch (error) {
        setError('Error fetching social networks');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [currentLocation, data, networkKey]);

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
          <SourcesTable
            data={sources || []}
            connection={currentLocation}
            handleInputChange={handleInputChange}
            search={search}
          />
        )}
      </Suspense>
    </div>
  );
}
