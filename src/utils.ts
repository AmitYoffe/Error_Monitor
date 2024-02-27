import uniqid from "uniqid";
import { ConnectionLog } from "./components/ConnectionTable";

export async function getLogs() {
    const connectionLogs: ConnectionLog[] = [
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'no-connection',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'unstable',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'unstable',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'unstable',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'unstable',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'unstable',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
        {
            logid: uniqid('id-'),
            status: 'operational',
            time: new Date().toISOString(),
        },
    ];
    
    return connectionLogs
}