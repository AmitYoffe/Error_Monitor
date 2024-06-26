import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ParsedNetwrokInfo } from '@/types/networkType';
import { capitalizeWord } from '@/utils/capitalizeWord';
import getLocationIcon from '@/utils/getLocationIcon';
import moment from 'moment';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useTheme } from '../layout/theme-provider';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface NetworksTableProps {
  data: ParsedNetwrokInfo[];
  connection: string;
  handleInputChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  search: string;
}

export function NetworksTable({
  data,
  connection,
  handleInputChange,
  search,
}: NetworksTableProps) {
  const navigate = useNavigate();
  const { theme } = useTheme();

  const filteredData = search
    ? data.filter(
        (dataItem) => dataItem.name && dataItem.name.includes(search.trim()),
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
            <h2 className="text-2xl font-bold tracking-tight">{`${capitalizeWord(connection)} Networks`}</h2>
          </div>
          <p className="text-muted-foreground">
            Here's a list of your network items!
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
            <TableHead>Network</TableHead>
            <TableHead>Last Time Recieved</TableHead>
            <TableHead>Total Docs</TableHead>
            <TableHead>Total Docs 3 Days</TableHead>
            {/* <TableHead>Time Stamp</TableHead> */}
            {/* <TableHead>Status</TableHead> */}
          </TableRow>
        </TableHeader>
        {/* if the JSON/db's field "sources" is an empty object then disable clicking */}
        <TableBody>
          {filteredData.map((row, rowIndex) => {
            const noFollowUpLink =
              !row.sources || !Object.keys(row.sources).length;
            return (
              <TableRow
                key={rowIndex}
                className={`cursor-pointer hover:bg-accent active:border-slate-950 ${
                  noFollowUpLink
                    ? 'transition-colors duration-100 active:border-red-500'
                    : ''
                }`}
                onClick={() =>
                  noFollowUpLink
                    ? toast(`${capitalizeWord(row.name)} has no sources`, {
                        description: 'try another network...',
                        action: {
                          label: 'Close',
                          onClick: () => console.log('Close'),
                        },
                      })
                    : navigate(`${row.name}`)
                }
              >
                <TableCell>{capitalizeWord(row.name)}</TableCell>
                <TableCell>
                  {moment(row.last_time).format('DD/MM/YYYY - HH:mm:ss')}
                </TableCell>
                <TableCell>{row.docs_count}</TableCell>
                <TableCell>{row.docs_count_3_days}</TableCell>
                {/* <TableCell>
                  {moment(row.timestamp).format('DD/MM/YYYY - HH:mm:ss')}
                </TableCell> */}
                {/* <TableCell>{statusIcons[row.status]}</TableCell> */}
              </TableRow>
            );
          })}
          <Separator className="max-w-fit" />
        </TableBody>
      </Table>
    </Card>
  );
}
