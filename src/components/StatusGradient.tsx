import { memo } from 'react';
import { StatusType } from './mainDashboard/DashboardChoice';
import { useTheme } from './theme-provider';

interface StatusGradientProps {
  status: StatusType;
}

const StatusGradient = memo(({ status }: StatusGradientProps) => {
  const theme = useTheme();
  const themeColors = {
    light: {
      operational: ['#f4fce3', '#dbf7a1'],
      unstable: ['#fff5e6', '#ffc878'],
      'no-connection': ['#ffe6e6', '#fc6868'],
    },
    dark: {
      operational: ['#59981A', '#3D550C'],
      unstable: ['#d6b75a', '#c28530'],
      'no-connection': ['#f04b4b', '#972f2f'],
    }
  };
  const gradientColor = theme.theme === 'light' ? themeColors.light[status] : themeColors.dark[status] || ['white', 'black'];
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
