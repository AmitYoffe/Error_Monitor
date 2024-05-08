import { getLocationInfoType } from '@/lib/getLocationInfo';
import moment from 'moment';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

interface NetworkChoiceProps {
  networkInfo: getLocationInfoType;
  statusColor: string;
  title: string;
}

export default function NetworkChoice({
  networkInfo,
  statusColor,
  title,
}: NetworkChoiceProps) {
  const [networkHovered, setNetworkHovered] = useState(false);

  const urlArgument = title === 'Agencies' ? 'ag' : 'sn';
  // const networkTypeField = title === 'Agencies' ? 'article' : 'sn';

  return (
    <Link to={`${location}/${urlArgument}`}>
      <Card
        className="flex-col p-2"
        style={{
          border: networkHovered ? `1px solid ${statusColor}` : undefined,
        }}
        onMouseOver={() => setNetworkHovered(true)}
        onMouseOut={() => setNetworkHovered(false)}
      >
        <CardTitle className="p-2 text-center underline">{title}</CardTitle>
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
          {/* Skeleton that is shown when the info takes time to load */}
          <Skeleton className="my-auto h-2 w-[90px]" />
          {/* <div>{networkInfo.docs_count}</div> */}
        </CardDescription>
      </Card>
    </Link>
  );
}

// TODO: Add skeleton onload, because it takes a long time to load
