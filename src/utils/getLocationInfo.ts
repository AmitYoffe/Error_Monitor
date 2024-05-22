import { Location } from '@/types/NetworkType';

type docInfoType = 'docs_count' | 'docs_count_3_days' | 'last_time';
type networkType = 'article' | 'sn';

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
      // Push the fields docs_count, docs_count_3_days, last_time into the json
      if (networkData[docInfo]) {
        networkInfoJson[docInfo] = networkData[docInfo] as string;
      }
    }
    locationInfo.push(networkInfoJson); // push the network info JSON into the locationInfo array
  }
  return locationInfo;
}
