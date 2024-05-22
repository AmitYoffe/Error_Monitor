import { capitalizeWord } from '@/utils/capitalizeWord';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';

export default function BreadCrumbs() {
  const [showBreadcrumb, setShowBreadcrumb] = useState(false);

  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);
  const capitalizedPathnames = pathnames.map(capitalizeWord);
  const backPath = '/' + pathnames.slice(0, -1).join('/');

  let formattedPathName = capitalizeWord(pathnames[0]?.split('%20').join(' '));
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
    <>
      {pathnames.length >= 1 ? (
        <Breadcrumb
          style={{
            opacity: showBreadcrumb ? 1 : 0,
            transition: 'opacity 0.5s',
          }}
        >
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink to="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink to={pathnames.length >= 3 ? backPath : '#'}>
                {formattedPathName}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.length >= 3 ? (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink to={'#'}>
                    {/* Take last item of pathnames */}
                    {capitalizedPathnames.slice(-1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}
    </>
  );
}
