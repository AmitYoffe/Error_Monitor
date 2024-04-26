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
import DashboardChoice from '@/components/mainDashboard/DashboardChoice';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IAgency, ISocialNetwork } from '@/types/dashboardTypes';
import { useTheme } from '../theme-provider';

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
      <CardContent className="grid grid-cols-3 gap-6">
        <DashboardChoice
          iconSrc={theme === 'dark' ? WhiteGaza : Gaza}
          location={'Gaza Strip'}
          SocialNetworks={socialNetworksArr[0]}
          Agencies={agenciesArr[0]}
        />
        <DashboardChoice
          iconSrc={theme === 'dark' ? WhiteLebanon : Lebanon}
          location={'Lebanon'}
          SocialNetworks={socialNetworksArr[1]}
          Agencies={agenciesArr[1]}
        />
        <DashboardChoice
          iconSrc={theme === 'dark' ? WhiteWestBank : WestBank}
          location={'West Bank'}
          SocialNetworks={socialNetworksArr[2]}
          Agencies={agenciesArr[2]}
        />
      </CardContent>
      <div className="flex w-full justify-center">
        <CardContent className="grid w-full max-w-[80em] grid-cols-2 gap-6">
          <DashboardChoice
            iconSrc={theme === 'dark' ? WhiteInterArab : InterArab}
            location={'Inter-Arab'}
            SocialNetworks={socialNetworksArr[2]}
            Agencies={agenciesArr[2]}
          />
          <DashboardChoice
            iconSrc={theme === 'dark' ? WhiteInternational : International}
            location={'International'}
            SocialNetworks={socialNetworksArr[2]}
            Agencies={agenciesArr[2]}
          />
        </CardContent>
      </div>
    </div>
  );
}
