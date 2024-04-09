import { Outlet } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import DeveloperInfo from './DeveloperInfoIcon';
import { ModeToggle } from './mode-toggle';

export default function Layout() {
  return (
    <>
      <BreadCrumbs />
      <ModeToggle />
      <DeveloperInfo />
      <Outlet />
    </>
  );
}
