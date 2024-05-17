import Header from '@/components/Header';
import MainDashboards, {
  formattedLocationInfo
} from '@/components/locationsDashboard/MainDashboards';
import { Toaster } from '@/components/ui/sonner';
import { AsyncReturnType } from '@/types';
import { getData } from '@/utils/getData';
import { getLocationInfo } from '@/utils/getLocationInfo';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const data = await getData();
  const locations = Object.keys(data)

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

  return { locationInfo };
}

export default function Root() {
  const { locationInfo } = useLoaderData() as AsyncReturnType<typeof loader>;

  return (
    <div className="h-screen">
      <div className="space-y-3">
        <Header showBreadcrumbs={false} />
        <MainDashboards locationsInfo={locationInfo} />
        <Toaster />
      </div>
    </div>
  );
}
