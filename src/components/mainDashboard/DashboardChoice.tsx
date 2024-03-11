import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';

interface ISocialNetwork {
  lastTimeRecieved: string;
  info: string;
}

interface IAgency {
  lastTimeRecieved: string;
  info: string;
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
  return (
    <Link to={location} className="hover:bg-accent">
      <Card className="flex-col p-2">
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4 hover:text-accent-foreground active:border-slate-950 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
          <img src={iconSrc} alt={`${location} png`} className="mb-3 h-6 w-6" />
          {location}
        </p>
        <div>
          <CardTitle className="p-2 text-center underline">
            Social Networks
          </CardTitle>
          <CardDescription className="mx-12">
            Last Time Recieved: {SocialNetworks?.lastTimeRecieved}
          </CardDescription>
          <CardDescription className="mx-12">
            Info: {SocialNetworks?.info}
          </CardDescription>
        </div>
        <div>
          <CardTitle className="p-2 text-center underline">Agencies</CardTitle>
          <CardDescription className="mx-12">
            Last Time Recieved: {Agencies?.lastTimeRecieved}
          </CardDescription>
          <CardDescription className="mx-12">
            Info: {Agencies?.info}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}

//TODO: Fix hover styling + center a bit the 'Info' & 'lastTimeRecieved' fields
