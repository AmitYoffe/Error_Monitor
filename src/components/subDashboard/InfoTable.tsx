import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Status } from './Status';
import { Card } from '../ui/card';
import { Link } from 'react-router-dom';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

interface InfoTableProps {
  data: Record<string, string | number>[];
  headers: string[];
  status: Status;
}

export const statusIcons: Record<Status, JSX.Element> = {
  operational: <CheckCircle2 className="text-green-400" />,
  unstable: <AlertCircle className="text-yellow-400" />,
  'no-connection': <XCircle className="text-red-400" />,
};

export function InfoTable({ data, headers, status }: InfoTableProps) {
  return (
    <Card>
      <Table className="">
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
              className="hover:bg-accent active:border-slate-950"
            >
              {Object.values(row).map((value, columnIndex) => (
                <TableCell key={columnIndex}>
                  <Link to="testURL">{value}</Link>
                </TableCell>
              ))}
              <TableCell>{statusIcons[status]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

//TODO: add search bar for the tables
//TODO: decide on logic to show the first and second sub dashboards
