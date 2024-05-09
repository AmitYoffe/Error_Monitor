import AntiHezbollah from '@/assets/images/AntiHezbollah.png';
import ProHezbollah from '@/assets/images/ProHezbollah.png';
import WhiteAntiHezbollah from '@/assets/images/WhiteAntiHezbollah.png';
import WhiteProHezbollah from '@/assets/images/WhiteProHezbollah.png';
import Gaza from '@/assets/images/gaza.png';
import International from '@/assets/images/international.png';
import Lebanon from '@/assets/images/lebanon.png';
import InterArab from '@/assets/images/middleEast.png';
import WestBank from '@/assets/images/westBank.png';
import WhiteInternational from '@/assets/images/white-International.png';
import WhiteGaza from '@/assets/images/white-gaza.png';
import WhiteLebanon from '@/assets/images/white-lebanon.png';
import WhiteInterArab from '@/assets/images/white-middleEast.png';
import WhiteWestBank from '@/assets/images/white-westBank.png';

export default function getLocationIcon(location: string, theme: string) {
    const iconSrcJson: Record<string, { light: string; dark: string }> = {
        'gaza strip': { light: WhiteGaza, dark: Gaza },
        lebanon: { light: WhiteLebanon, dark: Lebanon },
        'west bank': { light: WhiteWestBank, dark: WestBank },
        'inter-arab': { light: WhiteInterArab, dark: InterArab },
        'pro hezbollah': { light: WhiteProHezbollah, dark: ProHezbollah },
        'anti hezbollah': { light: WhiteAntiHezbollah, dark: AntiHezbollah },
        default: {
            light: WhiteInternational,
            dark: International,
        },
    };

    const icon = iconSrcJson[location.toLowerCase()] || iconSrcJson.default;
    return theme === 'light' ? icon.dark : icon.light;
}