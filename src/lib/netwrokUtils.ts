import { getLocationInfo } from './pseudo-db';
import { ParsedNetwrokInfo } from '@/types/NetworkType';

export async function getAgencyNames(location: string) {
  // Get all the info from the db
  const locationsInfo = await getLocationInfo();
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

export async function getSocialNetworksNames(location: string) {
  // Get all the info from the db
  const locationsInfo = await getLocationInfo();
  const locationKey = location.toLocaleLowerCase();
  // The object inside of the locationsInfo object where it's field matches the 'location' value
  const networkJson = locationsInfo[locationKey].sn.networks;
  if (!networkJson || !location || !locationsInfo) {
    throw new Error(
      `Social networks data for location '${location}' not found.`,
    );
  }
  // should take each object's key and add it to the object as a field, facebook {field1, field2, ...} => {name: facebok, field1, field2, ...}
  const networkJsonArray: ParsedNetwrokInfo[] = Object.entries(networkJson).map(
    ([key, value]) => {
      return { name: key, ...value };
    },
  );

  return networkJsonArray;
}

export async function getSourceNames(networkJsonArray: ParsedNetwrokInfo[]) {
  // Get the entity_names.entity_name for each source inside the object
  // "sources": {
  //   "242987073": {
  //     "docs_count": 18,
  //     "docs_count_3_days": 2,
  //     "last_time": "2024-04-17T22:29:32.000Z",
  //     "entity_names": [
  //       { "entity_name": "Tamim Al-Barghouti", "doc_count": 18 }
  //     ]
  //   },
  //   "705371761": {
  //     "docs_count": 5,
  //     "docs_count_3_days": 0,
  //     "last_time": "2024-03-31T12:51:24.000Z",
  //     "entity_names": [{ "entity_name": "جهاد العايش", "doc_count": 5 }]
  //   },
  // {...},
  // {...},
  // }
}