import { getLocationInfo } from './pseudo-db';

export async function getTotalDocs(location: string) {
  // Get all the info from the db
  const locationsInfo = await getLocationInfo();
  const locationKey = location.toLocaleLowerCase();
  // The docs_count field inside of the locationsInfo object where it's field matches the 'location' value
  const networkDocsCount: string | number =
    locationsInfo[locationKey].sn.docs_count;
  if (!networkDocsCount || !location || !locationsInfo) {
    throw new Error(
      `Social networks data for location '${location}' not found.`,
    );
  }

  return networkDocsCount;
}

export async function getDocs3DaysAgo(location: string) {
  // Get all the info from the db
  const locationsInfo = await getLocationInfo();
  const locationKey = location.toLocaleLowerCase();
  // The docs_count field inside of the locationsInfo object where it's field matches the 'location' value
  const network3DaysDocsCount: string | number =
    locationsInfo[locationKey].sn.docs_count_3_days;
  if (!network3DaysDocsCount || !location || !locationsInfo) {
    throw new Error(
      `Social networks data for location '${location}' not found.`,
    );
  }

  return network3DaysDocsCount;
}

// Todo: Make this function hella generic. Get the fields docs_count, docs_count_3_days,last_time as arguments
// and also if it's and agency / socialNetwork.
// This will let me edit the line: locationsInfo[locationKey].[sn or agency].(one of the fields);
// + handle "no information" handling
