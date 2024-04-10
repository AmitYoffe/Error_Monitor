import { Outlet } from 'react-router-dom';
import BreadCrumbs from './BreadCrumbs';
import PageToggle from './DevInfo/PageToggle';
import { ModeToggle } from './mode-toggle';

export default function Layout() {
  return (
    <>
      <BreadCrumbs />
      <ModeToggle />
      <PageToggle />
      <Outlet />
    </>
  );
}
