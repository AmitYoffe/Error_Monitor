import confusedDuck from '@/assets/images/confused-duck.png';
import WhiteConfusedDuck from '@/assets/images/white-confused-duck.png';
import DashboardChoice from '@/components/mainDashboard/DashboardChoice';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import getLocationIcon from '@/lib/getLocationIcon';
import { getLocationInfoType } from '@/lib/getLocationInfo';
import { useTheme } from '../theme-provider';

export type formattedLocationInfo = {
  locationName: string;
  networksInfo: getLocationInfoType[];
};

interface IMainDashboards {
  locationsInfo: formattedLocationInfo[];
}

export default function MainDashboards({ locationsInfo }: IMainDashboards) {
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
      <CardContent className="flex flex-wrap justify-center gap-4">
        {locationsInfo.map((locationInfo) => (
          <div
            key={locationInfo.locationName}
            className="min-w-[590px] flex-shrink-0 basis-1/2 md:basis-1/4"
          >
            <DashboardChoice
              iconSrc={getLocationIcon(locationInfo.locationName, theme)}
              locationName={locationInfo.locationName}
              networksInfo={locationInfo.networksInfo}
            />
          </div>
        ))}
      </CardContent>
    </div>
  );
}
