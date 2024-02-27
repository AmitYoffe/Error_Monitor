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

function DashboardChoice({
  iconSrc,
  location,
  SocialNetworks,
  Agencies,
}: IDashboardChoice) {
  return (
    <Link to={location} className="hover:bg-accent">
      <p className="flex flex-col items-center justify-between rounded-md border-2 p-4 hover:text-accent-foreground active:border-slate-950 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary">
        <img src={iconSrc} alt={`${location} svg`} className="mb-3 h-6 w-6" />
        {location}
      </p>
      <Card className="flex-col p-2">
        <CardTitle className="text-center underline">Social Networks</CardTitle>
        <CardDescription>
          Last Time Recieved: {SocialNetworks?.lastTimeRecieved}
        </CardDescription>
        <CardDescription>Info: {SocialNetworks?.info}</CardDescription>
      </Card>
      <Card className="flex-col p-2">
        <CardTitle className="text-center underline">Agencies</CardTitle>
        <CardDescription>
          Last Time Recieved: {Agencies?.lastTimeRecieved}
        </CardDescription>
        <CardDescription>Info: {Agencies?.info}</CardDescription>
      </Card>
    </Link>
  );
}

export default DashboardChoice;
