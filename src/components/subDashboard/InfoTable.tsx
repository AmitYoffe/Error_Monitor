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

export interface ConnectionLog {
  logid: string;
  time: string;
  status: Status;
}

interface InfoTableProps {
  data: Record<string, string | number>[];
  headers: string[];
}

export function InfoTable({ data, headers }: InfoTableProps) {
  return (
    <Card>
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
              className="hover:bg-accent active:border-slate-950"
            >
              {Object.values(row).map((value, columnIndex) => (
                <TableCell key={columnIndex}>
                  <Link to="testURL">{value}</Link>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

//TODO: add search bar for the tables
//TODO: decide on logic to show the first and second sub dashboards