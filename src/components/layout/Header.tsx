import BreadCrumbs from './BreadCrumbs';
import PageToggle from './PageToggle';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <div className="flex h-0 justify-between p-2">
      <BreadCrumbs />
      <div className="ml-auto flex gap-1">
        <PageToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
