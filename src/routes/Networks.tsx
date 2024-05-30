import { NetworksTable } from '@/components/networks/NetworksTable';
import TableSkeleton from '@/components/skeletons/TableSkeleton';
import ErrorPage from '@/error-page';
import { ParsedNetwrokInfo } from '@/types/networkType';
import { getSocialNetworksNames } from '@/utils/netwrokUtils';
import { ChangeEvent, Suspense, useState } from 'react';
import {
  Await,
  LoaderFunctionArgs,
  defer,
  useLoaderData,
  useOutletContext,
} from 'react-router-dom';
import invariant from 'tiny-invariant';

// export async function loader({ params }: LoaderFunctionArgs) {
//   const connection = params.connection;
//   invariant(connection, 'connection parameter is required');
//   const networks = getSocialNetworksNames(connection);

//   return defer({
//     connection,
//     networks,
//   });
// }

export default function Connection() {
  // const data = useLoaderData() as {
  //   connection: string;
  //   networks: Promise<ParsedNetwrokInfo[]>;
  // };
  // const { networks, connection } = data;
  const data = useOutletContext();

  const [search, setSearch] = useState('');

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setSearch(event.target.value);
  }

  return (
    <div className="flex justify-center gap-4 overflow-hidden p-9 mt-8">
      {JSON.stringify(data)}
      {/* <Suspense fallback={<TableSkeleton />}>
        <Await resolve={networks} errorElement={<ErrorPage />}>
          {(resolvedNetworks: ParsedNetwrokInfo[]) => (
            <NetworksTable
              data={resolvedNetworks}
              connection={connection}
              handleInputChange={handleInputChange}
              search={search}
            />
          )}
        </Await>
      </Suspense> */}
    </div>
  );
}
