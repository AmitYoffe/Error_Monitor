import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ConnectionLog } from '@/utils';
import { ChangeEvent, ReactNode } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface SourcesTableProps {
  data: ConnectionLog[];
  headers: string[];
  connection: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
}

export default function SourcesTable({
  data,
  headers,
  handleInputChange,
  search,
}: SourcesTableProps) {
  const filteredData = search
    ? data.filter(
        (dataItem) => dataItem.logid && dataItem.logid.includes(search.trim()),
      )
    : data;

  // TODO: Fix data[0] into something that catches the previously clicked on network
  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <h2 className="text-2xl font-bold tracking-tight">{`${data[0].logid} Sources`}</h2>
          <p className="text-muted-foreground">
            Here's a list of your soucres!
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
              className="cursor-pointer hover:bg-accent active:border-slate-950"
            >
              {Object.values(row).map((value, columnIndex) => (
                <TableCell key={columnIndex}>{value as ReactNode}</TableCell>
              ))}
              {/* <TableCell>{statusIcons[row.status]}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

// TODO: Finish this component
