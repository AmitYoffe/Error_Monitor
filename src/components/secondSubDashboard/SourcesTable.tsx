import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ParsedNetwrokInfo } from '@/types/NetworkType';
import { ChangeEvent } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface SourcesTableProps {
  data: ParsedNetwrokInfo[];
  connection: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
}

export default function SourcesTable({
  data,
  handleInputChange,
  search,
  connection,
}: SourcesTableProps) {
  const filteredData = search
    ? data.filter(
        (dataItem) => dataItem.name && dataItem.name.includes(search.trim()),
      )
    : data;

  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <h2 className="text-2xl font-bold tracking-tight">{`${connection} Sources`}</h2>
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
            <TableHead>Source Name</TableHead>
            <TableHead>Source ID</TableHead>
            <TableHead>Last Time Recieved</TableHead>
            <TableHead>Docs 3 Days Ago</TableHead>
            <TableHead>Total Docs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="cursor-pointer hover:bg-accent active:border-slate-950"
            >
              <TableCell>{row.name}</TableCell>
              <TableCell> {/* {row.id}*/} id</TableCell>
              <TableCell>{row.last_time}</TableCell>
              <TableCell>
                {/* {row.docs_count_3_days}*/} docs_count_3_days
              </TableCell>
              <TableCell>{row.docs_count}</TableCell>
              {/* <TableCell>{statusIcons[row.status]}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
