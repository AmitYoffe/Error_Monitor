import { getLocationInfoType } from '@/lib/getLocationInfo';
import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';

interface NetworkChoiceProps {
  networkInfo: getLocationInfoType;
  // statusColor: string;
  location: string;
}

export default function NetworkChoice({
  networkInfo,
  // statusColor,
  location,
}: NetworkChoiceProps) {
  // const [networkHovered, setNetworkHovered] = useState(false);

  const urlArgument = networkInfo.networkType === 'article' ? 'ag' : 'sn';
  const networkBoxTitle =
    networkInfo.networkType === 'article' ? 'Agencies' : 'Social Networks';

  return (
    <Link to={`${location}/${urlArgument}`}>
      <Card
        className="flex-col p-2"
      // style={{
      //   border: networkHovered ? `1px solid ${statusColor}` : undefined,
      // }}
      // onMouseOver={() => setNetworkHovered(true)}
      // onMouseOut={() => setNetworkHovered(false)}
      >
        <CardTitle className="p-2 text-center underline">
          {networkBoxTitle}
        </CardTitle>
        <CardDescription className="mx-12 flex justify-between">
          Last Time Recieved:{' '}
          <div>
            {moment(networkInfo.last_time).format('DD/MM/YYYY - HH:mm:ss')}
          </div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Docs from 3 days ago: <div>{networkInfo.docs_count_3_days}</div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Total Docs:
          <div>{networkInfo.docs_count}</div>
        </CardDescription>
      </Card>
    </Link>
  );
}
