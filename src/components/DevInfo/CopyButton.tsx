import { Clipboard } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant={'outline'}
            className="px-2"
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
          >
            <Clipboard className="size-3.5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-sm text-muted-foreground">copy</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
