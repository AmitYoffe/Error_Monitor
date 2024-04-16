import { StatusType } from './mainDashboard/DashboardChoice';
import { memo } from 'react';

interface StatusGradient {
  status: StatusType;
}

const StatusGradient = memo(({ status }: StatusGradient) => {
  const statusVisualizer: Record<StatusType, string[]> = {
    operational: ['#59981A', '#3D550C'],
    unstable: ['#f2d066', '#B26900'],
    'no-connection': ['#f04b4b', '#972f2f'],
  };

  let gradientColor = ['#59981A', '#3D550C'];

  if (status === 'no-connection') {
    gradientColor = statusVisualizer['no-connection'];
  } else if (status === 'unstable') {
    gradientColor = statusVisualizer['unstable'];
  }

  const gradient = `linear-gradient(90deg, ${gradientColor[0]} 25%, ${gradientColor[1]} 75%)`;
  const injectedCss = `
  <style>
  body {
    background: ${gradient};
    background-size: 400% 400%;
    overflow: hidden;
}
</style>
`;
  console.log(injectedCss);

  return <span dangerouslySetInnerHTML={{ __html: injectedCss }} />;
});

export default StatusGradient;

// TODO: adjust the colors themselves and make it compatible with dark and light mode!
