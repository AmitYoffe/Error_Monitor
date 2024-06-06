import shyDuck from '@/assets/images/shy-duck.png';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TrafficLightsDisplay from '@/components/DevInfo/TrafficLightsDisplay';
import { ToolCategory } from '@/types/statusType';
import {
  DatabaseIcon,
  DownloadIcon,
  SearchIcon,
  SparklesIcon,
} from 'lucide-react';

interface IToolsCollectionJson {
  [key: string]: ToolCategory;
}

export default function DeveloperInfo() {
  const toolsCollectionJson: IToolsCollectionJson = {
    Analyzing: {
      icon: <SearchIcon className="h-5 w-5" />,
      tools: {
        Ingestion: 'operational',
        Intuview: 'operational',
        Siren: 'operational',
      },
    },
    Collecting: {
      icon: <DownloadIcon className="h-5 w-5" />,
      tools: {
        'FB groups': 'operational',
        'FB pages': 'operational',
        'FB profiles': 'unstable',
        'TG channels': 'operational',
        'TW users': 'operational',
        Voyager: 'operational',
      },
    },
    Enrichment: {
      icon: <SparklesIcon className="h-5 w-5" />,
      tools: {
        Translation: 'operational',
        Embedding: 'operational',
        Clustering: 'operational',
        Relations: 'operational',
      },
    },
    Databases: {
      icon: <DatabaseIcon className="h-5 w-5" />,
      tools: {
        Mongo: 'operational',
        Elastic: 'operational',
      },
    },
  };

  return (
    <div>
      <CardHeader className="flex w-full items-center pt-1">
        <img src={shyDuck} alt="shy traffic cone duck" className="h-20 w-16" />
        <CardTitle>Dev Error Monitor</CardTitle>
        <CardDescription>
          Lead your quest to find the errors.
          {/* This area is still under construction... */}
        </CardDescription>
      </CardHeader>
      <TrafficLightsDisplay toolsCollectionJson={toolsCollectionJson} />
    </div>
  );
}

// Todo: Manage the data flow of the each category, need to also fetch the data only here. (useOutletConext?)

// {
//   "total_system_color": "green",
//   "high_level_apps": {
//     "collecting": {
//       "color": "green",
//       "apps": [
//         {
//           "name": "Twitter Collecting",
//           "color": "green",
//           "reasons": [""],
//           "raw_data": {}
//         }
//       ]
//     },
//     "analyzing": {
//       "color": "green"
//     }
//   },
//   "data_graphs": {

//   }
// }
