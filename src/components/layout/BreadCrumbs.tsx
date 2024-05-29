import { capitalizeWord } from '@/utils/capitalizeWord';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ConditionalLink from '../ConditionalLink';
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
              <BreadcrumbLink
                to="/"
                style={{
                  cursor: pathnames.length >= 1 ? 'pointer' : 'default',
                }}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <ConditionalLink
                to={pathnames.length >= 3 ? backPath : undefined}
                className="transition-colors hover:text-foreground"
              >
                <p
                  style={{
                    cursor: pathnames.length >= 3 ? 'pointer' : 'default',
                  }}
                >
                  {formattedPathName}
                </p>
              </ConditionalLink>
            </BreadcrumbItem>
            {pathnames.length >= 3 ? (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="cursor-default transition-colors hover:text-foreground">
                  <p>
                    {/* Take last item of pathnames */}
                    {capitalizedPathnames.slice(-1)}
                  </p>
                </BreadcrumbItem>
              </>
            ) : null}
          </BreadcrumbList>
        </Breadcrumb>
      ) : null}
    </>
  );
}
