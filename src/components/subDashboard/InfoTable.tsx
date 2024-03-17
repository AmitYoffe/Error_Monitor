import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Status } from './Status';

interface InfoTableProps {
  data: Record<string, string | number>[];
  headers: string[];
  status: Status;
  connection: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
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
  handleInputChange,
  search,
}: InfoTableProps) {
  const navigation = useNavigate();

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
          className="my-auto w-2/12 transition-all duration-200 ease-in-out focus:w-3/12"
        />
      </div>
      <Table className='border-t-2'>
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
              onClick={() => navigation(`${row.id}`)}
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

// TODO: make search field functional
// TODO: Add a pretty scrollbar to table that is reactive to dark mode
// scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent scrollbar-thumb-custom-border-radius
