import React from 'react';
import AgencyItem from './AgencyItem';

interface IAgency {
  agency: string;
  timeRecieved: string;
  info: object;
}

interface Props {
  agencies: IAgency[];
}

const AgenciesTable: React.FC<Props> = ({ agencies }) => {
  return (
    <div>
      <p className="pb-3 text-center">Agencies Table</p>
      {agencies.map((agencyData, index) => (
        <a key={index} href={`${agencyData.agency}`}>
          <AgencyItem
            agency={agencyData.agency}
            timeRecieved={agencyData.timeRecieved}
            info={agencyData.info}
          />
        </a>
      ))}
    </div>
  );
};

export default AgenciesTable;
