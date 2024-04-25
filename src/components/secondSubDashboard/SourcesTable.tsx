import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ParsedSource } from '@/types/NetworkType';
import moment from 'moment';
import { ChangeEvent } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface SourcesTableProps {
  data: ParsedSource[];
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
}

export default function SourcesTable({
  data,
  handleInputChange,
  search,
}: SourcesTableProps) {
  const filteredData = search
    ? data.filter(
        (dataItem) =>
          dataItem.entity_names &&
          dataItem.entity_names.map((entity) =>
            entity.entity_name.includes(search.trim()),
          ),
      )
    : data;

  return (
    <Card className="container flex max-h-[820px] flex-col justify-center p-2">
      <div className="flex items-start justify-between p-2">
        <div className="flex flex-col p-2">
          <h2 className="text-2xl font-bold tracking-tight">{'Sources'}</h2>
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="cursor-pointer hover:bg-accent active:border-b-slate-950"
            >
              <TableCell>
                {row.entity_names &&
                  row.entity_names.map((entity, index) => (
                    <div key={index}>{entity.entity_name}</div>
                  ))}
              </TableCell>
              <TableCell>{row.sourceID} id</TableCell>
              <TableCell>
                {moment(row.last_time).format('DD/MM/YYYY - HH:mm:ss')}
              </TableCell>
              <TableCell>{row.docs_count_3_days}</TableCell>
              <TableCell>{row.docs_count}</TableCell>
              {/* <TableCell>{statusIcons[row.status]}</TableCell> */}
            </TableRow>
          ))}
          <Separator className="max-w-fit" />
        </TableBody>
      </Table>
    </Card>
  );
}
//TODO: fix source name logic (entity_names.entity_name)
//TODO:
// Be able to take the key of these objects:
// And use them as Source ID in this table
// "sources": {
//   "1508848274303819788": {
//     "docs_count": 1336,
//     "docs_count_3_days": 0,
//     "last_time": "2024-03-23T08:04:58.000Z",
//     "entity_names": [
//       { "entity_name": "الميادين لبنان", "doc_count": 1336 }
//     ]
//   },
//   "1590243665192042496": {
//     "docs_count": 1313,
//     "docs_count_3_days": 0,
//     "last_time": "2024-03-23T09:14:51.000Z",
//     "entity_names": [
//       { "entity_name": "قناة المنار", "doc_count": 1313 }
//     ]
//   },
// }
//
