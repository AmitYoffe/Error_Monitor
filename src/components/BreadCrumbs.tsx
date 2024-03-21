import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useLocation } from 'react-router-dom';

interface BreadCrumbsProps {
  itemName?: string;
}

function BreadCrumbs({ itemName }: BreadCrumbsProps) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  console.log(pathnames);

  return (
    <Breadcrumb className="absolute left-2 top-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={location.pathname}>
            {itemName ? `${itemName} - ${pathnames[0]}` : pathnames[0]}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.length >= 3 ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={location.pathname}>
                {pathnames[2]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadCrumbs;

//TODO: Need to add functionality with % 'west20%bank' + manage sn into social networks and so on...