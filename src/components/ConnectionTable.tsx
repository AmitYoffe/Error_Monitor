import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Status, statusIcons } from './Status';
import { Undo2 } from 'lucide-react';

export interface ConnectionLog {
  logid: string;
  time: string;
  status: Status;
}

interface ConnectionTableProps {
  ConnectionLogs: ConnectionLog[];
}

export function ConnectionTable({ ConnectionLogs }: ConnectionTableProps) {
  return (
    <>
      <a href="/" className="absolute left-1 top-1">
        <Undo2 />
      </a>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Log Id</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ConnectionLogs.map((connectionLog) => (
            <TableRow key={connectionLog.time}>
              <TableCell className="font-medium">
                {connectionLog.logid}
              </TableCell>
              <TableCell>{connectionLog.time}</TableCell>
              <TableCell>{connectionLog.status}</TableCell>
              <TableCell className="text-right">
                {statusIcons[connectionLog.status]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
