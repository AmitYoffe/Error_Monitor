import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ParsedNetwrokInfo } from '@/types/NetworkType';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusType } from '../mainDashboard/DashboardChoice';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface NetworksTableProps {
  data: ParsedNetwrokInfo[];
  headers: string[];
  connection: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
}

export const statusIcons: Record<StatusType, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

export function NetworksTable({
  data,
  headers,
  connection,
  handleInputChange,
  search,
}: NetworksTableProps) {
  const navigation = useNavigate();

  const filteredData = search
    ? data.filter(
        (dataItem) => dataItem.name && dataItem.name.includes(search.trim()),
      )
    : data;

  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <h2 className="text-2xl font-bold tracking-tight">{`${connection} Networks`}</h2>
          <p className="text-muted-foreground">
            Here's a list of your {headers[0]} items!
          </p>
        </div>
        <Input
          placeholder="search..."
          value={search}
          onChange={handleInputChange}
          className="my-auto w-[17%] transition-all duration-200 ease-in-out focus:w-[22%]"
        />
      </div>
      <Table className="border-t-2">
        <TableHeader>
          <TableRow>
            <TableHead>Network</TableHead>
            <TableHead>Last Time Recieved</TableHead>
            <TableHead>Total Docs</TableHead>
            <TableHead>Docs from 3 days ago</TableHead>
            {/* <TableHead>Status</TableHead> */}
          </TableRow>
        </TableHeader>
        {/*  (if the network is an Agency) || (if the JSON/db does not contatain the field "sources" for that network) then disable clicking */}
        <TableBody>
          {filteredData.map((row, rowIndex) => {
            const noFollowUpLink = !row.sources;
            console.log(noFollowUpLink);
            return (
              <TableRow
                key={rowIndex}
                className={`cursor-pointer hover:bg-accent active:border-slate-950 ${
                  noFollowUpLink
                    ? 'transition-colors duration-100 active:border-red-500'
                    : ''
                }`}
                onClick={() =>
                  noFollowUpLink ? null : navigation(`${row.name}`)
                }
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.last_time}</TableCell>
                <TableCell>{row.docs_count}</TableCell>
                {/* <TableCell >{row.docs_count_3_days as ReactNode}</TableCell> */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
}
