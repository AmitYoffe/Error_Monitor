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