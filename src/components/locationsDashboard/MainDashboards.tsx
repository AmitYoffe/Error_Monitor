import confusedDuck from '@/assets/images/confused-duck.png';
import WhiteConfusedDuck from '@/assets/images/white-confused-duck.png';
import DashboardChoice from '@/components/locationsDashboard/DashboardChoice';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import getLocationIcon from '@/utils/getLocationIcon';
import { locationInfoType } from '@/utils/getLocationInfo';
import { useTheme } from '../layout/theme-provider';

// locationInfo type with the added locationName field
export type formattedLocationInfo = {
  locationName: string;
  networksInfo: locationInfoType[];
};

interface IMainDashboards {
  locationsInfo: formattedLocationInfo[];
}

export default function MainDashboards({ locationsInfo }: IMainDashboards) {
  const { theme } = useTheme();

  return (
    <>
      <CardHeader className="flex w-full items-center pt-1">
        <img
          src={theme === 'dark' ? WhiteConfusedDuck : confusedDuck}
          alt="confused duck"
          className="h-20 w-16"
        />
        <CardTitle>Error Monitor</CardTitle>
        <CardDescription>Lead your quest to find the errors.</CardDescription>
      </CardHeader>
      <Card className="h-[calc(100vh-212px)] max-h-[1080px] mx-8 p-3 overflow-scroll overflow-x-hidden">
        <div className="flex flex-wrap justify-center gap-3">
          {locationsInfo.map((locationInfo) => (
            <DashboardChoice
              key={locationInfo.locationName}
              iconSrc={getLocationIcon(locationInfo.locationName, theme)}
              locationName={locationInfo.locationName}
              networksInfo={locationInfo.networksInfo}
            />
          ))}
        </div>
      </Card>
    </>
  );
}
