import Header from '@/components/Header';
import MainDashboards, {
  formattedLocationInfo,
  LocationName,
} from '@/components/mainDashboard/MainDashboards';
import { getLocationInfo } from '@/lib/getLocationInfo';
import { getData } from '@/lib/getData';
import { AsyncReturnType } from '@/types';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
  const data = await getData();
  const locations: LocationName[] = [
    'Gaza Strip',
    'Lebanon',
    'West Bank',
    'Inter-Arab',
    // 'International',
  ];

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
    <div className="h-screen overflow-hidden">
      <div className="space-y-4">
        <Header showBreadcrumbs={false} />
        <MainDashboards locationsInfo={locationInfo} />
      </div>
    </div>
  );
}
