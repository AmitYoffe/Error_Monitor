import BreadCrumbs from './BreadCrumbs';
import PageToggle from './DevInfo/PageToggle';
import { ModeToggle } from './mode-toggle';

interface HeaderProps {
  showBreadcrumbs: boolean;
}

export default function Header({ showBreadcrumbs }: HeaderProps) {
  return (
    <div className="flex justify-between">
      {showBreadcrumbs ? <BreadCrumbs /> : null}
      <div className="flex ml-auto gap-1">
        <PageToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
