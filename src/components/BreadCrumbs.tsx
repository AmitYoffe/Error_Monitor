import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import capitalizeWord from '@/lib/capitalizeWord';
import { useLocation } from 'react-router-dom';

export default function BreadCrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const capitalizedPathnames = pathnames.map(capitalizeWord);
  const backPath = '/' + pathnames.slice(0, -1).join('/');

  let formattedPathName = pathnames[0].split('%20').join(' ');
  if (pathnames.includes('sn')) {
    formattedPathName = `Social Networks - ${formattedPathName}`;
  } else if (pathnames.includes('ag')) {
    formattedPathName = `Agencies - ${formattedPathName}`;
  }

  return (
    <Breadcrumb className="absolute left-2 top-2">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={pathnames.length >= 3 ? backPath : undefined}>
            {formattedPathName}
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathnames.length >= 3 ? (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                {/* Take last item of pathnames */}
                {capitalizedPathnames.slice(-1)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        ) : null}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
