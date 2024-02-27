import React from 'react';

interface ISocialNetworkItem {
  network: string;
  timeRecieved: string;
  info: object;
}

const SocialNetworkItem: React.FC<ISocialNetworkItem> = ({
  network,
  timeRecieved,
  info,
}) => {
  return (
    <div className="flex-column flex justify-center">
      <div className="flex-column flex gap-6 border-2 p-3">
        <div className="gap-6">
          <p className="min-w-72 pb-2 text-center font-bold">{network}</p>
          <p>{`last time received: ${timeRecieved}`}</p>
          <p>{`info: ${JSON.stringify(info)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialNetworkItem;
