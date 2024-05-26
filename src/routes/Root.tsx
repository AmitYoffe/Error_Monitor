import MainDashboards, {
  formattedLocationInfo,
} from '@/components/locationsDashboard/MainDashboards';
import MainDashboardsSkeleton from '@/components/skeletons/MainDashboardsSkeleton';
import { Toaster } from '@/components/ui/sonner';
import ErrorPage from '@/error-page';
import { getData } from '@/utils/getData';
import { getLocationInfo } from '@/utils/getLocationInfo';
import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';

export async function loader() {
  async function getLocationInfoAsync() {
    const data = await getData();
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

  return defer({ locationInfo: getLocationInfoAsync() });
}

export default function Root() {
  const { locationInfo } = useLoaderData() as {
    locationInfo: Promise<formattedLocationInfo[]>;
  };

  return (
    <>
      <Suspense fallback={<MainDashboardsSkeleton />}>
        <Await resolve={locationInfo} errorElement={<ErrorPage />}>
          {(resolvedLocationInfo: formattedLocationInfo[]) => (
            <MainDashboards locationsInfo={resolvedLocationInfo} />
          )}
        </Await>
      </Suspense>
      <Toaster />
    </>
  );
}
