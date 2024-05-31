import { ParsedNetwrokInfo, ParsedSource } from '@/types/networkType';
import { getData } from './getData';
import { Location } from '@/types/networkType';

export async function getAgencyNames(location: string) {
  // Get all the info from the db
  const locationsInfo = await getData();
  const locationKey = location.toLocaleLowerCase();
  // The object inside of the locationsInfo object where it's field matches the 'location' value
  const networkJson = locationsInfo[locationKey].article?.networks;
  if (!networkJson || !location || !locationsInfo) {
    throw new Error(
      `Agencies or "Articles" data for location '${location}' not found.`,
    );
  }
  // should take each object's key and add it to the object as a field, facebook {field1, field2, ...} => {facebok, field1, field2, ...}
  const networkJsonArray: ParsedNetwrokInfo[] = Object.entries(networkJson).map(
    ([key, value]) => {
      return { name: key, ...value };
    },
  );

  return networkJsonArray;
}

export async function extarctSocialNetworkNames(
  location: string,
  data: Promise<Location>,
) {
  // Get all the info from the db
  const locationsInfo = await data;
  const locationKey = location.toLocaleLowerCase();
  // The object inside of the locationsInfo object where it's field matches the 'location' value
  const networkJson = locationsInfo[locationKey].sn.networks;
  if (!networkJson || !location || !locationsInfo) {
    throw new Error(
      `Social networks data for location '${location}' not found.`,
    );
  }
  // should take each object's key and add it to the object as a field, facebook: {field1, field2, ...} => {name: facebok, field1, field2, ...}
  const networkJsonArray: ParsedNetwrokInfo[] = Object.entries(networkJson).map(
    ([key, value]) => {
      return { name: key, ...value };
    },
  );
  return networkJsonArray;
}

export async function extractSourcesNames(
  location: string,
  networkKey: string,
  data: Promise<Location>,
) {
  // Get all the info from the db
  const locationsInfo = await data;
  // The object inside of the locationsInfo object where it's field matches the 'location' value
  const locationKey = location.toLocaleLowerCase();
  // The object inside of a specific network object where it's field matches the 'network' value from the url
  const sourcesJson =
    locationsInfo[locationKey].sn.networks[networkKey].sources;
  if (!sourcesJson) {
    throw new Error(`Sources data for location '${location}' not found.`);
  }
  // takes each object's key and adds it to the object as a field,
  // someRandomKey: {field1, field2, ...} => {sourceID: someRandomKey, field1, field2, ...}
  const sourcesJsonArray: ParsedSource[] = Object.entries(sourcesJson).map(
    ([key, value]) => {
      return { sourceID: key, ...value };
    },
  );

  return sourcesJsonArray;
}
