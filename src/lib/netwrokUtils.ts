import { getNetworks } from "./pseudo-db";

export async function getNetworkNames() {
    const networks = await getNetworks();
    const names = Object.entries(networks.articles).map(([_, value]) => Object.entries(value.networks))
    console.log(names);
    // const names: string[] = [];
    // for (const location in network.articles) {
    //     const locationData = network.articles[location];
    //     // Iterate over locations
    //     for (const networkName in locationData.networks) {
    //         // Make sure networkName is a string
    //         names.push(networkName);
    //     }
    // }

    return names;
}