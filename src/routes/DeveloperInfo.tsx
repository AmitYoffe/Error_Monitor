import shyDuck from '@/assets/images/shy-duck.png';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import TrafficLightsDisplay from '@/components/DevInfo/TrafficLightsDisplay';
import { ToolCategory } from '@/types/statusType';
import {
  DatabaseIcon,
  DownloadIcon,
  SearchIcon,
  SparklesIcon,
} from 'lucide-react';

interface IToolsCollectionJson {
  [key: string]: ToolCategory;
}

export default function DeveloperInfo() {
  const toolsCollectionJson: IToolsCollectionJson = {
    Analyzing: {
      icon: <SearchIcon className="h-5 w-5" />,
      tools: {
        Ingestion: 'operational',
        Intuview: 'operational',
        Siren: 'operational',
      },
    },
    Collecting: {
      icon: <DownloadIcon className="h-5 w-5" />,
      tools: {
        'FB groups': 'operational',
        'FB pages': 'operational',
        'FB profiles': 'unstable',
        'TG channels': 'operational',
        'TW users': 'operational',
        Voyager: 'operational',
      },
    },
    Enrichment: {
      icon: <SparklesIcon className="h-5 w-5" />,
      tools: {
        Translation: 'operational',
        Embedding: 'operational',
        Clustering: 'operational',
        Relations: 'operational',
      },
    },
    Databases: {
      icon: <DatabaseIcon className="h-5 w-5" />,
      tools: {
        Mongo: 'operational',
        Elastic: 'operational',
      },
    },
  };

  return (
    <div>
      <CardHeader className="flex w-full items-center pt-1">
        <img src={shyDuck} alt="shy traffic cone duck" className="h-20 w-16" />
        <CardTitle>Dev Error Monitor</CardTitle>
        <CardDescription>
          Lead your quest to find the errors.
          {/* This area is still under construction... */}
        </CardDescription>
      </CardHeader>
      <TrafficLightsDisplay toolsCollectionJson={toolsCollectionJson} />
    </div>
  );
}

// דוגמא ל rawdata:
//    {
//   "app_name": "Facebook Self Collecting",
//   "color": "green",
//   "last_time_data_entered": null,
//   "last_update": "2024-05-29T17:32:58.973000",
//   "raw_data": {
//     "amount_avatars_available": 162,
//     "fb_group_member_job_status": {
//       "app_name": "fb-collecting-open-group-member-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_group_post_commentators_job_status": {
//       "app_name": "fb-collecting-open-group-comment-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_group_post_job_status": {
//       "app_name": "fb-collecting-open-group-post-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_page_post_comment_job_status": {
//       "app_name": "fb-collecting-open-page-comment-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_page_post_job_status": {
//       "app_name": "fb-collecting-open-page-post-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_user_friends_job_status": {
//       "app_name": "fb-collecting-open-user-member-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_user_post_commentators_job_status": {
//       "app_name": "fb-collecting-open-user-comment-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "fb_user_post_job_status": {
//       "app_name": "fb-collecting-open-user-post-bias",
//       "app_type": "job",
//       "is_healthy": true,
//       "is_pod_pending": false,
//       "is_running": true,
//       "last_schedule_time": null,
//       "reason": null
//     },
//     "last_time_collected_group_post": "2024-05-19T15:39:34.261000",
//     "last_time_collected_group_post_comment": "2024-05-19T15:20:31.958000",
//     "last_time_collected_page_post": "2024-05-29T17:20:31.279000",
//     "last_time_collected_page_post_comment": "2024-05-29T17:30:17.132000",
//     "last_time_collected_user_post": "2024-05-29T14:55:01.178000",
//     "last_time_collected_user_post_comment": "2024-05-29T14:53:58.122000",
//     "task_name": "task_check_self_collecting_status",
//     "timestamp": "2024-05-29T17:32:58.973000"
//   },
//   "reasons": []
// }

// {
//   "total_system_color": "green",
//   "high_level_apps": {
//     "collecting": {
//       "color": "green",
//       "apps": [
//         {
//           "name": "Twitter Collecting",
//           "color": "green",
//           "reasons": [""],
//           "raw_data": {}
//         }
//       ]
//     },
//     "analyzing": {
//       "color": "green"
//     }
//   },
//   "data_graphs": {

//   }
// }
