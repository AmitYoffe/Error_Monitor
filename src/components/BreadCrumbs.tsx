import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import capitalizeWord from '@/lib/capitalizeWord';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function BreadCrumbs() {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  const capitalizedPathnames = pathnames.map(capitalizeWord);
  const backPath = '/' + pathnames.slice(0, -1).join('/');

  let formattedPathName = pathnames[0]?.split('%20').join(' ');
  if (pathnames.includes('sn')) {
    formattedPathName = `Social Networks - ${formattedPathName}`;
  } else if (pathnames.includes('ag')) {
    formattedPathName = `Agencies - ${formattedPathName}`;
  }

  // Set showBreadcrumb to true after component mounts
  useEffect(() => {
    setShowBreadcrumb(true);
  }, [pathname]);

  return (
    <Breadcrumb
      className="p-1"
      style={{ opacity: showBreadcrumb ? 1 : 0, transition: 'opacity 0.5s' }}
    >
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
