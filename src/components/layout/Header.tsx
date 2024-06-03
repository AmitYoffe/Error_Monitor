import BreadCrumbs from './BreadCrumbs';
import PageToggle from './PageToggle';
import { ModeToggle } from './mode-toggle';

export default function Header() {
  return (
    <div className="flex justify-between">
      <div className="absolute left-4 top-4">
        <BreadCrumbs />
      </div>
      <div className="absolute right-2 top-2 ml-auto flex gap-1">
        <PageToggle />
        <ModeToggle />
      </div>
    </div>
  );
}
