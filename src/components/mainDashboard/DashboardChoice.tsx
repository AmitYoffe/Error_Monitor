import { getDashboardInfo } from '@/lib/getDashboardInfo';
import { IAgency, ISocialNetwork, StatusType } from '@/types/dashboardTypes';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardDescription, CardTitle } from '../ui/card';

interface IDashboardChoice {
  iconSrc: string;
  location: string;
  SocialNetworks?: ISocialNetwork;
  Agencies?: IAgency;
}

export default function DashboardChoice({
  iconSrc,
  location,
  SocialNetworks,
  Agencies,
}: IDashboardChoice) {
  // States used to track hovering of certain areas of the component
  const [agencyHovered, setAgencyHovered] = useState(false);
  const [snHovered, setSnHovered] = useState(false);
  const [locationHovered, setLocationHovered] = useState(false);

  const [totalDocsSn, setTotalDocsSn] = useState<number | string | null>(null);
  const [docs3DaysAgoSn, setDocs3DaysAgoSn] = useState<number | string | null>(null);
  const [lastTimeRecievedSn, setLastTimeRecievedSn] = useState<number | string | null>(null);

  const [totalDocsAgency, setTotalDocsAgency] = useState<number | string | null>(null);
  const [docs3DaysAgoAgency, setDocs3DaysAgoAgency] = useState<number | string | null>(null);
  const [lastTimeRecievedAgency, setLastTimeRecievedAgency] = useState<number | string | null>(null);

  useEffect(() => {
    const fetchDocsCount = async () => {
      try {
        const totalDocsSn = await getDashboardInfo({ location, docInfoField: 'docs_count', networkType: 'sn' });
        const docs3DaysAgoSn = await getDashboardInfo({ location, docInfoField: 'docs_count_3_days', networkType: 'sn' });
        const lastTimeRecievedSn = await getDashboardInfo({ location, docInfoField: 'last_time', networkType: 'sn' });

        const totalDocsAgency = await getDashboardInfo({ location, docInfoField: 'docs_count', networkType: 'article' });
        const docs3DaysAgoAgency = await getDashboardInfo({ location, docInfoField: 'docs_count_3_days', networkType: 'article' });
        const lastTimeRecievedAgency = await getDashboardInfo({ location, docInfoField: 'last_time', networkType: 'article' });
        setTotalDocsSn(totalDocsSn);
        setDocs3DaysAgoSn(docs3DaysAgoSn);
        setLastTimeRecievedSn(lastTimeRecievedSn);
        setTotalDocsAgency(totalDocsAgency);
        setDocs3DaysAgoAgency(docs3DaysAgoAgency);
        setLastTimeRecievedAgency(lastTimeRecievedAgency);
      } catch (error) {
        console.error('Error fetching docs:', error);
        // If there's an error, set the state with 'no information'
        setTotalDocsSn('no information');
        setDocs3DaysAgoSn('no information');
        setLastTimeRecievedSn('no information');
        setTotalDocsAgency('no information');
        setDocs3DaysAgoAgency('no information');
        setLastTimeRecievedAgency('no information');
      }
    };

    fetchDocsCount();
  }, [location]);

  const statusVisualizer: Record<StatusType, string> = {
    operational: '#22c55e',
    unstable: '#f59e0b',
    'no-connection': '#ef4444',
  };
  let statusIndicatorColor = '#22c55e';

  if (
    Agencies?.status === 'no-connection' ||
    SocialNetworks?.status === 'no-connection'
  ) {
    statusIndicatorColor = statusVisualizer['no-connection'];
  } else if (
    Agencies?.status === 'unstable' ||
    SocialNetworks?.status === 'unstable'
  ) {
    statusIndicatorColor = statusVisualizer['unstable'];
  }

  return (
    <div className="h-4/5">
      <Card className='flex-col p-2'
        style={{
          border: locationHovered ? `1px solid ${statusIndicatorColor}` : undefined,
        }}
        onMouseOver={() => setLocationHovered(true)}
        onMouseOut={() => setLocationHovered(false)}
      >
        <p className="flex flex-col items-center justify-between rounded-md border-2 p-4">
          <img src={iconSrc} alt={`${location} png`} className="mb-3 h-6 w-6" />
          {location}
        </p>
        <Link to={`${location}/sn`}>
          <Card
            className='flex-col p-2'
            style={{
              border: snHovered ? `1px solid ${statusVisualizer[SocialNetworks!.status]}` : undefined,
            }}
            onMouseOver={() => setSnHovered(true)}
            onMouseOut={() => setSnHovered(false)}
          >
            <CardTitle className="p-2 text-center underline">
              Social Networks
            </CardTitle>
            <CardDescription className="mx-12 flex justify-between">
              Last Time Recieved: <div>{moment(lastTimeRecievedSn).format('DD/MM/YYYY - HH:mm:ss')}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Docs from 3 days ago: <div>{docs3DaysAgoSn}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Total Docs: <div>{totalDocsSn}</div>
            </CardDescription>
          </Card>
        </Link>
        <Link to={`${location}/ag`}>
          <Card
            className='flex-col p-2'
            style={{
              border: agencyHovered ? `1px solid ${statusVisualizer[Agencies!.status]}` : undefined,
            }}
            onMouseOver={() => setAgencyHovered(true)}
            onMouseOut={() => setAgencyHovered(false)}
          >
            <CardTitle className="p-2 text-center underline">
              Agencies
            </CardTitle>
            <CardDescription className="mx-12 flex justify-between">
              Last Time Recieved: <div>{moment(lastTimeRecievedAgency).format('DD/MM/YYYY - HH:mm:ss')}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Docs from 3 days ago: <div>{docs3DaysAgoAgency}</div>
            </CardDescription>
            <CardDescription className="mx-12 flex justify-between">
              Total Docs: <div>{totalDocsAgency}</div>
            </CardDescription>
          </Card>
        </Link>
      </Card >
    </div >
  );
}

//TODO: Add some logic that will cause the parent dashboard statuses actually update according to the logs status values
