import { ParsedNetwrokInfo } from "@/types/NetworkType";
import { getNetworks } from "./pseudo-db";

export async function getAgencyNames(location: string) {
    const networks = await getNetworks();
    const networkJson = networks.articles[location.toLocaleLowerCase()].networks
    const networkJsonArray: ParsedNetwrokInfo[] = Object.entries(networkJson).map(([key, value]) => { return { name: key, ...value } })

    return networkJsonArray;
}

export async function getSocialNetworksNames(location: string): Promise<ParsedNetwrokInfo[]> {
    const networks = await getNetworks();
    const networkJson = networks.sn[location.toLocaleLowerCase()].networks
    const networkJsonArray: ParsedNetwrokInfo[] = Object.entries(networkJson).map(([key, value]) => { return { name: key, ...value } })
    // const networkJsonArray: ParsedNetwrokInfo[] = Object.entries(networkJson).map(([key, value]) => { return { name: key, docs_count: value.docs_count, last_time: value.last_time } })

    return networkJsonArray;
}

//TODO: need to add a util that can let me take the key of '100064654032648' and it's object, then return it in a json similar to here
// I need this to fill the ID column inside the sources table (third dashboard)

// "gaza": {
//     "docs_count": 8570228,
//     "docs_count_3_days": 64480,
//     "last_time": "2024-03-05T10:09:48.000Z",
//     "networks": {
//       "facebook": {
//         "docs_count": 6893146,
//         "last_time": "2024-03-05T10:09:48.000Z",
//         "sources": {
//           "100064654032648": {
//             "docs_count": 4552074,
//             "docs_count_3_days": 30677,
//             "last_time": "2024-03-04T10:40:11.000Z",
//             "entity_names": [
//               {
//                 "entity_name": "Al Jazeera Channel - قناة الجزيرة",
//                 "doc_count": 4552074
//               }
//             ]
//           },