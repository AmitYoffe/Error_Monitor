import { capitalizeWord } from '@/utils/capitalizeWord';
import { locationInfoType } from '@/utils/getLocationInfo';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

interface NetworkChoiceProps {
  networkInfo?: locationInfoType;
  location?: string;
  // statusColor: string;
}

export default function NetworkChoice({
  networkInfo,
  location,
  // statusColor,
}: NetworkChoiceProps) {
  // const [networkHovered, setNetworkHovered] = useState(false);

  const urlArgument = networkInfo?.networkType === 'article' ? 'ag' : 'sn';
  const networkBoxTitle =
    networkInfo?.networkType === 'article' ? 'Agencies' : 'Social Networks';

  // Check for networkInfo objects that do not contain at least one relevant field,
  // they should not be able to navigate you anywhere
  const noFollowUpLink =
    !networkInfo ||
    (!networkInfo.last_time &&
      !networkInfo.docs_count &&
      !networkInfo.docs_count_3_days);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (networkInfo) {
      setIsLoading(false);
    }
  }, [networkInfo]);

  return (
    <Link to={noFollowUpLink ? '/' : `${location}/${urlArgument}`}
    >
      <Card
        className={`flex-col p-2 active:border-primary hover:bg-secondary
        ${noFollowUpLink ? 'transition-colors duration-100 active:border-b-rose-700' : ''}`}
        // Shows a toast component when this component doesn't have information to show in the following page
        onClick={() =>
          noFollowUpLink && location ?
            toast(`This network choice for '${capitalizeWord(location)}' has no information`, {
              description: "try another network...",
              action: {
                label: "Close",
                onClick: () => console.log("Close"),
              },
            })
            : null
        }
      >
        <CardTitle className="p-2 text-center underline">
          {networkBoxTitle}
        </CardTitle>
        <CardDescription className="mx-12 flex justify-between">
          Last Time Recieved:
          <div>
            {isLoading ? (
              <Skeleton className="my-auto h-[9px] w-[170px]" />
            ) : (
              networkInfo?.last_time
                ? moment(networkInfo.last_time).format('DD/MM/YYYY - HH:mm')
                : '- no information -'
            )}
          </div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Docs from 3 days ago:
          <div>
            {isLoading ? (
              <Skeleton className="my-auto h-[9px] w-[110px]" />
            ) : (
              networkInfo?.docs_count_3_days || '- no information -'
            )}
          </div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Total Docs:
          <div>
            {isLoading ? (
              <Skeleton className="my-auto h-[9px] w-[132px]" />
            ) : (
              networkInfo?.docs_count || '- no information -'
            )}
          </div>
        </CardDescription>
      </Card>
    </Link>
  );
}