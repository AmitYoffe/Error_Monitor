import Header from '@/components/Header';
import StatusGradient from '@/components/StatusGradient';

export default function DeveloperInfo() {
  return (
    <>
      <StatusGradient status={'unstable'} />
      <Header showBreadcrumbs={true} />
      <div>DeveloperInfo</div>
    </>
  );
}

// TODO: make a developer information page according to sharon's planning
