import MainDashboards, {
  formattedLocationInfo,
} from '@/components/locationsDashboard/MainDashboards';
import MainDashboardsSkeleton from '@/components/skeletons/MainDashboardsSkeleton';
import { Toaster } from '@/components/ui/sonner';
import ErrorPage from '@/error-page';
import { ContextType } from '@/types/contextType';
import { getLocationInfo } from '@/utils/getLocationInfo';
import { Suspense } from 'react';
import { Await, defer, useOutletContext } from 'react-router-dom';

export default function Root() {
  const { data } = useOutletContext<ContextType>();
  async function getLocationInfoAsync() {
    const locations = Object.keys(data);

    const locationInfo: formattedLocationInfo[] = locations.map((location) => {
      return {
        locationName: location,
        networksInfo: getLocationInfo({
          data,
          location,
          networkType: ['article', 'sn'],
          docInfoField: ['docs_count', 'docs_count_3_days', 'last_time'],
        }),
      };
    });

    return locationInfo;
  }

  const locationInfo = defer({ locationInfo: getLocationInfoAsync() });

  return (
    <>
      <Suspense fallback={<MainDashboardsSkeleton />}>
        {/* <Await resolve={locationInfo} errorElement={<ErrorPage />}>
          {(resolvedLocationInfo: formattedLocationInfo[]) => (
            <MainDashboards locationsInfo={resolvedLocationInfo} />
          )}
        </Await> */}
        <pre>{JSON.stringify(locationInfo, null, 2)}</pre>
      </Suspense>
      <Toaster />
    </>
  );
}
