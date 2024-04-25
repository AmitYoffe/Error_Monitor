export type Location = {
  [key: string]: {
    sn: Network;
    article?: Network;
  };
};

type Network = {
  docs_count: number;
  docs_count_3_days: number;
  last_time: string;
  networks: { [networkId: string]: NetworkInfo };
};

type NetworkInfo = {
  docs_count: number;
  docs_count_3_days: number;
  last_time: string;
  sources?: { [sourceId: string]: Source };
};

export interface ParsedNetwrokInfo extends NetworkInfo {
  name: string;
}

export type Source = {
  docs_count: number;
  docs_count_3_days: number;
  last_time: string;
  entity_names?: EntityName[];
};

export interface ParsedSource extends Source {
  sourceID: string;
}

type EntityName = {
  entity_name: string;
  doc_count: number;
};

