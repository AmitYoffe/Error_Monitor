import { getData } from './getData';

type docInfoType = 'docs_count' | 'docs_count_3_days' | 'last_time';
type networkType = 'article' | 'sn';

interface getDashboardInfo {
  location: string;
  networkType: networkType;
  docInfoField: docInfoType;
}

export async function getDashboardInfo({
  location,
  networkType,
  docInfoField,
}: getDashboardInfo) {
  // Get all the info from the db
  const locationsInfo = await getData();
  const locationKey = location.toLocaleLowerCase();

  // Generic field allocation according to the given arguments
  const networkDocsInfo: string | number =
    locationsInfo[locationKey][networkType]![docInfoField];

  if (
    !networkDocsInfo ||
    !location ||
    !locationsInfo[locationKey][networkType]
  ) {
    throw new Error(
      `Networks data for location '${location}' and network type '${networkType}' not found.`,
    );
  }

  return networkDocsInfo;
}
