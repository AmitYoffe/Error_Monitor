import React from 'react';
import SocialNetworkItem from './SocialNetworkItem';

interface ISocialNetwork {
  network: string;
  timeRecieved: string;
  info: object;
}

interface Props {
  socialNetworks: ISocialNetwork[];
}

const SocialNetworksTable: React.FC<Props> = ({ socialNetworks }) => {
  return (
    <div>
      <p className="pb-3 text-center">Social Networks Table</p>
      {socialNetworks.map((networkData, index) => (
        <a key={index} href={`${networkData.network}`}>
          <SocialNetworkItem
            key={index}
            network={networkData.network}
            timeRecieved={networkData.timeRecieved}
            info={networkData.info}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialNetworksTable;
