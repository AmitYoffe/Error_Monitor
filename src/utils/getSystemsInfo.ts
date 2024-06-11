interface AppInfo {
  name: string;
  color: string;
  reasons: string[];
  raw_data: Record<string, unknown>;
}

interface HighLevelAppCategory {
  color: string;
  apps: AppInfo[];
}

export interface SystemsInfo {
  total_system_color: 'green' | 'yellow' | 'red';
  high_level_apps: {
    analyzing: HighLevelAppCategory;
    collecting: HighLevelAppCategory;
    Enrichment: HighLevelAppCategory;
    Databases: HighLevelAppCategory;
  };
  data_graphs: Record<string, unknown>;
}

export default function getSystemsInfo(): SystemsInfo {
  const systemInfo: SystemsInfo = {
    total_system_color: 'green',
    high_level_apps: {
      analyzing: {
        color: 'green',
        apps: [
          {
            name: 'Ingestion',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Intuview',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Siren',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
        ],
      },
      collecting: {
        color: 'green',
        apps: [
          {
            name: 'Twitter Collecting',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'FB',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'TG channels',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'TW users',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Voyager',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
        ],
      },
      Enrichment: {
        color: 'green',
        apps: [
          {
            name: 'Translation',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Embedding',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Clustering',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Relations',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
        ],
      },
      Databases: {
        color: 'green',
        apps: [
          {
            name: 'Mongo',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
          {
            name: 'Elastic',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
        ],
      },
    },
    data_graphs: {},
  };

  return systemInfo;
}

// This function will take the big getData json and return the relevant system information
// Todo: create and manage new types of these new info structures
