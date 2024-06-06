import { capitalizeWord } from '@/utils/capitalizeWord';
import { locationInfoType } from '@/utils/getLocationInfo';
import moment from 'moment';
import { toast } from 'sonner';
import ConditionalLink from '../ConditionalLink';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

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

  // Check for networkInfo objects that do not contain at least one relevant field or is empty,
  // they should not be able to navigate you anywhere
  const noFollowUpLink =
    !networkInfo ||
    // Object.keys(networkInfo).length === 0;
    (!networkInfo.last_time &&
      !networkInfo.docs_count &&
      !networkInfo.timestamp &&
      !networkInfo.docs_count_3_days);

  // const info: { title: string; description: string }[] = [
  //   {
  //     title: 'Last Time Received',
  //     description: networkInfo?.last_time
  //       ? moment(networkInfo.last_time).format('DD/MM/YYYY - HH:mm')
  //       : '- no information -',
  //   },
  //   {
  //     title: 'Docs from 3 days ago',
  //     description: networkInfo?.docs_count_3_days ?? '- no information -',
  //   },
  //   {
  //     title: 'Total Docs',
  //     description: networkInfo?.docs_count ?? '- no information -',
  //   },
  //   {
  //     title: 'Last Time Updated',
  //     description: networkInfo?.timestamp
  //       ? moment(networkInfo.timestamp).format('DD/MM/YYYY - HH:mm')
  //       : '- no information -',
  //   },
  // ];

  //   return (
  //     <ConditionalLink
  //       to={!noFollowUpLink ? `${location}/${urlArgument}` : undefined}
  //     >
  //       <Card
  //         className={`flex-col p-2 hover:bg-secondary active:border-primary
  //         ${noFollowUpLink ? 'transition-colors duration-100 active:border-b-rose-700' : ''} `}
  //         // Shows a toast component when this component doesn't have information to show in the following page
  //         onClick={() =>
  //           noFollowUpLink && location
  //             ? toast(
  //                 `This network choice for '${capitalizeWord(location)}' has no information`,
  //                 {
  //                   description: 'try another network...',
  //                   action: {
  //                     label: 'Close',
  //                     onClick: () => console.log('Close'),
  //                   },
  //                 },
  //               )
  //             : null
  //         }
  //       >
  //         <CardTitle className="p-2 text-center underline">
  //           {networkBoxTitle}
  //         </CardTitle>
  //         {info.map((info) => (
  //           <CardDescription
  //             className="mx-10 flex justify-between"
  //             key={info.title}
  //           >
  //             {info.title}:<div>{info.description}</div>
  //           </CardDescription>
  //         ))}
  //       </Card>
  //     </ConditionalLink>
  //   );
  // }
  return (
    <ConditionalLink
      to={!noFollowUpLink ? `${location}/${urlArgument}` : undefined}
    >
      <Card
        className={`flex-col p-2 hover:bg-secondary active:border-primary
      ${noFollowUpLink ? 'transition-colors duration-100 active:border-b-rose-700' : ''} `}
        // Shows a toast component when this component doesn't have information to show in the following page
        onClick={() =>
          noFollowUpLink && location
            ? toast(
                `This network choice for '${capitalizeWord(location)}' has no information`,
                {
                  description: 'try another network...',
                  action: {
                    label: 'Close',
                    onClick: () => console.log('Close'),
                  },
                },
              )
            : null
        }
      >
        <CardTitle className="pb-3 pt-1 text-center">
          {networkBoxTitle}
          <Separator className="mx-auto w-24" />
        </CardTitle>
        {/* Doc count fields */}
        <div className="mb-2 flex justify-between">
          <div className="flex flex-col justify-around gap-1">
            <CardDescription className="mx-2 flex w-[220px] justify-between">
              <p>Docs 3 days ago: </p>
              <p className="font-semibold">
                {networkInfo?.docs_count_3_days ?? '- no information -'}
              </p>
            </CardDescription>
            <CardDescription className="mx-2 flex w-[220px] justify-between">
              <p>Total Docs: </p>
              <p className="font-semibold">
                {networkInfo?.docs_count ?? '- no information -'}
              </p>
            </CardDescription>
          </div>
          {/* Date fields */}
          <div className="flex flex-col justify-around">
            <CardDescription className="mx-2 flex w-[260px] justify-between">
              <p>Last Time Updated: </p>
              <p className="font-semibold">
                {networkInfo?.last_time
                  ? moment(networkInfo.last_time).format('DD/MM/YYYY - HH:mm')
                  : '- no information -'}
              </p>
            </CardDescription>
            <CardDescription className="mx-2 flex w-[260px] justify-between">
              <p className="grow">Last Time Received: </p>
              <p className="font-semibold">
                {networkInfo?.timestamp
                  ? moment(networkInfo.timestamp).format('DD/MM/YYYY - HH:mm')
                  : '- no information -'}
              </p>
            </CardDescription>
          </div>
        </div>
      </Card>
    </ConditionalLink>
  );
}
