import { ScrollText, TrafficCone } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

export default function PageToggle() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isInfoDev = pathname.includes('info-dev');
  const toggleIcon = isInfoDev ? <ScrollText /> : <TrafficCone />;
  const navigateTo = isInfoDev ? '/' : '/info-dev';

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <TooltipProvider delayDuration={60}>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline" size="icon" onClick={handleClick}>
            {toggleIcon}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isInfoDev ? 'Client Monitoring' : 'Technical Monitoring'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
