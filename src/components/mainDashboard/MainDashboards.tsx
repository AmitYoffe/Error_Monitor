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
import { getLocationInfoType } from '@/lib/getLocationInfo';
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

export type LocationName =
  | 'Gaza Strip'
  | 'Lebanon'
  | 'West Bank'
  | 'Inter-Arab'
  | 'International';

const iconSrcMap: Record<LocationName, { light: string; dark: string }> = {
  'Gaza Strip': { light: WhiteGaza, dark: Gaza },
  Lebanon: { light: WhiteLebanon, dark: Lebanon },
  'West Bank': { light: WhiteWestBank, dark: WestBank },
  'Inter-Arab': { light: WhiteInterArab, dark: InterArab },
  International: { light: WhiteInternational, dark: International },
};

export type formattedLocationInfo = {
  locationName: LocationName;
  networksInfo: getLocationInfoType[];
};

interface IMainDashboards {
  locationsInfo: formattedLocationInfo[];
}

export default function MainDashboards({ locationsInfo }: IMainDashboards) {
  const { theme } = useTheme();

  const locationInfo = locationsInfo.map((location) => {
    return {
      ...location,
      iconSrc:
        iconSrcMap[location.locationName][theme === 'dark' ? 'light' : 'dark'],
    };
  });

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
            key={locationInfo.locationName}
            className="min-w-[590px] flex-shrink-0 basis-1/2 md:basis-1/4"
          >
            <DashboardChoice
              iconSrc={locationInfo.iconSrc}
              locationName={locationInfo.locationName}
              networksInfo={locationInfo.networksInfo}
            />
          </div>
        ))}
      </CardContent>
    </div>
  );
}
