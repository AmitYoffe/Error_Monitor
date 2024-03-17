import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { useEffect, useState } from 'react';

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
  const [mainBorderColor, setMainBorderColor] = useState<string>('green');
  const [agencyBorderColor, setAgencyBorderColor] = useState<string>('green');
  const [snBorderColor, setSnBorderColor] = useState<string>('yellow');

  useEffect(() => {
    if (snBorderColor === 'red' || agencyBorderColor === 'red') {
      setMainBorderColor('red');
    } else if (snBorderColor === 'yellow' || agencyBorderColor === 'yellow') {
      setMainBorderColor('yellow');
    } else {
      setMainBorderColor('green');
    }
  }, [agencyBorderColor, snBorderColor]);

  return (
    <div className="h-4/5">
      {/*TODO: Make the border color a variable that changes according to the status */}
      <Card
        className={String.raw`flex-col p-2 hover:border-${mainBorderColor}-400`}
      >
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4">
          <img src={iconSrc} alt={`${location} png`} className="mb-3 h-6 w-6" />
          {location}
        </p>
        <Link to={`${location}/sn`}>
          <Card
            className={String.raw`flex-col p-2 hover:border-${snBorderColor}-400`}
          >
            <CardTitle className="p-2 text-center underline">
              Social Networks
            </CardTitle>
            <CardDescription className="mx-12">
              Last Time Recieved: {SocialNetworks?.lastTimeRecieved}
            </CardDescription>
            <CardDescription className="mx-12">
              Docs form 3 days ago: {SocialNetworks?.info}
            </CardDescription>
            <CardDescription className="mx-12">
              Total Docs: {SocialNetworks?.info}
            </CardDescription>
          </Card>
        </Link>
        <Link to={`${location}/ag`}>
          <Card
            className={String.raw`flex-col p-2 hover:border-${agencyBorderColor}-400`}
          >
            <CardTitle className="p-2 text-center underline">
              Agencies
            </CardTitle>
            <CardDescription className="mx-12">
              Last Time Recieved: {Agencies?.lastTimeRecieved}
            </CardDescription>
            <CardDescription className="mx-12">
              Docs form 3 days ago: {Agencies?.info}
            </CardDescription>
            <CardDescription className="mx-12">
              Total Docs: {Agencies?.info}
            </CardDescription>
          </Card>
        </Link>
      </Card>
    </div>
  );
}

//TODO: some function that uses setCurrentStatus according to the actual data
