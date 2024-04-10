import { TrafficCone } from 'lucide-react';
import { ScrollText } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';

export default function PageToggle() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/info-dev');
  };
  // TODO: make this check the current page (according to URL or state?)
  const trueCondition = true;
  return (
    <div className="absolute right-40 top-1">
      <Button variant="outline" size="icon" onClick={handleClick}>
        {trueCondition === true ? <TrafficCone /> : <ScrollText />}
      </Button>
    </div>
  );
}
