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

  const noFollowUpLink = true

  return (
    // TODO: make sure it doesn't send the user to an empty url when there is no location!
    <Link to={`${location}/${urlArgument}`}>
      <Card
        className={`flex-col p-2 hover:bg-secondary${noFollowUpLink ? 'transition-colors duration-100 active:border-b-rose-400'
          : ''}
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
            {moment(networkInfo?.last_time).format('DD/MM/YYYY - HH:mm:ss') || '- no information -'}
          </div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Docs from 3 days ago: <div>{networkInfo?.docs_count_3_days || '- no information -'}</div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Total Docs:
          <div>{networkInfo?.docs_count || '- no information -'}</div>
        </CardDescription>
      </Card>
    </Link>
  );
}
