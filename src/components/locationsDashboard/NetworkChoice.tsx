import { capitalizeWord } from '@/utils/capitalizeWord';
import { locationInfoType } from '@/utils/getLocationInfo';
import moment from 'moment';
import { toast } from 'sonner';
import ConditionalLink from '../ConditionalLink';
import { Card, CardDescription, CardTitle } from '../ui/card';

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
  const noFollowUpLink = !networkInfo || 
  // Object.keys(networkInfo).length === 0;
  (!networkInfo.last_time &&
    !networkInfo.docs_count &&
    !networkInfo.timestamp &&
    !networkInfo.docs_count_3_days);

  const info: { title: string; description: string }[] = [
    {
      title: 'Last Time Received',
      description: networkInfo?.last_time
        ? moment(networkInfo.last_time).format('DD/MM/YYYY - HH:mm')
        : '- no information -',
    },
    {
      title: 'Docs from 3 days ago',
      description: networkInfo?.docs_count_3_days ?? '- no information -',
    },
    {
      title: 'Total Docs',
      description: networkInfo?.docs_count ?? '- no information -',
    },
    {
      title: 'Last Time Updated',
      description: networkInfo?.timestamp
        ? moment(networkInfo.timestamp).format('DD/MM/YYYY - HH:mm')
        : '- no information -',
    },
  ];

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
        <CardTitle className="p-2 text-center underline">
          {networkBoxTitle}
        </CardTitle>
        {info.map((info) => (
          <CardDescription
            className="mx-12 flex justify-between"
            key={info.title}
          >
            {info.title}:<div>{info.description}</div>
          </CardDescription>
        ))}
      </Card>
    </ConditionalLink>
  );
}
