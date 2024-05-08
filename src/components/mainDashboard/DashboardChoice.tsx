import { getLocationInfoType } from '@/lib/getLocationInfo';
import { StatusType } from '@/types/dashboardTypes';
import { useState } from 'react';
import { Card } from '../ui/card';
import {  } from './MainDashboards';
import NetworkChoice from './NetworkChoice';
import { capitalizeWord } from '@/lib/capitalizeWord';

export interface IDashboardChoice {
  iconSrc: string;
  locationName: LocationName;
  networksInfo: getLocationInfoType[];
}
export default function DashboardChoice({
  iconSrc,
  locationName,
  networksInfo,
  // This will be turned into an array i will map
  // SocialNetworks,
  // Agencies,
}: IDashboardChoice) {
  // States used to track hovering of certain areas of the component
  const [locationHovered, setLocationHovered] = useState(false);

  // Todo: extract to function
  const statusVisualizer: Record<StatusType, string> = {
    operational: '#22c55e',
    unstable: '#f59e0b',
    'no-connection': '#ef4444',
  };
  let statusIndicatorColor = '#22c55e';

  // if (
  //   Agencies?.status === 'no-connection' ||
  //   SocialNetworks?.status === 'no-connection'
  // ) {
  //   statusIndicatorColor = statusVisualizer['no-connection'];
  // } else if (
  //   Agencies?.status === 'unstable' ||
  //   SocialNetworks?.status === 'unstable'
  // ) {
  //   statusIndicatorColor = statusVisualizer['unstable'];
  // }

  return (
    <div className="h-4/5">
      <Card
        className="flex-col p-2"
        style={{
          border: locationHovered
            ? `1px solid ${statusIndicatorColor}`
            : undefined,
        }}
        onMouseOver={() => setLocationHovered(true)}
        onMouseOut={() => setLocationHovered(false)}
      >
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4">
          <img src={iconSrc} alt={`${location} png`} className="mb-3 h-6 w-6" />
          {locationName}
        </p>
        {networksInfo.map((networkInfo) => (
          <NetworkChoice
            location={capitalizeWord(locationName)}
            networkInfo={networkInfo}
            // statusColor={statusVisualizer[SocialNetworks!.status]}
            // Todo: they should have each their own status
            statusColor={statusVisualizer['unstable']}
          />
        ))}
      </Card>
    </div>
  );
}

//TODO: Add some logic that will cause the parent dashboard statuses actually update according to the logs status values
