// interface extractSystemStatusesProps {
//   locationsInfo: Location;
// }

export default function extractSystemStatuses() {
//     {
//   locationsInfo,
// }: extractSystemStatusesProps
  const extractedSystemInfo = {
    total_system_color: 'green',
    high_level_apps: {
      collecting: {
        color: 'green',
        apps: [
          {
            name: 'Twitter Collecting',
            color: 'green',
            reasons: [''],
            raw_data: {},
          },
        ],
      },
      analyzing: {
        color: 'green',
      },
    },
    data_graphs: {},
  };

  return extractedSystemInfo;
}

// Todo: function that will take the big getData json and return the relevant information about the statuses of different systems
// && create and manage new types of these new info structures
