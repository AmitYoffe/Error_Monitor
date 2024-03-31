import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ConnectionLog } from '@/utils';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { ChangeEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusType } from '../mainDashboard/DashboardChoice';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface InfoTableProps {
  data: ConnectionLog[];
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

export function InfoTable({
  data,
  headers,
  connection,
  handleInputChange,
  search,
}: InfoTableProps) {
  const navigation = useNavigate();

  const filteredData = search
    ? data.filter(
        (dataItem) => dataItem.logid && dataItem.logid.includes(search.trim()),
      )
    : data;

  //TODO: add some condition to disable clicking on a row if this condition is true. for each row in the map
  const noFollowUpLink = true;
  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <h2 className="text-2xl font-bold tracking-tight">{connection}</h2>
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
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className={`cursor-pointer hover:bg-accent active:border-slate-950 ${
                noFollowUpLink
                  ? 'transition-colors duration-100 active:border-red-500'
                  : ''
              }`}
              onClick={() => navigation(`${row.logid}`)}
              // onClick={
              //   !noFollowUpLink ? () => navigation(`${row.logid}`) : undefined
              // }
            >
              {Object.values(row).map((value, columnIndex) => (
                <TableCell key={columnIndex}>{value as ReactNode}</TableCell>
              ))}
              <TableCell>{statusIcons[row.status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
