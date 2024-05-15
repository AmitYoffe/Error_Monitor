import shyDuck from '@/assets/images/shy-duck.png';
import TrafficLight from '@/components/DevInfo/TrafficLight';
import Header from '@/components/Header';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DeveloperInfo() {
  const toolsCollectionJson = {
    Analyzing: ['Ingestion', 'Intuview', 'Siren'],
    Collecting: ['FB groups', 'FB pages', 'FB profiles', 'TG channels', 'TW users', 'Voyager'],
    Enrichment: ['Translation', 'Embedding', 'Clustering', 'Relations'],
    Databases: ['Mongo', 'Elastic'],
  }

  return (
    <div>
      {/* <StatusGradient generalStatus={'operational'} /> */}
      <Header showBreadcrumbs={true} />
      <CardHeader className="flex w-full items-center pt-2">
        <h5></h5>
        <img
          src={shyDuck}
          alt="shy traffic cone duck"
          className="h-20 w-16"
        />
        <CardTitle>Dev Error Monitor</CardTitle>
        <CardDescription>Lead your quest to find the errors.</CardDescription>
      </CardHeader>
      <div className="grid h-24 grid-cols-4 content-around gap-2 px-8">
        {Object.entries(toolsCollectionJson).map(([category, tools]) => (
          <TrafficLight key={category} name={category}>
            <ul>
              {tools.map(tool => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </TrafficLight>
        ))}
      </div>
    </div>
  );
}

// TODO: make a developer information page according to sharon's planning
