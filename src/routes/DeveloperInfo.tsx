import shyDuck from '@/assets/images/shy-duck.png';
import SystemStatusDisplay from '@/components/DevInfo/SystemStatusDisplay';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ToolCategory } from '@/types/statusType';

interface IToolsCollectionJson {
  [key: string]: ToolCategory;
}

export default function DeveloperInfo() {
  const toolsCollectionJson: IToolsCollectionJson = {
    Analyzing: {
      tools: {
        Ingestion: 'operational',
        Intuview: 'operational',
        Siren: 'operational',
      },
    },
    Collecting: {
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
      tools: {
        Translation: 'operational',
        Embedding: 'operational',
        Clustering: 'operational',
        Relations: 'operational',
      },
    },
    Databases: {
      tools: {
        Mongo: 'operational',
        Elastic: 'operational',
      },
    },
  };

  // const { dataPromise } = useOutletContext() as {
  //   dataPromise: Promise<Location>;
  // };

  return (
    // <Suspense fallback={<DeveloperInfoSkeleton />}>
    //   <Await
    //     resolve={dataPromise.then((resolvedData) =>
    //       extractSystemStatuses(resolvedData),
    //     )}
    //     errorElement={<ErrorPage />}
    //   >
    // {(soucresData: ParsedSource[]) => (
    <>
      <CardHeader className="flex w-full items-center pt-1">
        <img src={shyDuck} alt="shy traffic cone duck" className="h-20 w-16" />
        <CardTitle>Dev Error Monitor</CardTitle>
        <CardDescription>
          Lead your quest to find the errors.
          {/* This area is still under construction... */}
        </CardDescription>
      </CardHeader>
      <SystemStatusDisplay toolsCollectionJson={toolsCollectionJson} />
    </>
    //     )}
    //   </Await>
    // </Suspense>
  );
}

// Todo: Manage the data flow of the each category, need to also fetch the data only here.
