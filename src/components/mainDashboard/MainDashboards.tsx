import confusedDuck from '@/assets/images/confused-duck.png';
import Gaza from '@/assets/images/gaza.png';
import Lebanon from '@/assets/images/lebanon.png';
import WestBank from '@/assets/images/westBank.png';
import InterArab from '@/assets/images/middleEast.png';
import International from '@/assets/images/international.png';
import WhiteConfusedDuck from '@/assets/images/white-confused-duck.png';
import WhiteGaza from '@/assets/images/white-gaza.png';
import WhiteLebanon from '@/assets/images/white-lebanon.png';
import WhiteWestBank from '@/assets/images/white-westBank.png';
import WhiteInterArab from '@/assets/images/white-middleEast.png';
import WhiteInternational from '@/assets/images/white-International.png';
import DashboardChoice from '@/components/mainDashboard/DashboardChoice';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useTheme } from '../theme-provider';

export default function MainDashboards() {
  const { theme } = useTheme();

  return (
    <div className="">
      <CardHeader className="flex items-center w-full">
        <img src={theme === 'dark' ? WhiteConfusedDuck : confusedDuck} alt="confused duck" className="h-20 w-16" />
        <CardTitle>Error Monitor</CardTitle>
        <CardDescription>
          Lead your quest to find the errors.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-6">
        <DashboardChoice
          iconSrc={theme === 'dark' ? WhiteGaza : Gaza}
          location={'Gaza'}
          SocialNetworks={undefined}
          Agencies={undefined}
        />
        <DashboardChoice
          iconSrc={theme === 'dark' ? WhiteLebanon : Lebanon}
          location={'Lebanon'}
          SocialNetworks={undefined}
          Agencies={undefined}
        />
        <DashboardChoice
          iconSrc={theme === 'dark' ? WhiteWestBank : WestBank}
          location={'West Bank'}
          SocialNetworks={undefined}
          Agencies={undefined}
        />
      </CardContent>
      <div className="flex justify-center w-full">
        <CardContent className='grid grid-cols-2 gap-6 max-w-[80em] w-full'>
          <DashboardChoice
            iconSrc={theme === 'dark' ? WhiteInterArab : InterArab}
            location={'Inter-Arab'}
            SocialNetworks={undefined}
            Agencies={undefined}
          />
          <DashboardChoice
            iconSrc={theme === 'dark' ? WhiteInternational : International}
            location={'International'}
            SocialNetworks={undefined}
            Agencies={undefined}
          />
        </CardContent>
      </div>
    </div>
  );
}
