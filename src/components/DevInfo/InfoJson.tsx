import { Card } from '../ui/card';
import CopyButton from './CopyButton';

export default function InfoJson() {
  const infoJson = {
    app_name: 'Facebook Self Collecting',
    color: 'green',
    last_time_data_entered: null,
    last_update: '2024-05-29T17:32:58.973000',
    raw_data: {
      amount_avatars_available: 162,
      fb_group_member_job_status: {
        app_name: 'fb-collecting-open-group-member-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_group_post_commentators_job_status: {
        app_name: 'fb-collecting-open-group-comment-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_group_post_job_status: {
        app_name: 'fb-collecting-open-group-post-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_page_post_comment_job_status: {
        app_name: 'fb-collecting-open-page-comment-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_page_post_job_status: {
        app_name: 'fb-collecting-open-page-post-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_user_friends_job_status: {
        app_name: 'fb-collecting-open-user-member-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_user_post_commentators_job_status: {
        app_name: 'fb-collecting-open-user-comment-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      fb_user_post_job_status: {
        app_name: 'fb-collecting-open-user-post-bias',
        app_type: 'job',
        is_healthy: true,
        is_pod_pending: false,
        is_running: true,
        last_schedule_time: null,
        reason: null,
      },
      last_time_collected_group_post: '2024-05-19T15:39:34.261000',
      last_time_collected_group_post_comment: '2024-05-19T15:20:31.958000',
      last_time_collected_page_post: '2024-05-29T17:20:31.279000',
      last_time_collected_page_post_comment: '2024-05-29T17:30:17.132000',
      last_time_collected_user_post: '2024-05-29T14:55:01.178000',
      last_time_collected_user_post_comment: '2024-05-29T14:53:58.122000',
      task_name: 'task_check_self_collecting_status',
      timestamp: '2024-05-29T17:32:58.973000',
    },
    reasons: [],
  };

  return (
    <Card className="flex-2 relative h-[calc(100vh-390px)] overflow-y-scroll">
      <div className="absolute right-2 top-2">
        <CopyButton text={`${JSON.stringify(infoJson)}`} />
      </div>
      <pre className="m-2">{JSON.stringify(infoJson, null, 2)}</pre>
    </Card>
  );
}

//Todo: fix this height so it's dynamic according to the dialogs height
