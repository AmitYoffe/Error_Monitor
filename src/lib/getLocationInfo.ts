import { Location } from '@/types/NetworkType';

type docInfoType = 'docs_count' | 'docs_count_3_days' | 'last_time';
type networkType = 'article' | 'sn';

// interface getDashboardInfo {
//   location: string;
//   networkType: networkType;
//   docInfoField: docInfoType;
// }

// export async function getDashboardInfo({
//   location,
//   networkType,
//   docInfoField,
// }: getDashboardInfo) {
//   // Get all the info from the db
//   const locationsInfo = await getData();
//   const locationKey = location.toLocaleLowerCase();

//   // Generic field allocation according to the given arguments
//   const networkDocsInfo: string | number =
//     locationsInfo[locationKey][networkType]![docInfoField];

//   if (
//     !networkDocsInfo ||
//     !location ||
//     !locationsInfo[locationKey][networkType]
//   ) {
//     throw new Error(
//       `Networks data for location '${location}' and network type '${networkType}' not found.`,
//     );
//   }

//   return networkDocsInfo;
// }

export type getLocationInfoType = Partial<Record<docInfoType, string>> & { networkType: networkType }

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
}): getLocationInfoType[] {
  // Get all the info from the db
  const locationKey = location.toLocaleLowerCase();
  const locationInfo: getLocationInfoType[] = []
  const locationNetworkDocsInfo =
    data[locationKey];

  for (const network of networkType) {
    const networkInfoJson: getLocationInfoType = { networkType: network };
    const networkData = locationNetworkDocsInfo[network];

    if (!networkData) continue; // move to next iteration if networkData is undefined

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