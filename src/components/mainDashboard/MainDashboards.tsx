import confusedDuck from '@/assets/images/confused-duck.png';
import Gaza from '@/assets/images/gaza.png';
import International from '@/assets/images/international.png';
import Lebanon from '@/assets/images/lebanon.png';
import InterArab from '@/assets/images/middleEast.png';
import WestBank from '@/assets/images/westBank.png';
import WhiteInternational from '@/assets/images/white-International.png';
import WhiteConfusedDuck from '@/assets/images/white-confused-duck.png';
import WhiteGaza from '@/assets/images/white-gaza.png';
import WhiteLebanon from '@/assets/images/white-lebanon.png';
import WhiteInterArab from '@/assets/images/white-middleEast.png';
import WhiteWestBank from '@/assets/images/white-westBank.png';
import DashboardChoice, {
  IDashboardChoice,
} from '@/components/mainDashboard/DashboardChoice';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IAgency, ISocialNetwork } from '@/types/dashboardTypes';
import { useTheme } from '../theme-provider';

// TODO: get rid of these agenciesArr and socialNetworksArr. I'm only using their status so
// i can simply turn them into agencyStatus & snStatus consts
const agenciesArr: IAgency[] = [
  {
    lastTimeRecieved: new Date().toISOString(),
    info: 'no information',
    status: 'no-connection',
  },
  {
    lastTimeRecieved: new Date().toISOString(),
    info: 'no information',
    status: 'operational',
  },
  {
    lastTimeRecieved: new Date().toISOString(),
    info: 'no information',
    status: 'unstable',
  },
];

const socialNetworksArr: ISocialNetwork[] = [
  {
    lastTimeRecieved: new Date().toISOString(),
    info: 'no information',
    status: 'unstable',
  },
  {
    lastTimeRecieved: new Date().toISOString(),
    info: 'no information',
    status: 'operational',
  },
  {
    lastTimeRecieved: new Date().toISOString(),
    info: 'no information',
    status: 'unstable',
  },
];

export default function MainDashboards() {
  const { theme } = useTheme();
  const locationInfo: IDashboardChoice[] = [
    {
      iconSrc: theme === 'dark' ? WhiteGaza : Gaza,
      location: 'Gaza Strip',
      SocialNetworks: socialNetworksArr[0],
      Agencies: agenciesArr[0],
    },
    {
      iconSrc: theme === 'dark' ? WhiteLebanon : Lebanon,
      location: 'Lebanon',
      SocialNetworks: socialNetworksArr[1],
      Agencies: agenciesArr[1],
    },
    {
      iconSrc: theme === 'dark' ? WhiteWestBank : WestBank,
      location: 'West Bank',
      SocialNetworks: socialNetworksArr[2],
      Agencies: agenciesArr[2],
    },
    {
      iconSrc: theme === 'dark' ? WhiteInterArab : InterArab,
      location: 'Inter-Arab',
      SocialNetworks: socialNetworksArr[2],
      Agencies: agenciesArr[2],
    },
    {
      iconSrc: theme === 'dark' ? WhiteInternational : International,
      location: 'International',
      SocialNetworks: socialNetworksArr[2],
      Agencies: agenciesArr[2],
    },
  ];

  //TODO: Add min width and height, generally prettify
  return (
    <div>
      <CardHeader className="flex w-full items-center pt-1">
        <img
          src={theme === 'dark' ? WhiteConfusedDuck : confusedDuck}
          alt="confused duck"
          className="h-20 w-16"
        />
        <CardTitle>Error Monitor</CardTitle>
        <CardDescription>Lead your quest to find the errors.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap justify-center gap-4">
        {locationInfo.map((locationInfo) => (
          <div
            key={locationInfo.location}
            className="min-w-96 flex-shrink-0 basis-1/2 md:basis-1/4"
          >
            <DashboardChoice
              iconSrc={locationInfo.iconSrc}
              location={locationInfo.location}
              SocialNetworks={locationInfo.SocialNetworks}
              Agencies={locationInfo.Agencies}
            />
          </div>
        ))}
      </CardContent>
      <CardContent className="grid w-full max-w-[80em] grid-cols-2 gap-6"></CardContent>
    </div>
  );
}
