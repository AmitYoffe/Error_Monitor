import { getLogs } from '@/utils';
import { LoaderFunctionArgs } from 'react-router-dom';

export async function loader({ params }: LoaderFunctionArgs) {
  const connection = params.connection;
  const connectionLogs = await getLogs();

  return { connection, connectionLogs };
}