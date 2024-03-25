import BreadCrumbs from '@/components/BreadCrumbs';
import StatusPod from '@/components/secondSubDashboard/StatusPod';

function SecondSubDashboard() {
  return (
    <>
      <BreadCrumbs />
      <div className="flex justify-center">
        <StatusPod name={'Facebook'} status={'unstable'} />
      </div>
    </>
  );
}

export default SecondSubDashboard;

// TODO: Unserstand how to show this third screen would work
