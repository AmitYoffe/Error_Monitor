import { capitalizeWord } from '@/utils/capitalizeWord';
import { locationInfoType } from '@/utils/getLocationInfo';
import { Card } from '../ui/card';
import NetworkChoice from './NetworkChoice';

export interface IDashboardChoice {
  iconSrc: string;
  locationName: string;
  networksInfo: locationInfoType[];
}

export default function DashboardChoice({
  iconSrc,
  locationName,
  networksInfo,
}: IDashboardChoice) {
  // States used to track hovering of certain areas of the component
  // const [locationHovered, setLocationHovered] = useState(false);

  // Todo: extract to function
  // const statusVisualizer: Record<StatusType, string> = {
  //   operational: '#22c55e',
  //   unstable: '#f59e0b',
  //   'no-connection': '#ef4444',
  // };
  // let statusIndicatorColor = '#22c55e';

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

  // Ensure that the networksInfo array always contains 2 items
  const snInfo = networksInfo.find((info) => info.networkType === 'sn');
  const articleInfo = networksInfo.find(
    (info) => info.networkType === 'article',
  );

  return (
    <div className="h-4/5 min-w-[585px] flex-shrink-0 basis-1/2 md:basis-1/4">
      <Card
        className="flex-col p-2"
        // style={{
        //   border: locationHovered
        //     ? `1px solid ${statusIndicatorColor}`
        //     : undefined,
        // }}
        // onMouseOver={() => setLocationHovered(true)}
        // onMouseOut={() => setLocationHovered(false)}
      >
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4">
          <img src={iconSrc} alt={`${location} png`} className="mb-2 h-8 w-8" />
          {capitalizeWord(locationName)}
        </p>
        {/* if the data doesn't exist in the db then bring an empty json for that missing object*/}
        <NetworkChoice
          location={locationName}
          networkInfo={snInfo || { networkType: 'sn' }}
        />
        <NetworkChoice
          location={locationName}
          networkInfo={articleInfo || { networkType: 'article' }}
        />
      </Card>
    </div>
  );
}

//Todo: Add some logic that will cause the parent dashboard statuses actually update
