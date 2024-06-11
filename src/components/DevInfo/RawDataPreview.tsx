import { Card } from '../ui/card';
import CopyButton from './CopyButton';

interface RawDataPreviewProps {
  rawData: object | undefined; // Modify the type to allow undefined
}

export default function RawDataPreview({ rawData }: RawDataPreviewProps) {
  // Return some placeholder if rawData is undefined
  if (!rawData) {
    return '{no rawData found}';
  }

  return (
    <Card className="flex-2 relative h-full overflow-x-hidden">
      <div className="sticky top-1 ml-[95%]">
        <CopyButton text={`${JSON.stringify(rawData)}`} />
      </div>
      <pre className="m-2 -mt-6">{JSON.stringify(rawData, null, 2)}</pre>
    </Card>
  );
}
