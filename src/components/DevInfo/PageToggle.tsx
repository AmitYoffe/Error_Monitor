import { TrafficCone } from 'lucide-react';
import { ScrollText } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

export default function PageToggle() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const navigation = useNavigate();

  let navigateTo;
  let toggleIcon = <TrafficCone />;

  if (pathnames.includes('info-dev')) {
    toggleIcon = <ScrollText />;
    navigateTo = '/';
  } else {
    toggleIcon = <TrafficCone />;
    navigateTo = '/info-dev';
  }

  const handleClick = () => {
    navigation(navigateTo);
  };

  return (
    <div className="absolute right-40 top-1">
      <Button variant="outline" size="icon" onClick={handleClick}>
        {toggleIcon}
      </Button>
    </div>
  );
}
