import { TrafficCone } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function DeveloperInfo() {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation("/info-dev");
  };

  return (
    <div className="absolute right-12 top-1">
      <Button variant="outline" size="icon" onClick={handleClick}>
        <TrafficCone />
      </Button>
    </div>
  );
}
