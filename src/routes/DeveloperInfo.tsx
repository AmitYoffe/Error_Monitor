import shyDuck from '@/assets/images/shy-duck.png';
import TrafficLightsDisplay from '@/components/DevInfo/TrafficLightsDisplay';
import Header from '@/components/Header';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DatabaseIcon,
  DownloadIcon,
  SearchIcon,
  SparklesIcon,
} from 'lucide-react';

export default function DeveloperInfo() {
  const toolsCollectionJson = {
    Analyzing: {
      icon: <SearchIcon className="mr-3 h-4 w-4" />,
      tools: ['Ingestion', 'Intuview', 'Siren'],
    },
    Collecting: {
      icon: <DownloadIcon className="mr-3 h-4 w-4" />,
      tools: [
        'FB groups',
        'FB pages',
        'FB profiles',
        'TG channels',
        'TW users',
        'Voyager',
      ],
    },
    Enrichment: {
      icon: <SparklesIcon className="mr-3 h-4 w-4" />,
      tools: ['Translation', 'Embedding', 'Clustering', 'Relations'],
    },
    Databases: {
      icon: <DatabaseIcon className="mr-3 h-4 w-4" />,
      tools: ['Mongo', 'Elastic'],
    },
  };

  return (
    <div>
      {/* <StatusGradient generalStatus={'operational'} /> */}
      <Header showBreadcrumbs={true} />
      <CardHeader className="flex w-full items-center pt-3">
        <img src={shyDuck} alt="shy traffic cone duck" className="h-20 w-16" />
        <CardTitle>Dev Error Monitor</CardTitle>
        {/* <CardDescription>Lead your quest to find the errors.</CardDescription> */}
        <CardDescription>This area is still under construction...</CardDescription>
      </CardHeader>
      {/* <TrafficLightsDisplay toolsCollectionJson={toolsCollectionJson} /> */}
    </div>
  );
}

// Todo: make some sort of status indication that looks like a traffic light or something similar to that
