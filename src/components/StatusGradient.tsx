import { memo } from 'react';
import { StatusType } from './mainDashboard/DashboardChoice';
import { useTheme } from './theme-provider';

interface StatusGradientProps {
  generalStatus: StatusType;
}

const StatusGradient = memo(({ generalStatus }: StatusGradientProps) => {
  const { theme } = useTheme();
  const themeColors = {
    light: {
      operational: ['#f5f7f0', '#f6ffe3'],
      unstable: ['#fcf5eb', '#fce8ca'],
      'no-connection': ['#fcf0f0', '#fcd9d9'],
    },
    dark: {
      operational: ['#222e09', '#1b2603'],
      unstable: ['#473605', '#2e2401'],
      'no-connection': ['#4d0f0f', '#290303'],
    },
  };
  const gradientColor =
    theme === 'light'
      ? themeColors.light[generalStatus]
      : themeColors.dark[generalStatus] || ['white', 'black'];
  const gradient = `linear-gradient(45deg, ${gradientColor[0]}, ${gradientColor[1]})`;

  const injectedCss = `
    <style>
      body {
        background: ${gradient};
        background-attachment: fixed;
        overflow: hidden;
      }
    </style>
  `;

  return <span dangerouslySetInnerHTML={{ __html: injectedCss }} />;
});

export default StatusGradient;
