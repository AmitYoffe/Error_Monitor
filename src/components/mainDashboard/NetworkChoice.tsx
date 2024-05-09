import { getLocationInfoType } from '@/lib/getLocationInfo';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';

interface NetworkChoiceProps {
  networkInfo?: getLocationInfoType;
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

  return (
    <Link to={noFollowUpLink ? '/' : `${location}/${urlArgument}`}>
      <Card
        className={`flex-col p-2 hover:bg-secondary${
          noFollowUpLink
            ? 'transition-colors duration-100 active:border-b-rose-400'
            : ''
        }
          `}
        // style={{
        //   border: networkHovered ? `1px solid ${statusColor}` : undefined,
        // }}
        // onMouseOver={() => setNetworkHovered(true)}
        // onMouseOut={() => setNetworkHovered(false)}
      >
        <CardTitle className="p-2 text-center underline">
          {networkBoxTitle}
        </CardTitle>
        <CardDescription className="mx-12 flex justify-between">
          Last Time Recieved:
          <div>
            {networkInfo?.last_time
              ? moment(networkInfo.last_time).format('DD/MM/YYYY - HH:mm')
              : '- no information -'}
          </div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Docs from 3 days ago:{' '}
          <div>{networkInfo?.docs_count_3_days || '- no information -'}</div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Total Docs:
          <div>{networkInfo?.docs_count || '- no information -'}</div>
        </CardDescription>
      </Card>
    </Link>
  );
}
