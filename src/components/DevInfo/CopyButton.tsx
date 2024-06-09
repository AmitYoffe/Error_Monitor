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
  // Function to format JSON with it's indentation and structure
  const formatJson = (json: string) => {
    try {
      const parsed = JSON.parse(json);
      return JSON.stringify(parsed, null, 2); // 2 spaces indentation
    } catch (error) {
      console.error('Invalid JSON', error);
      return json; // Return the original text if it's not valid JSON
    }
  };

  return (
    <>
      <TooltipProvider delayDuration={60}>
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={'outline'}
              className="px-2"
              onClick={() => {
                const formattedText = formatJson(text);
                navigator.clipboard.writeText(formattedText);
                toast('JSON copied to clipboard!', {
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
