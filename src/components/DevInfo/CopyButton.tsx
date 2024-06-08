import { Clipboard } from 'lucide-react';
import { toast } from 'sonner';
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
    <>
      <TooltipProvider delayDuration={60}>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={'gooeyRight'}
              className="px-2"
              onClick={() => {
                navigator.clipboard.writeText(text);
                toast('Json copied to clipboard!', {
                  action: {
                    label: 'Close',
                    onClick: () => console.log('Close'),
                  },
                });
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
    </>
  );
}
