export type StatusType = 'operational' | 'unstable' | 'no-connection';

export interface ISocialNetwork {
  lastTimeRecieved: string;
  info: string;
  status: StatusType;
}

export interface IAgency {
  lastTimeRecieved: string;
  info: string;
  status: StatusType;
}
