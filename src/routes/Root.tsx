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
  const data = getData();
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

  return defer({ locationInfo });
}

export default function Root() {
  const { locationInfo } = useLoaderData() as {
    locationInfo: Promise<formattedLocationInfo[]>;
  };

  return (
    // <>
    //   <Suspense fallback={<DashboardChoiceSkeleton />}>
    //     <Await resolve={locationInfo} errorElement={<ErrorPage />}>
    //       {(resolvedLocationInfo: formattedLocationInfo[]) => (
    //         <MainDashboards locationsInfo={resolvedLocationInfo} />
    //       )}
    //     </Await>
    //   </Suspense>
    //   <Toaster />
    // </>
    <MainDashboardsSkeleton />
  );
}

// Todo: make this work when the site is up
