import confusedDuck from '@/assets/images/confused-duck.png';
import Gaza from '@/assets/images/gaza.png';
import Lebanon from '@/assets/images/lebanon.png';
import WestBank from '@/assets/images/westBank.png';
import WhiteGaza from '@/assets/images/white-gaza.png';
import WhiteLebanon from '@/assets/images/white-lebanon.png';
import WhiteWestBank from '@/assets/images/white-westBank.png';
import DashboardChoice from '@/components/DashboardChoice';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// TODO: understand how to toggle the location icons from dark to light mode
interface MainDashboardsProps {
  darkMode: boolean;
}
export default function MainDashboards({ darkMode }: MainDashboardsProps) {
  return (
    <Card>
      <CardHeader className="flex items-center">
        <img src={confusedDuck} alt="confused duck" className="h-20 w-16" />
        <CardTitle>Error Monitor</CardTitle>
        <CardDescription>
          Add a new payment method to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3 gap-6">
        <DashboardChoice
          iconSrc={darkMode ? WhiteGaza : Gaza}
          location={'Gaza'}
          SocialNetworks={undefined}
          Agencies={undefined}
        />
        <DashboardChoice
          iconSrc={darkMode ? WhiteLebanon : Lebanon}
          location={'Lebanon'}
          SocialNetworks={undefined}
          Agencies={undefined}
        />
        <DashboardChoice
          iconSrc={darkMode ? WhiteWestBank : WestBank}
          location={'West Bank'}
          SocialNetworks={undefined}
          Agencies={undefined}
        />
      </CardContent>
    </Card>
  );
}
