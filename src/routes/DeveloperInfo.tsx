import shyDuck from '@/assets/images/shy-duck.png';
import StatusIndication from '@/components/DevInfo/StatusIndication';
import TrafficLight from '@/components/DevInfo/TrafficLight';
import Header from '@/components/Header';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  DatabaseIcon,
  DownloadIcon,
  SearchIcon,
  SparklesIcon,
} from 'lucide-react';

export default function DeveloperInfo() {
  const toolsCollectionJson = {
    Analyzing: {
      icon: <SearchIcon className="h-4 w-4" />,
      tools: ['Ingestion', 'Intuview', 'Siren'],
    },
    Collecting: {
      icon: <DownloadIcon className="h-4 w-4" />,
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
      icon: <SparklesIcon className="h-4 w-4" />,
      tools: ['Translation', 'Embedding', 'Clustering', 'Relations'],
    },
    Databases: {
      icon: <DatabaseIcon className="h-4 w-4" />,
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
        <CardDescription>Lead your quest to find the errors.</CardDescription>
      </CardHeader>
      <div className="grid h-24 grid-cols-4 content-around gap-2 px-8">
      <TrafficLightDisplay toolsCollectionJson={toolsCollectionJson}/>  
        {/* {Object.entries(toolsCollectionJson).map(([category, toolsJson]) => (
          // Make it so status indication is a part of the TrafficLight component, it will be shown by status
          <TrafficLight key={category} toolsInfo={toolsJson} name={category}>
            <ul className="w-full">
              {toolsJson.tools.map((tool) => (
                <>
                  <Separator className="my-3" />
                  <div className="flex justify-between">
                    <li key={tool} className="my-auto">
                      {tool}
                    </li>
                    <StatusIndication status={'operational'} />
                  </div>
                </>
              ))}
            </ul>
          </TrafficLight>
        ))} */}
      </div>
    </div>
  );
}

// TODO: make a developer information page according to sharon's planning
// Todo: add icons for each category of tools and reuse it in the components
