import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
import { Status } from './Status';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';

interface InfoTableProps {
  data: Record<string, string | number>[];
  headers: string[];
  status: Status;
  connection: string;
}

export const statusIcons: Record<Status, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

export function InfoTable({
  data,
  headers,
  status,
  connection,
}: InfoTableProps) {
  const navigation = useNavigate();

  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <h2 className="text-2xl font-bold tracking-tight">{connection}</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your social networks!
          </p>
        </div>
        <Input
          placeholder="search..."
          className="w-2/12 transition-all duration-200 ease-in-out focus:w-3/12 my-auto"
        />
        {/*need to add something like this:
          value={search}
          onChange={handleInputChange} */}
      </div>
      <Separator />
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="cursor-pointer hover:bg-accent active:border-slate-950"
              onClick={() => navigation(`/${row.id}`)}
            >
              {Object.values(row).map((value, columnIndex) => (
                <TableCell key={columnIndex}>{value}</TableCell>
              ))}
              <TableCell>{statusIcons[status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

//TODO: make the search bar funtiional, and add it it into this componentn instead of 'social networks'
//TODO: Add a beautiful scrollbar to tables
// scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thumb-custom-border-radius
