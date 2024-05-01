import TrafficLight from '@/components/DevInfo/TrafficLight';
import Header from '@/components/Header';
import StatusGradient from '@/components/StatusGradient';

export default function DeveloperInfo() {
  return (
    <>
      <StatusGradient generalStatus={'unstable'} />
      <Header showBreadcrumbs={true} />
      <div className="grid h-56 grid-cols-4 content-around gap-4 p-8">
        <TrafficLight name={'Analyzing'} />
        <TrafficLight name={'Collecting'} />
        <TrafficLight name={'Enrichment'} />
        <TrafficLight name={'Databases'} />
      </div>
    </>
  );
}

// TODO: make a developer information page according to sharon's planning
