import MainDashboards from '@/components/locationsDashboard/MainDashboards';
import MainDashboardsSkeleton from '@/components/skeletons/MainDashboardsSkeleton';
import { Toaster } from '@/components/ui/sonner';
import ErrorPage from '@/error-page';
import { Location } from '@/types/networkType';
import { extractLocationInfoFromData } from '@/utils/getLocationInfo';
import { Suspense } from 'react';
import { Await, useOutletContext } from 'react-router-dom';

export default function Root() {
  const { dataPromise } = useOutletContext() as {
    dataPromise: Promise<Location>;
  };

  return (
    <>
      <Suspense fallback={<MainDashboardsSkeleton />}>
        <Await resolve={dataPromise} errorElement={<ErrorPage />}>
          {(resolvedLocationInfo: Location) => (
            <MainDashboards
              locationsInfo={extractLocationInfoFromData({
                data: resolvedLocationInfo,
              })}
            />
          )}
        </Await>
      </Suspense>
      <Toaster />
    </>
  );
}
