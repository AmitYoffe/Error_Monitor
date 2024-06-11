import { CircleIcon } from 'lucide-react';

export const statusIcons: Record<string, JSX.Element> = {
  green: <CircleIcon className="text-green-400" />,
  yellow: <CircleIcon className="text-yellow-400" />,
  red: <CircleIcon className="text-red-400" />,
};

interface StatusLinkProps {
  color: string;
}

export default function StatusIndication({ color }: StatusLinkProps) {
  return statusIcons[color];
}
