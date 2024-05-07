import { getDashboardInfo } from "@/lib/getDashboardInfo";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardTitle } from "../ui/card";

interface NetworkChoiceProps {
  location: string;
  statusColor: string;
  title: string;
}

export default function NetworkChoice({ location, statusColor, title, }: NetworkChoiceProps) {
  const [networkHovered, setNetworkHovered] = useState(false);
  const [totalDocs, setTotalDocs] = useState<number | string | null>(null);
  const [docs3DaysAgo, setDocs3DaysAgo] = useState<number | string | null>(null);
  const [lastTimeRecieved, setLastTimeRecieved] = useState<number | string | null>(null);

  const urlArgument = title === 'Agencies' ? 'ag' : 'sn'

  useEffect(() => {
    const fetchDocsCount = async () => {
      try {
        const totalDocs = await getDashboardInfo({ location, docInfoField: 'docs_count', networkType: 'sn' });
        const docs3DaysAgo = await getDashboardInfo({ location, docInfoField: 'docs_count_3_days', networkType: 'sn' });
        const lastTimeRecieved = await getDashboardInfo({ location, docInfoField: 'last_time', networkType: 'sn' });
        // const locationInfo = await getLocationInfo("")
        // const {totalDocs,
        //   docs3DaysAgo,
        //   lastTimeRecieved} = locationInfo["sn"]
        setTotalDocs(totalDocs);
        setDocs3DaysAgo(docs3DaysAgo);
        setLastTimeRecieved(lastTimeRecieved);

      } catch (error) {
        console.error('Error fetching docs:', error);
        // If there's an error, set the state with 'no information'
        setTotalDocs('no information');
        setDocs3DaysAgo('no information');
        setLastTimeRecieved('no information');
      }
    };

    fetchDocsCount();
  }, [location]);

  return (
    <Link to={`${location}/${urlArgument}`}>
      <Card
        className='flex-col p-2'
        style={{
          border: networkHovered ? `1px solid ${statusColor}` : undefined,
        }}
        onMouseOver={() => setNetworkHovered(true)}
        onMouseOut={() => setNetworkHovered(false)}
      >
        <CardTitle className="p-2 text-center underline">
          {title}
        </CardTitle>
        <CardDescription className="mx-12 flex justify-between">
          Last Time Recieved: <div>{moment(lastTimeRecieved).format('DD/MM/YYYY - HH:mm:ss')}</div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Docs from 3 days ago: <div>{docs3DaysAgo}</div>
        </CardDescription>
        <CardDescription className="mx-12 flex justify-between">
          Total Docs: <div>{totalDocs}</div>
        </CardDescription>
      </Card>
    </Link>
  )
}

// TODO: Add skeleton onload, because it takes a long time to load