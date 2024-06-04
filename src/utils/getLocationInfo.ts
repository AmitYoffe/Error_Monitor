import { formattedLocationInfo } from '@/components/locationsDashboard/MainDashboards';
import { Location, Network } from '@/types/networkType';

type networkType = 'article' | 'sn';
type docInfoType = keyof Omit<Network, 'networks'>;
// | 'docs_count'
// | 'docs_count_3_days'
// | 'last_time'
// | 'timestamp';

export type locationInfoType = Partial<Record<docInfoType, string>> & {
  networkType: networkType;
};

export function getLocationInfo({
  data,
  location,
  networkType,
  docInfoField,
}: {
  data: Location;
  location: string;
  networkType: networkType[];
  docInfoField: docInfoType[];
}): locationInfoType[] {
  // Get all the info from the db
  const locationKey = location.toLocaleLowerCase();
  const locationInfo: locationInfoType[] = [];
  const locationNetworkDocsInfo = data[locationKey];

  for (const network of networkType) {
    const networkInfoJson: locationInfoType = { networkType: network };
    const networkData = locationNetworkDocsInfo[network];

    // move to next iteration if networkData is undefined
    if (!networkData) continue;

    for (const docInfo of docInfoField) {
      if (networkData[docInfo] || networkData[docInfo] !== undefined) {
        networkInfoJson[docInfo] = networkData[docInfo] as string;
      }
    }
    locationInfo.push(networkInfoJson); // push the network info JSON into the locationInfo array
  }

  return locationInfo;
}

export function extractLocationInfoFromData({ data }: { data: Location }) {
  const locations = Object.keys(data);
  const locationInfo: formattedLocationInfo[] = locations.map((location) => {
    return {
      locationName: location,
      networksInfo: getLocationInfo({
        data,
        location,
        networkType: ['article', 'sn'],
        docInfoField: [
          'docs_count',
          'docs_count_3_days',
          'last_time',
          'timestamp',
        ],
      }),
    };
  });

  return locationInfo;
}
