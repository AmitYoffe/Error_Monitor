import shyDuck from '@/assets/images/shy-duck.png';
import TrafficLight from '@/components/DevInfo/TrafficLight';
import Header from '@/components/Header';
import StatusGradient from '@/components/StatusGradient';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DeveloperInfo() {
  return (
    <>
      <StatusGradient generalStatus={'unstable'} />
      <Header showBreadcrumbs={true} />
      <CardHeader className="flex w-full items-center pt-5">
        <img
          src={shyDuck}
          alt="shy traffic cone duck"
          className="h-20 w-16"
        />
        <CardTitle>Dev Error Monitor</CardTitle>
        <CardDescription>Lead your quest to find the errors.</CardDescription>
      </CardHeader>
      <div className="grid h-24 grid-cols-4 content-around gap-2 px-8">
        <TrafficLight name={'Analyzing'} />
        <TrafficLight name={'Collecting'} />
        <TrafficLight name={'Enrichment'} />
        <TrafficLight name={'Databases'} />
      </div>
    </>
  );
}

// TODO: make a developer information page according to sharon's planning
