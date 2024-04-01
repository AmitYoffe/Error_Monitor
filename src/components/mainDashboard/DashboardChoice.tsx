import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';

export type StatusType = 'operational' | 'unstable' | 'no-connection';

export interface ISocialNetwork {
  lastTimeRecieved: string;
  info: string;
  status: StatusType;
}

export interface IAgency {
  lastTimeRecieved: string;
  info: string;
  status: StatusType;
}

interface IDashboardChoice {
  iconSrc: string;
  location: string;
  SocialNetworks?: ISocialNetwork;
  Agencies?: IAgency;
}

export default function DashboardChoice({
  iconSrc,
  location,
  SocialNetworks,
  Agencies,
}: IDashboardChoice) {
  const statusVisualizer: Record<StatusType, string> = {
    operational: 'border-green-400',
    unstable: 'border-yellow-400',
    'no-connection': 'border-red-400',
  };
  let statusIndicatorColor = 'border-green-400';

  if (
    Agencies?.status === 'no-connection' ||
    SocialNetworks?.status === 'no-connection'
  ) {
    statusIndicatorColor = statusVisualizer['no-connection'];
  } else if (
    Agencies?.status === 'unstable' ||
    SocialNetworks?.status === 'unstable'
  ) {
    statusIndicatorColor = statusVisualizer['unstable'];
  }

  return (
    <div className="h-4/5">
      <Card className={cn('flex-col p-2', `hover:${statusIndicatorColor}`)}>
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4">
          <img src={iconSrc} alt={`${location} png`} className="mb-3 h-6 w-6" />
          {location}
        </p>
        <Link to={`${location}/sn`}>
          <Card
            className={cn(
              'flex-col p-2',
              `hover:${statusVisualizer[SocialNetworks!.status]}`,
            )}
          >
            <CardTitle className="p-2 text-center underline">
              Social Networks
            </CardTitle>
            <CardDescription className="mx-12 flex justify-between">
              Last Time Recieved: <div>{SocialNetworks?.lastTimeRecieved}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Docs from 3 days ago: <div>{SocialNetworks?.info}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Total Docs: <div>{SocialNetworks?.info}</div>
            </CardDescription>
          </Card>
        </Link>
        <Link to={`${location}/ag`}>
          <Card
            className={cn(
              'flex-col p-2',
              `hover:${statusVisualizer[Agencies!.status]}`,
            )}
          >
            <CardTitle className="p-2 text-center underline">
              Agencies
            </CardTitle>
            <CardDescription className="mx-12 flex justify-between">
              Last Time Recieved: <div>{Agencies?.lastTimeRecieved}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Docs from 3 days ago: <div>{Agencies?.info}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Total Docs: <div>{Agencies?.info}</div>
            </CardDescription>
          </Card>
        </Link>
      </Card>
    </div>
  );
}

//TODO: Add some logic that will cause the parent dashboard statuses actually update according to the logs status values
