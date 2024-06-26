import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ParsedSource } from '@/types/networkType';
import { capitalizeWord } from '@/utils/capitalizeWord';
import getLocationIcon from '@/utils/getLocationIcon';
import moment from 'moment';
import { ChangeEvent } from 'react';
import { useTheme } from '../layout/theme-provider';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface SourcesTableProps {
  data: ParsedSource[];
  connection: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
}

export default function SourcesTable({
  data,
  connection,
  handleInputChange,
  search,
}: SourcesTableProps) {
  const { theme } = useTheme();

  const filteredData = search
    ? data.filter(
        (dataItem) =>
          dataItem.entity_names &&
          dataItem.entity_names.some((entity) =>
            entity.entity_name.includes(search.trim()),
          ),
      )
    : data;

  return (
    <Card className="container flex max-h-[800px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <div className="flex">
            <img
              src={getLocationIcon(connection, theme)}
              alt={`${connection} icon`}
              className="h-8 w-8"
            />
            <Separator orientation="vertical" className="mx-3 h-8" />
            <h2 className="text-2xl font-bold tracking-tight">{`${capitalizeWord(connection)} Sources`}</h2>
          </div>
          <p className="text-muted-foreground">
            Here's a list of your source items!
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
            <TableHead>Total Docs 3 Days</TableHead>
            <TableHead>Total Docs</TableHead>
            {/* <TableHead>Last Time Updated</TableHead> */}
            {/* <TableHead>Status</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="cursor-pointer hover:bg-accent active:border-b-slate-950"
            >
              <TableCell className="max-w-60">
                {row.entity_names ? (
                  row.entity_names.map((entity, index) => (
                    <div key={index}>{entity.entity_name}</div>
                  ))
                ) : (
                  <div>-</div>
                )}
              </TableCell>
              <TableCell>{row.sourceID}</TableCell>
              <TableCell>
                {moment(row.last_time).format('DD/MM/YYYY - HH:mm:ss')}
              </TableCell>
              <TableCell>{row.docs_count_3_days}</TableCell>
              <TableCell>{row.docs_count}</TableCell>
              {/* <TableCell>
                {moment(row.timestamp).format('DD/MM/YYYY - HH:mm:ss')}
              </TableCell> */}
              {/* <TableCell>{statusIcons[row.status]}</TableCell> */}
            </TableRow>
          ))}
          <Separator className="max-w-fit" />
        </TableBody>
      </Table>
    </Card>
  );
}
