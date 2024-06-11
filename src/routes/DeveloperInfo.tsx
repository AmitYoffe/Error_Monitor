import shyDuck from '@/assets/images/shy-duck.png';
import SystemStatusDisplay from '@/components/DevInfo/SystemStatusDisplay';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import getSystemsInfo from '@/utils/getSystemsInfo';

export default function DeveloperInfo() {
  // const { dataPromise } = useOutletContext() as {
  //   dataPromise: Promise<Location>;
  // };

  const toolsCollectionJson = getSystemsInfo();

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
      <SystemStatusDisplay systemsInfo={toolsCollectionJson} />
    </>
    //     )}
    //   </Await>
    // </Suspense>
  );
}

// Todo: Manage the data flow of the each category, need to also fetch the data only here.
