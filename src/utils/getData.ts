// Added a chrome extension called: "CORS Unblock" for this to work.
import { Location } from '@/types/networkType';
import axios from 'axios';
import invariant from 'tiny-invariant';

// Get env variable for network url
const NetworkURL = import.meta.env.VITE_INFO_URL;

export async function getData(): Promise<Location> {
  invariant(NetworkURL, 'Network URL cannot be empty');
  try {
    const response = await axios.get(NetworkURL, {});
    if (!response.data) {
      throw new Error(`Failed to fetch data, status ${response.status}`);
    }
    const locations: Location = response.data;
    return locations;
  } catch (error) {
    console.error('Error fetching location info:', error);
    throw error; // Rethrow the error for the caller to handle
  }
}

// export async function getData() {
//   const locations: Location = {
//     'west bank': {
//       sn: {
//         docs_count: 28750446,
//         docs_count_3_days: 124304,
//         last_time: '2024-06-03T00:53:49.000Z',
//         timestamp: '2024-06-04T07:11:49.569000',
//         networks: {
//           facebook: {
//             docs_count: 27062211,
//             docs_count_3_days: 124300,
//             last_time: '2024-06-03T00:53:49.000Z',
//             sources: {
//               '100067813066012': {
//                 docs_count: 15109826,
//                 docs_count_3_days: 64284,
//                 last_time: '2024-06-03T00:05:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الجزيرة - فلسطين',
//                     doc_count: 15109826,
//                   },
//                 ],
//               },
//               '100064654032648': {
//                 docs_count: 6344044,
//                 docs_count_3_days: 38060,
//                 last_time: '2024-06-03T00:53:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Al Jazeera Channel - قناة الجزيرة',
//                     doc_count: 6344044,
//                   },
//                 ],
//               },
//               '100064553957923': {
//                 docs_count: 1360449,
//                 docs_count_3_days: 6561,
//                 last_time: '2024-06-02T21:33:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ramallah News - رام الله الإخباري',
//                     doc_count: 1360449,
//                   },
//                 ],
//               },
//               '100069103503573': {
//                 docs_count: 1095503,
//                 docs_count_3_days: 4919,
//                 last_time: '2024-06-02T23:12:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة العربية  Al Arabiya',
//                     doc_count: 1095503,
//                   },
//                 ],
//               },
//               '100064660840454': {
//                 docs_count: 644234,
//                 docs_count_3_days: 51,
//                 last_time: '2024-06-02T20:05:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أخبار الآن - Akhbar Al Aan',
//                     doc_count: 644234,
//                   },
//                 ],
//               },
//               '100064334753768': {
//                 docs_count: 487397,
//                 docs_count_3_days: 1595,
//                 last_time: '2024-06-02T22:58:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sky News Arabia سكاي نيوز عربية',
//                     doc_count: 487397,
//                   },
//                 ],
//               },
//               '100064680819895': {
//                 docs_count: 454640,
//                 docs_count_3_days: 1370,
//                 last_time: '2024-06-02T23:00:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fajer TV تلفزيون الفجر',
//                     doc_count: 454640,
//                   },
//                 ],
//               },
//               '100067216952127': {
//                 docs_count: 242910,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-27T13:19:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'غزة الآن - Gaza Now',
//                     doc_count: 242910,
//                   },
//                 ],
//               },
//               '100068637824899': {
//                 docs_count: 226075,
//                 docs_count_3_days: 821,
//                 last_time: '2024-06-02T21:51:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'صفحه أخبار نابلس حصريا. الاحتياطيه',
//                     doc_count: 226075,
//                   },
//                 ],
//               },
//               '100064749666837': {
//                 docs_count: 143325,
//                 docs_count_3_days: 370,
//                 last_time: '2024-06-02T22:30:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عربي بوست',
//                     doc_count: 143325,
//                   },
//                 ],
//               },
//               '100044524240203': {
//                 docs_count: 109826,
//                 docs_count_3_days: 845,
//                 last_time: '2024-06-02T22:22:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الداعية محمود الحسنات Mahmoud AlHassanat l',
//                     doc_count: 109826,
//                   },
//                 ],
//               },
//               '100064741208722': {
//                 docs_count: 100261,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T10:43:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'HESPRESS',
//                     doc_count: 100261,
//                   },
//                 ],
//               },
//               '100064439452499': {
//                 docs_count: 53768,
//                 docs_count_3_days: 260,
//                 last_time: '2024-06-03T00:17:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وكالة وفا - WAFA News Agency',
//                     doc_count: 53768,
//                   },
//                 ],
//               },
//               '100064470078723': {
//                 docs_count: 48802,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-22T16:25:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Orient - أورينت',
//                     doc_count: 48802,
//                   },
//                 ],
//               },
//               '100050635352845': {
//                 docs_count: 42212,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T17:10:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فرانس 24 / FRANCE 24 Arabic',
//                     doc_count: 42212,
//                   },
//                 ],
//               },
//               '100063624884212': {
//                 docs_count: 35109,
//                 docs_count_3_days: 363,
//                 last_time: '2024-06-02T22:41:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قلقيلية الحدث',
//                     doc_count: 35109,
//                   },
//                 ],
//               },
//               '746172409': {
//                 docs_count: 32083,
//                 docs_count_3_days: 185,
//                 last_time: '2024-06-02T21:35:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mahmoud Abbas',
//                     doc_count: 32083,
//                   },
//                 ],
//               },
//               '100071548304577': {
//                 docs_count: 31491,
//                 docs_count_3_days: 295,
//                 last_time: '2024-06-02T21:44:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'نبض اريحا',
//                     doc_count: 31491,
//                   },
//                 ],
//               },
//               '100023814735093': {
//                 docs_count: 28359,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-01T19:43:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي دار علي',
//                     doc_count: 28359,
//                   },
//                 ],
//               },
//               '100066921098856': {
//                 docs_count: 28019,
//                 docs_count_3_days: 63,
//                 last_time: '2024-06-02T21:17:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المنسق',
//                     doc_count: 28019,
//                   },
//                 ],
//               },
//               '100050470840509': {
//                 docs_count: 25183,
//                 docs_count_3_days: 220,
//                 last_time: '2024-06-02T20:37:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بيت لحم الحدث +',
//                     doc_count: 25183,
//                   },
//                 ],
//               },
//               '100063778141760': {
//                 docs_count: 19406,
//                 docs_count_3_days: 156,
//                 last_time: '2024-06-02T23:02:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مدينة دورا - Dura City',
//                     doc_count: 19406,
//                   },
//                 ],
//               },
//               '100063747938715': {
//                 docs_count: 18490,
//                 docs_count_3_days: 388,
//                 last_time: '2024-06-02T23:03:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'سيلة الظهر الان',
//                     doc_count: 18490,
//                   },
//                 ],
//               },
//               '651299769': {
//                 docs_count: 16958,
//                 docs_count_3_days: 127,
//                 last_time: '2024-06-02T22:08:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علاء اللقطه',
//                     doc_count: 16958,
//                   },
//                 ],
//               },
//               '100042242543510': {
//                 docs_count: 14467,
//                 docs_count_3_days: 210,
//                 last_time: '2024-06-02T23:30:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوباس حلوه يا بلدي 2',
//                     doc_count: 14467,
//                   },
//                 ],
//               },
//               '100064708267734': {
//                 docs_count: 13113,
//                 docs_count_3_days: 102,
//                 last_time: '2024-06-02T22:28:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'التوانسة',
//                     doc_count: 13113,
//                   },
//                 ],
//               },
//               '100064615422943': {
//                 docs_count: 12951,
//                 docs_count_3_days: 460,
//                 last_time: '2024-06-02T22:02:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'جامعة النجاح الوطنية - An-Najah National University',
//                     doc_count: 12951,
//                   },
//                 ],
//               },
//               '100068901010059': {
//                 docs_count: 12216,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-02T21:03:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ramad - رماد',
//                     doc_count: 12216,
//                   },
//                 ],
//               },
//               '100064276855752': {
//                 docs_count: 12137,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-01T04:45:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Euronews عــربي',
//                     doc_count: 12137,
//                   },
//                 ],
//               },
//               '100063744438152': {
//                 docs_count: 11296,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-18T18:19:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة القدس',
//                     doc_count: 11296,
//                   },
//                 ],
//               },
//               '100064533257069': {
//                 docs_count: 10932,
//                 docs_count_3_days: 129,
//                 last_time: '2024-06-02T21:56:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'aliqtisadi.ps | الاقتصادي',
//                     doc_count: 10932,
//                   },
//                 ],
//               },
//               '100044472547986': {
//                 docs_count: 8810,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-24T11:15:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dr. Mohammad Shtayyeh الدكتور محمد اشتية',
//                     doc_count: 8810,
//                   },
//                 ],
//               },
//               '100064917841117': {
//                 docs_count: 8799,
//                 docs_count_3_days: 42,
//                 last_time: '2024-06-02T19:28:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'Palestine Red Crescent society الهلال الاحمر الفلسطيني',
//                     doc_count: 8799,
//                   },
//                 ],
//               },
//               '100064518169108': {
//                 docs_count: 8714,
//                 docs_count_3_days: 207,
//                 last_time: '2024-06-02T22:06:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الحرس الرئاسي الفلسطيني',
//                     doc_count: 8714,
//                   },
//                 ],
//               },
//               '100072216140224': {
//                 docs_count: 8574,
//                 docs_count_3_days: 116,
//                 last_time: '2024-06-02T20:12:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ديربلوط تجمعنا - Deir Ballout',
//                     doc_count: 8574,
//                   },
//                 ],
//               },
//               '100044476872333': {
//                 docs_count: 8158,
//                 docs_count_3_days: 25,
//                 last_time: '2024-06-02T21:51:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الشيخ بسام جرار',
//                     doc_count: 8158,
//                   },
//                 ],
//               },
//               '337095144759951': {
//                 docs_count: 7755,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T14:41:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'اخبار فلسطين لحظة بلحظة News Palestine',
//                     doc_count: 7755,
//                   },
//                 ],
//               },
//               '100064479080001': {
//                 docs_count: 7725,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-02T19:09:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Birzeit University | جامعة بيرزيت',
//                     doc_count: 7725,
//                   },
//                 ],
//               },
//               '100070248370493': {
//                 docs_count: 7695,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-13T04:54:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شبكة قدس الإخبارية',
//                     doc_count: 7695,
//                   },
//                 ],
//               },
//               '100069565567069': {
//                 docs_count: 7656,
//                 docs_count_3_days: 831,
//                 last_time: '2024-06-02T22:48:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الأمن الوقائي الفلسطيني',
//                     doc_count: 7656,
//                   },
//                 ],
//               },
//               '100044527595628': {
//                 docs_count: 6956,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T03:40:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محمد عساف Mohammed Assaf',
//                     doc_count: 6956,
//                   },
//                 ],
//               },
//               '100068945493022': {
//                 docs_count: 6786,
//                 docs_count_3_days: 35,
//                 last_time: '2024-06-02T20:59:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مكتب رئيس الوزراء- دولة فلسطين',
//                     doc_count: 6786,
//                   },
//                 ],
//               },
//               '100068814806485': {
//                 docs_count: 6605,
//                 docs_count_3_days: 173,
//                 last_time: '2024-06-02T21:46:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شرطة فلسطين',
//                     doc_count: 6605,
//                   },
//                 ],
//               },
//               '100077089535481': {
//                 docs_count: 6154,
//                 docs_count_3_days: 91,
//                 last_time: '2024-06-02T23:14:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'نابلس مكس Nablus Mix',
//                     doc_count: 6154,
//                   },
//                 ],
//               },
//               '100063924605448': {
//                 docs_count: 6145,
//                 docs_count_3_days: 58,
//                 last_time: '2024-06-02T17:30:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مقاطعة',
//                     doc_count: 6145,
//                   },
//                 ],
//               },
//               '100064477578725': {
//                 docs_count: 6113,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T01:47:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'صفافا الخير',
//                     doc_count: 6113,
//                   },
//                 ],
//               },
//               '100044293753051': {
//                 docs_count: 5945,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T09:30:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mahmoud Zuaiter محمود زعيتر',
//                     doc_count: 5945,
//                   },
//                 ],
//               },
//               '100068058634153': {
//                 docs_count: 5694,
//                 docs_count_3_days: 73,
//                 last_time: '2024-06-02T20:32:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بلدية نابلس Nablus Municipality l',
//                     doc_count: 5694,
//                   },
//                 ],
//               },
//               '100068384254959': {
//                 docs_count: 5385,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T21:21:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الخليل H2',
//                     doc_count: 5385,
//                   },
//                 ],
//               },
//               '100044255324675': {
//                 docs_count: 5227,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T13:38:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dr. Rami Hamdallah  - د. رامي الحمد الله',
//                     doc_count: 5227,
//                   },
//                 ],
//               },
//               '100064434682694': {
//                 docs_count: 5106,
//                 docs_count_3_days: 66,
//                 last_time: '2024-06-02T20:33:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الدفاع المدني الفلسطيني',
//                     doc_count: 5106,
//                   },
//                 ],
//               },
//               '100068849455215': {
//                 docs_count: 4902,
//                 docs_count_3_days: 55,
//                 last_time: '2024-06-02T18:50:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وزارة التربية والتعليم الفلسطينية',
//                     doc_count: 4902,
//                   },
//                 ],
//               },
//               '100044343673418': {
//                 docs_count: 4220,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T15:21:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الرئيس محمود عباس - President Mahmoud Abbas',
//                     doc_count: 4220,
//                   },
//                 ],
//               },
//               '100066509136633': {
//                 docs_count: 4202,
//                 docs_count_3_days: 15,
//                 last_time: '2024-06-01T20:59:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وزارة الصحة الفلسطينية',
//                     doc_count: 4202,
//                   },
//                 ],
//               },
//               '100068931776086': {
//                 docs_count: 4115,
//                 docs_count_3_days: 40,
//                 last_time: '2024-06-02T19:47:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Waradana',
//                     doc_count: 4115,
//                   },
//                 ],
//               },
//               '100076554232710': {
//                 docs_count: 4108,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T20:54:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'موقع نابلس الإخباري',
//                     doc_count: 4108,
//                   },
//                 ],
//               },
//               '100044297353188': {
//                 docs_count: 3904,
//                 docs_count_3_days: 51,
//                 last_time: '2024-06-02T12:10:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jibril Rajoub جبريل الرجوب',
//                     doc_count: 3904,
//                   },
//                 ],
//               },
//               '100064353445540': {
//                 docs_count: 3840,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T08:48:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '24FM',
//                     doc_count: 3840,
//                   },
//                 ],
//               },
//               '100050443991627': {
//                 docs_count: 3146,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T17:02:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohammad Dahlan  محمد دحلان',
//                     doc_count: 3146,
//                   },
//                 ],
//               },
//               '100079444290850': {
//                 docs_count: 3074,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-02T16:03:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جنين بوست',
//                     doc_count: 3074,
//                   },
//                 ],
//               },
//               '100069221559491': {
//                 docs_count: 2596,
//                 docs_count_3_days: 42,
//                 last_time: '2024-06-02T20:36:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محافظة القدس الشريف - Jerusalem Governorate',
//                     doc_count: 2596,
//                   },
//                 ],
//               },
//               '100064513459637': {
//                 docs_count: 2508,
//                 docs_count_3_days: 69,
//                 last_time: '2024-06-02T20:03:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بلدية قلقيلية - Qalqilya Municipality',
//                     doc_count: 2508,
//                   },
//                 ],
//               },
//               '100064910493120': {
//                 docs_count: 2381,
//                 docs_count_3_days: 118,
//                 last_time: '2024-06-02T20:56:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Al-Quds University  جامعة القدس',
//                     doc_count: 2381,
//                   },
//                 ],
//               },
//               '100007697165893': {
//                 docs_count: 2285,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-05T22:32:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عادل المشوخي',
//                     doc_count: 2285,
//                   },
//                 ],
//               },
//               '100044232499179': {
//                 docs_count: 2273,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T12:46:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dima Bashar ديمة بشار',
//                     doc_count: 2273,
//                   },
//                 ],
//               },
//               '100070316260022': {
//                 docs_count: 2197,
//                 docs_count_3_days: 94,
//                 last_time: '2024-06-02T21:00:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بلدية طولكرم - Tulkarm Municipality',
//                     doc_count: 2197,
//                   },
//                 ],
//               },
//               '100076292433945': {
//                 docs_count: 2190,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T19:46:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'هيئة التدريب العسكري لقوى الأمن General Military Training Commission',
//                     doc_count: 2190,
//                   },
//                 ],
//               },
//               '100064412990741': {
//                 docs_count: 2061,
//                 docs_count_3_days: 75,
//                 last_time: '2024-06-02T21:29:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Bank of Palestine | بنك فلسطين',
//                     doc_count: 2061,
//                   },
//                 ],
//               },
//               '100058254937802': {
//                 docs_count: 2052,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-07T09:46:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مؤمن مقداد',
//                     doc_count: 2052,
//                   },
//                 ],
//               },
//               '100044470898313': {
//                 docs_count: 2036,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T03:56:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الفنان محمد ابو الكايد',
//                     doc_count: 2036,
//                   },
//                 ],
//               },
//               '100064826109178': {
//                 docs_count: 2011,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T17:50:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Beit Ummar municipality - بلدية بيت أمر',
//                     doc_count: 2011,
//                   },
//                 ],
//               },
//               '100064457511061': {
//                 docs_count: 1912,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-09T21:53:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'سعير',
//                     doc_count: 1912,
//                   },
//                 ],
//               },
//               '100050630823022': {
//                 docs_count: 1764,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T08:10:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'منتمي ابو عرب - Montamy Abu Arab',
//                     doc_count: 1764,
//                   },
//                 ],
//               },
//               '100044545444673': {
//                 docs_count: 1646,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T10:53:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محمود رزق Mahmoud Rezeq',
//                     doc_count: 1646,
//                   },
//                 ],
//               },
//               '100064748233132': {
//                 docs_count: 1460,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T09:18:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'القدس بوست',
//                     doc_count: 1460,
//                   },
//                 ],
//               },
//               '100000444693745': {
//                 docs_count: 1432,
//                 docs_count_3_days: 19,
//                 last_time: '2024-06-01T17:58:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohmmed Awad',
//                     doc_count: 1432,
//                   },
//                 ],
//               },
//               '100057176121223': {
//                 docs_count: 1371,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T11:52:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جامعة فلسطين التقنية - خضوري',
//                     doc_count: 1371,
//                   },
//                 ],
//               },
//               '100044321295070': {
//                 docs_count: 1308,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-21T21:19:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dalal Abu Amneh - دلال أبو آمنة',
//                     doc_count: 1308,
//                   },
//                 ],
//               },
//               '100050291387562': {
//                 docs_count: 1306,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T09:39:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي قراقع Ali Qaraqe',
//                     doc_count: 1306,
//                   },
//                 ],
//               },
//               '100050527597804': {
//                 docs_count: 1279,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T21:39:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Firas Taweel فراس الطويل',
//                     doc_count: 1279,
//                   },
//                 ],
//               },
//               '100063906062163': {
//                 docs_count: 1279,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T16:38:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فايز عدوان - Faiyz Adwan',
//                     doc_count: 1279,
//                   },
//                 ],
//               },
//               '100070060748629': {
//                 docs_count: 1208,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T10:35:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شبكة فلسطين للأنباء شفا',
//                     doc_count: 1208,
//                   },
//                 ],
//               },
//               '100064525759006': {
//                 docs_count: 1150,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T07:35:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'اللجنة الشعبية لخدمات مخيم العروب',
//                     doc_count: 1150,
//                   },
//                 ],
//               },
//               '100044451742100': {
//                 docs_count: 1127,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T06:16:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الخليل مكس - Hebron Mix',
//                     doc_count: 1127,
//                   },
//                 ],
//               },
//               '100064866541316': {
//                 docs_count: 1085,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-02T19:25:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'Beit Fajjar Municipality   الصفحة الرسمية لـ بلدية بيت فجار',
//                     doc_count: 1085,
//                   },
//                 ],
//               },
//               '100068868124537': {
//                 docs_count: 987,
//                 docs_count_3_days: 38,
//                 last_time: '2024-06-02T21:18:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Days of Palestine',
//                     doc_count: 987,
//                   },
//                 ],
//               },
//               '100082218417486': {
//                 docs_count: 963,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-30T16:31:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وكالة فلسطين اليوم الإخبارية',
//                     doc_count: 963,
//                   },
//                 ],
//               },
//               '100026671789066': {
//                 docs_count: 889,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-02T06:56:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'تلفزيون المهد - Nativity TV . Station',
//                     doc_count: 889,
//                   },
//                 ],
//               },
//               '100050212791648': {
//                 docs_count: 796,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-13T19:42:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Shadi Al-Bourini شادي البوريني',
//                     doc_count: 796,
//                   },
//                 ],
//               },
//               '100064494020108': {
//                 docs_count: 768,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-25T05:05:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الخليل تايمز',
//                     doc_count: 768,
//                   },
//                 ],
//               },
//               '100064574393441': {
//                 docs_count: 747,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T18:58:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'صوتيات عبود البيتاوي الجاغوب',
//                     doc_count: 747,
//                   },
//                 ],
//               },
//               '100064281715960': {
//                 docs_count: 707,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-29T01:32:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الشرطة الفلسطينية   المحافظات الجنوبية',
//                     doc_count: 707,
//                   },
//                 ],
//               },
//               '100063636080815': {
//                 docs_count: 632,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-01T18:50:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Balata Y.C - مركز شباب بلاطة',
//                     doc_count: 632,
//                   },
//                 ],
//               },
//               '100064419956906': {
//                 docs_count: 628,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-02T11:20:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'Governorate of Tubas and Northern Valleys - محافظة طوباس والأغوار الشمالية',
//                     doc_count: 628,
//                   },
//                 ],
//               },
//               '100063560530651': {
//                 docs_count: 520,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-13T06:40:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'From-hebron',
//                     doc_count: 520,
//                   },
//                 ],
//               },
//               '100029060457137': {
//                 docs_count: 505,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T19:12:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'تلفزيون فلسطين الخليل    Palestine tv hebron',
//                     doc_count: 505,
//                   },
//                 ],
//               },
//               '61551946928641': {
//                 docs_count: 502,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-06T14:34:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوفان الأقصى',
//                     doc_count: 502,
//                   },
//                 ],
//               },
//               '100050570945998': {
//                 docs_count: 490,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-20T05:49:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'توفيق الطيراوي',
//                     doc_count: 490,
//                   },
//                 ],
//               },
//               '100004358341785': {
//                 docs_count: 416,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T21:06:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ahmad Arouri',
//                     doc_count: 416,
//                   },
//                 ],
//               },
//               '100064529269750': {
//                 docs_count: 406,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-01T09:35:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Halhul Municipality | بلدية حلحول',
//                     doc_count: 406,
//                   },
//                 ],
//               },
//               '100079490031352': {
//                 docs_count: 369,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-02T18:38:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محافظة بيت لحم Bethlehem Governorate',
//                     doc_count: 369,
//                   },
//                 ],
//               },
//               '100063872209565': {
//                 docs_count: 362,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-09T01:45:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ميدان القدس',
//                     doc_count: 362,
//                   },
//                 ],
//               },
//               '100044465498148': {
//                 docs_count: 336,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-12T13:12:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Yacoub Shaheen - يعقوب شاهين',
//                     doc_count: 336,
//                   },
//                 ],
//               },
//               '100070889614920': {
//                 docs_count: 316,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T18:48:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة التحرير الوطني الفلسطيني فتح اقليم جنين',
//                     doc_count: 316,
//                   },
//                 ],
//               },
//               '100044514426210': {
//                 docs_count: 271,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-04T23:22:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dr.Salam Fayyad',
//                     doc_count: 271,
//                   },
//                 ],
//               },
//               '100044625060428': {
//                 docs_count: 250,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-11T12:48:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sanaa Moussa سناء موسى',
//                     doc_count: 250,
//                   },
//                 ],
//               },
//               '100050480979825': {
//                 docs_count: 241,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-11T18:16:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Qasem Al-Najjar قاسم النجار',
//                     doc_count: 241,
//                   },
//                 ],
//               },
//               '61552215624896': {
//                 docs_count: 201,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-13T18:35:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ايمن عمر',
//                     doc_count: 201,
//                   },
//                 ],
//               },
//               '100002281607925': {
//                 docs_count: 182,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-24T05:54:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Bait Dajan Nablus',
//                     doc_count: 182,
//                   },
//                 ],
//               },
//               '213287753371500': {
//                 docs_count: 159,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-13T15:54:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أخبار بيت لحم (#بيت لحم_قوية_بأهلها)',
//                     doc_count: 159,
//                   },
//                 ],
//               },
//               '100064837985496': {
//                 docs_count: 140,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-15T13:20:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'موقع كيفك',
//                     doc_count: 140,
//                   },
//                 ],
//               },
//               '100081658222505': {
//                 docs_count: 133,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-05T10:49:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'الصفحة الرسمية للاستخبارات العسكرية الفلسطينية',
//                     doc_count: 133,
//                   },
//                 ],
//               },
//               '61552385244281': {
//                 docs_count: 119,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T17:08:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوفان الاقصى',
//                     doc_count: 119,
//                   },
//                 ],
//               },
//               '100064728577245': {
//                 docs_count: 107,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-05T02:11:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حي الشيخ جراح - Sheikh Jarah',
//                     doc_count: 107,
//                   },
//                 ],
//               },
//               '100044278007061': {
//                 docs_count: 104,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T10:31:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ameer Dandan - امير دندن',
//                     doc_count: 104,
//                   },
//                 ],
//               },
//               '100044232679218': {
//                 docs_count: 102,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-24T06:25:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المخابرات العامة الفلسطينية',
//                     doc_count: 102,
//                   },
//                 ],
//               },
//               '100068984297269': {
//                 docs_count: 102,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T17:55:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وزارة شؤون القدس',
//                     doc_count: 102,
//                   },
//                 ],
//               },
//               '100014133793157': {
//                 docs_count: 99,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-04T11:04:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ayesr Talb Daiab',
//                     doc_count: 99,
//                   },
//                 ],
//               },
//               '100064421720521': {
//                 docs_count: 91,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-17T09:35:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الشرطة الفلسطينية ::: Palestine police',
//                     doc_count: 91,
//                   },
//                 ],
//               },
//               '61552792863253': {
//                 docs_count: 89,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T01:20:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Anas Saifi ',
//                     doc_count: 89,
//                   },
//                 ],
//               },
//               '100044206937339': {
//                 docs_count: 86,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-17T09:32:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abdulfattah Owainat | عبدالفتاح عوينات',
//                     doc_count: 86,
//                   },
//                 ],
//               },
//               '100053994060381': {
//                 docs_count: 79,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-02T20:52:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بس يا زلمة Bsyazalma',
//                     doc_count: 79,
//                   },
//                 ],
//               },
//               '100053937683921': {
//                 docs_count: 69,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-04T13:53:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'درة الأقصى هنادي حلواني',
//                     doc_count: 69,
//                   },
//                 ],
//               },
//               '100028877869814': {
//                 docs_count: 66,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-23T15:07:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'النوبه الرفاعيه القادريه العبدريه .مخيم البداوي',
//                     doc_count: 66,
//                   },
//                 ],
//               },
//               '100088337044880': {
//                 docs_count: 62,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-18T18:51:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فوج عين الدلبة - برج البراجنة',
//                     doc_count: 62,
//                   },
//                 ],
//               },
//               '61552355727516': {
//                 docs_count: 56,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-21T01:26:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوفان الاقصى ',
//                     doc_count: 56,
//                   },
//                 ],
//               },
//               '100064633154382': {
//                 docs_count: 47,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-20T04:15:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'اريحا الحدث',
//                     doc_count: 47,
//                   },
//                 ],
//               },
//               '100064862731624': {
//                 docs_count: 45,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-02T12:32:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وحدة العمليات الخاصة 101 - فلسطين',
//                     doc_count: 45,
//                   },
//                 ],
//               },
//               '100076058782608': {
//                 docs_count: 42,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T20:12:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'اللجان الدعوية - مخيم الرشيدية',
//                     doc_count: 42,
//                   },
//                 ],
//               },
//               '100064316157194': {
//                 docs_count: 41,
//                 docs_count_3_days: 0,
//                 last_time: '2023-09-12T22:14:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح/ اقليم الوسطى - منطقة الشهيدة دلال المغربي',
//                     doc_count: 41,
//                   },
//                 ],
//               },
//               '100064494890324': {
//                 docs_count: 41,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-20T21:13:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'منطقة عين السلطان التنظيمية - إقليم أريحا والاغوار',
//                     doc_count: 41,
//                   },
//                 ],
//               },
//               '100064137300972': {
//                 docs_count: 40,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-09T01:45:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'تقوع الحدث +',
//                     doc_count: 40,
//                   },
//                 ],
//               },
//               '100050341876112': {
//                 docs_count: 35,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-18T18:56:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وعود مسيمي - Journalist',
//                     doc_count: 35,
//                   },
//                 ],
//               },
//               '100064755278351': {
//                 docs_count: 26,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-04T18:47:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وطن عَ وتر',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '100064767547004': {
//                 docs_count: 26,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-01T04:52:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح -اقليم الوسطى- منطقة الشهيد زياد أبو عين',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '100064795053788': {
//                 docs_count: 21,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-14T14:06:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح ll موقع النبي صالح ll إقليم رام الله والبيرة',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '100075838757468': {
//                 docs_count: 19,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-19T19:12:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مخيم البداوي',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '100064440352090': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-14T14:38:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح - منطقة تقوع التنظيمية',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '100087936213097': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-11T17:20:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Arab News',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '100063894346689': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-24T09:53:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Palestine Today',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '100064630303790': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-08T23:03:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح منطقة الشيخ رضوان غرباً - قلعة الشهيد سامي الغول',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '100066649901416': {
//                 docs_count: 13,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-09T12:13:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sheikh Jarrah units / وحدات حي الشيخ جراح',
//                     doc_count: 13,
//                   },
//                 ],
//               },
//               '100044946614323': {
//                 docs_count: 12,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-26T16:54:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مخيم الدهيشة للاجئين الفلسطينيين',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '100064489760436': {
//                 docs_count: 12,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-11T07:00:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح-منطقة ابوديس/اقليم القدس',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '100064573576470': {
//                 docs_count: 11,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-03T18:57:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ابناء الاجهزة الامنية الفلسطينية',
//                     doc_count: 11,
//                   },
//                 ],
//               },
//               '100090395373332': {
//                 docs_count: 9,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-24T08:13:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'هدهد News',
//                     doc_count: 9,
//                   },
//                 ],
//               },
//               '1168932350': {
//                 docs_count: 9,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-15T07:49:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hisham Abu Shaqrah',
//                     doc_count: 9,
//                   },
//                 ],
//               },
//               '100063525168516': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-17T10:18:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح منطقة قباطية',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '100054007160748': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-19T13:07:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ارفعوا العقوبات',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '100081464619254': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2023-09-09T02:59:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح -إقليم غرب غزة  منطقة الشهيد عماد ابو ثريا - الرمال الشمالى شرقا ً',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '100076302540270': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-07T20:43:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'كشافة الإسراء/مجموعة نابلس الكشفية (مخيم البرج الشمالي)',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//               '100066644343415': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-29T18:59:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فلسطين 27',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100068025071874': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-18T10:45:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عماد ابو عواد',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100070347040973': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-14T16:39:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مدينة الخليل - Hebron City',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100076218338096': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2023-09-29T13:16:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قائمة بيت دجن الخير',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '100084960219241': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-21T07:02:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'مؤسسة الأشبال والفتوة في مخيم البداوي حركة فتح',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//             },
//           },
//           telegram: {
//             docs_count: 1328363,
//             docs_count_3_days: 0,
//             last_time: '2024-05-19T23:10:18.000Z',
//             sources: {},
//           },
//           twitter: {
//             docs_count: 359189,
//             docs_count_3_days: 4,
//             last_time: '2024-06-01T21:01:15.000Z',
//             sources: {
//               '242987073': {
//                 docs_count: 61,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-01T21:01:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tamim Al-Barghouti',
//                     doc_count: 61,
//                   },
//                 ],
//               },
//               '705371761': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-31T12:51:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جهاد العايش',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//             },
//           },
//           instagram: {
//             docs_count: 683,
//             docs_count_3_days: 0,
//             last_time: '2024-05-19T17:27:25.000Z',
//             sources: {},
//           },
//         },
//       },
//       article: {
//         docs_count: 26732,
//         docs_count_3_days: 0,
//         last_time: '2024-05-21T10:52:40.000Z',
//         timestamp: '2024-06-04T07:11:49.781000',
//         networks: {
//           'دنيا الوطن': {
//             docs_count: 14831,
//             docs_count_3_days: 0,
//             last_time: '2024-03-19T10:10:49.000Z',
//             sources: {},
//           },
//           'وكـالـة مـعـا الاخـبـارية': {
//             docs_count: 9496,
//             docs_count_3_days: 0,
//             last_time: '2024-03-26T01:06:09.000Z',
//             sources: {},
//           },
//           maannews: {
//             docs_count: 2285,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T10:20:09.000Z',
//             sources: {},
//           },
//           alwatanvoice: {
//             docs_count: 120,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T10:52:40.000Z',
//             sources: {},
//           },
//         },
//       },
//     },
//     'gaza strip': {
//       sn: {
//         docs_count: 11974958,
//         docs_count_3_days: 51482,
//         last_time: '2024-06-03T21:48:55.000Z',
//         networks: {
//           facebook: {
//             docs_count: 9934341,
//             docs_count_3_days: 48131,
//             last_time: '2024-06-03T00:53:49.000Z',
//             sources: {
//               '100064654032648': {
//                 docs_count: 6344044,
//                 docs_count_3_days: 38060,
//                 last_time: '2024-06-03T00:53:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Al Jazeera Channel - قناة الجزيرة',
//                     doc_count: 6344044,
//                   },
//                 ],
//               },
//               '100069103503573': {
//                 docs_count: 1095503,
//                 docs_count_3_days: 4919,
//                 last_time: '2024-06-02T23:12:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة العربية  Al Arabiya',
//                     doc_count: 1095503,
//                   },
//                 ],
//               },
//               '100064660840454': {
//                 docs_count: 644234,
//                 docs_count_3_days: 51,
//                 last_time: '2024-06-02T20:05:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أخبار الآن - Akhbar Al Aan',
//                     doc_count: 644234,
//                   },
//                 ],
//               },
//               '100064334753768': {
//                 docs_count: 487397,
//                 docs_count_3_days: 1595,
//                 last_time: '2024-06-02T22:58:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sky News Arabia سكاي نيوز عربية',
//                     doc_count: 487397,
//                   },
//                 ],
//               },
//               '100065044772015': {
//                 docs_count: 333116,
//                 docs_count_3_days: 1293,
//                 last_time: '2024-06-02T21:26:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'تلفزيون فلسطين Palestine TV',
//                     doc_count: 333116,
//                   },
//                 ],
//               },
//               '100067216952127': {
//                 docs_count: 242910,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-27T13:19:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'غزة الآن - Gaza Now',
//                     doc_count: 242910,
//                   },
//                 ],
//               },
//               '100064749666837': {
//                 docs_count: 143325,
//                 docs_count_3_days: 370,
//                 last_time: '2024-06-02T22:30:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عربي بوست',
//                     doc_count: 143325,
//                   },
//                 ],
//               },
//               '100069261138894': {
//                 docs_count: 119824,
//                 docs_count_3_days: 820,
//                 last_time: '2024-06-02T23:18:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الشرق للأخبار - فلسطين',
//                     doc_count: 119824,
//                   },
//                 ],
//               },
//               '100064741208722': {
//                 docs_count: 100261,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T10:43:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'HESPRESS',
//                     doc_count: 100261,
//                   },
//                 ],
//               },
//               '100064681297127': {
//                 docs_count: 61550,
//                 docs_count_3_days: 95,
//                 last_time: '2024-06-02T22:36:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Raya FM',
//                     doc_count: 61550,
//                   },
//                 ],
//               },
//               '100064683187315': {
//                 docs_count: 54819,
//                 docs_count_3_days: 123,
//                 last_time: '2024-06-02T19:57:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'دنيا الوطن',
//                     doc_count: 54819,
//                   },
//                 ],
//               },
//               '100064470078723': {
//                 docs_count: 48802,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-22T16:25:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Orient - أورينت',
//                     doc_count: 48802,
//                   },
//                 ],
//               },
//               '100050635352845': {
//                 docs_count: 42212,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T17:10:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فرانس 24 / FRANCE 24 Arabic',
//                     doc_count: 42212,
//                   },
//                 ],
//               },
//               '100080303894303': {
//                 docs_count: 29515,
//                 docs_count_3_days: 298,
//                 last_time: '2024-06-02T20:44:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسن اصليح صحفي - eslayeh',
//                     doc_count: 29515,
//                   },
//                 ],
//               },
//               '100066921098856': {
//                 docs_count: 18691,
//                 docs_count_3_days: 23,
//                 last_time: '2024-06-01T20:32:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المنسق',
//                     doc_count: 18691,
//                   },
//                 ],
//               },
//               '100075158057882': {
//                 docs_count: 15563,
//                 docs_count_3_days: 171,
//                 last_time: '2024-06-02T21:13:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'احمد سعيد',
//                     doc_count: 15563,
//                   },
//                 ],
//               },
//               '100064708267734': {
//                 docs_count: 13113,
//                 docs_count_3_days: 102,
//                 last_time: '2024-06-02T22:28:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'التوانسة',
//                     doc_count: 13113,
//                   },
//                 ],
//               },
//               '100068901010059': {
//                 docs_count: 12216,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-02T21:03:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ramad - رماد',
//                     doc_count: 12216,
//                   },
//                 ],
//               },
//               '100064276855752': {
//                 docs_count: 12137,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-01T04:45:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Euronews عــربي',
//                     doc_count: 12137,
//                   },
//                 ],
//               },
//               '100084210780303': {
//                 docs_count: 10982,
//                 docs_count_3_days: 74,
//                 last_time: '2024-06-02T21:42:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حي الشجاعية بوابة غزة الشرقية',
//                     doc_count: 10982,
//                   },
//                 ],
//               },
//               '100059551840390': {
//                 docs_count: 10785,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-05T18:55:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'المتحدث باسم الحكومة الفلسطينية - إبراهيم ملحم',
//                     doc_count: 10785,
//                   },
//                 ],
//               },
//               '100007324004374': {
//                 docs_count: 9170,
//                 docs_count_3_days: 40,
//                 last_time: '2024-06-02T13:27:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الصحفي مثنى النجار',
//                     doc_count: 9170,
//                   },
//                 ],
//               },
//               '100044472547986': {
//                 docs_count: 8810,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-24T11:15:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dr. Mohammad Shtayyeh الدكتور محمد اشتية',
//                     doc_count: 8810,
//                   },
//                 ],
//               },
//               '100003690263518': {
//                 docs_count: 8203,
//                 docs_count_3_days: 41,
//                 last_time: '2024-06-02T21:11:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محمود خميس شراب',
//                     doc_count: 8203,
//                   },
//                 ],
//               },
//               '337095144759951': {
//                 docs_count: 7755,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T14:41:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'اخبار فلسطين لحظة بلحظة News Palestine',
//                     doc_count: 7755,
//                   },
//                 ],
//               },
//               '100070248370493': {
//                 docs_count: 7695,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-13T04:54:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شبكة قدس الإخبارية',
//                     doc_count: 7695,
//                   },
//                 ],
//               },
//               '100071952801114': {
//                 docs_count: 7425,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-24T14:17:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وكالة شهاب',
//                     doc_count: 7425,
//                   },
//                 ],
//               },
//               '100068931776086': {
//                 docs_count: 4115,
//                 docs_count_3_days: 40,
//                 last_time: '2024-06-02T19:47:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Waradana',
//                     doc_count: 4115,
//                   },
//                 ],
//               },
//               '100038352836021': {
//                 docs_count: 2479,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-06T07:34:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مخيم برج البراجنة',
//                     doc_count: 2479,
//                   },
//                 ],
//               },
//               '100083988798109': {
//                 docs_count: 2386,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T16:59:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nada Khalil',
//                     doc_count: 2386,
//                   },
//                 ],
//               },
//               '100070060748629': {
//                 docs_count: 1208,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T10:35:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شبكة فلسطين للأنباء شفا',
//                     doc_count: 1208,
//                   },
//                 ],
//               },
//               '100064872543044': {
//                 docs_count: 1087,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T11:01:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بلدية رفح',
//                     doc_count: 1087,
//                   },
//                 ],
//               },
//               '100082218417486': {
//                 docs_count: 963,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-30T16:31:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وكالة فلسطين اليوم الإخبارية',
//                     doc_count: 963,
//                   },
//                 ],
//               },
//               '100083310192144': {
//                 docs_count: 961,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-19T06:03:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الصفحة الرسمية لدعم فلسطين',
//                     doc_count: 961,
//                   },
//                 ],
//               },
//               '100053032185561': {
//                 docs_count: 741,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T14:11:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sam A. Hobi',
//                     doc_count: 741,
//                   },
//                 ],
//               },
//               '100001217785584': {
//                 docs_count: 579,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T10:24:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محمد أبو محمود',
//                     doc_count: 579,
//                   },
//                 ],
//               },
//               '61551946928641': {
//                 docs_count: 502,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-06T14:34:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوفان الأقصى',
//                     doc_count: 502,
//                   },
//                 ],
//               },
//               '1627806300716859': {
//                 docs_count: 485,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T14:02:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أخبـــار مخيـــــم الشاطـــــئ',
//                     doc_count: 485,
//                   },
//                 ],
//               },
//               '209676260691507': {
//                 docs_count: 469,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-18T19:34:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'غزة الأن',
//                     doc_count: 469,
//                   },
//                 ],
//               },
//               '580298431': {
//                 docs_count: 356,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T20:57:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zaher Birawi',
//                     doc_count: 356,
//                   },
//                 ],
//               },
//               '100063517002612': {
//                 docs_count: 291,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T13:00:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لجان العمل مخيمات لبنان',
//                     doc_count: 291,
//                   },
//                 ],
//               },
//               '61552215624896': {
//                 docs_count: 201,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-13T18:35:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ايمن عمر',
//                     doc_count: 201,
//                   },
//                 ],
//               },
//               '100007929091987': {
//                 docs_count: 186,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-12T10:19:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohannad Al Khateeb',
//                     doc_count: 186,
//                   },
//                 ],
//               },
//               '100090233753323': {
//                 docs_count: 144,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T20:21:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محمد محمد',
//                     doc_count: 144,
//                   },
//                 ],
//               },
//               '61552385244281': {
//                 docs_count: 119,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T17:08:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوفان الاقصى',
//                     doc_count: 119,
//                   },
//                 ],
//               },
//               '100078036420484': {
//                 docs_count: 117,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T13:45:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'صالح رشاد ساق الله',
//                     doc_count: 117,
//                   },
//                 ],
//               },
//               '100068812856200': {
//                 docs_count: 101,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-19T15:07:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       '\\u062d\\u0631\\u0643\\u0629 \\u0627\\u0644\\u062a\\u062d\\u0631\\u064a\\u0631 \\u0627\\u0644\\u0648\\u0637\\u0646\\u064a \\u0627\\u0644\\u0641\\u0644\\u0633\\u0637\\u064a\\u0646\\u064a \\',
//                     doc_count: 101,
//                   },
//                 ],
//               },
//               '100063757362700': {
//                 docs_count: 87,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-05T23:55:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح اقليم غرب غزة منطقه شهداء الزهراء',
//                     doc_count: 87,
//                   },
//                 ],
//               },
//               '100064832345521': {
//                 docs_count: 80,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-02T11:25:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني "فتح" / اقليم وسط خانيونس ',
//                     doc_count: 77,
//                   },
//                   {
//                     entity_name:
//                       '\\u062d\\u0631\\u0643\\u0629 \\u0627\\u0644\\u062a\\u062d\\u0631\\u064a\\u0631 \\u0627\\u0644\\u0648\\u0637\\u0646\\u064a \\u0627\\u0644\\u0641\\u0644\\u0633\\u0637\\u064a\\u0646\\u064a \\',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '61552355727516': {
//                 docs_count: 56,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-21T01:26:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوفان الاقصى ',
//                     doc_count: 56,
//                   },
//                 ],
//               },
//               '100064010115480': {
//                 docs_count: 50,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-20T23:45:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       '\\u062d\\u0631\\u0643\\u0629 \\u0641\\u062a\\u062d - \\u0625\\u0642\\u0644\\u064a\\u0645 \\u0648\\u0633\\u0637 \\u062e\\u0627\\u0646 \\u064a\\u0648\\u0646\\u0633 \\',
//                     doc_count: 50,
//                   },
//                 ],
//               },
//               '100064945116211': {
//                 docs_count: 42,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-10T20:01:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح - إقليم شمال غزة - منطقة الشهيد فضل ريحان',
//                     doc_count: 42,
//                   },
//                 ],
//               },
//               '100009312859993': {
//                 docs_count: 37,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-12T17:58:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Almaqdes Scout',
//                     doc_count: 37,
//                   },
//                 ],
//               },
//               '100064930380676': {
//                 docs_count: 33,
//                 docs_count_3_days: 0,
//                 last_time: '2022-05-11T20:49:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح إقليم شرق غزة منطقة الشهيد جمعة الجملة',
//                     doc_count: 33,
//                   },
//                 ],
//               },
//               '100063732964705': {
//                 docs_count: 32,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-17T17:21:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وكالة سوا الإخبارية',
//                     doc_count: 32,
//                   },
//                 ],
//               },
//               '100063651330756': {
//                 docs_count: 31,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-29T20:25:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح اقليم الشرقية',
//                     doc_count: 31,
//                   },
//                 ],
//               },
//               '100026831451111': {
//                 docs_count: 30,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-01T17:24:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح _ إقليم رفح منطقة الشهيد /خالد الحسن -',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '100063654042672': {
//                 docs_count: 30,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-19T23:15:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فـتـح إقليم الوسطي منطقة الشهيد خالد الحسن .',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '100068892142944': {
//                 docs_count: 27,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-10T07:46:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركــة فتــح - منطقة الشهيد عبد الكريم العكلوك "الصفحة الرسمية" ',
//                     doc_count: 24,
//                   },
//                   {
//                     entity_name:
//                       '\\u062d\\u0631\\u0643\\u0640\\u0640\\u0629 \\u0641\\u062a\\u0640\\u0640\\u062d - \\u0645\\u0646\\u0637\\u0642\\u0629 \\u0627\\u0644\\u0634\\u0647\\u064a\\u062f \\u0639\\u0628\\u062f \\u0627\\u0644\\u0643\\u0631\\u064a\\u0645 \\u0627\\u0644\\u0639\\u0643\\u0644\\u0648\\u0643 \\',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100027949375479': {
//                 docs_count: 26,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-14T18:07:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إعلام الغرب',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '100057404111562': {
//                 docs_count: 25,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-31T13:13:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مفوضية الثقافة والإعلام_ إقليم رفح',
//                     doc_count: 25,
//                   },
//                 ],
//               },
//               '100069151361526': {
//                 docs_count: 24,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-04T10:12:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح إقليم شرق غزة منطقة شهداء الفتح',
//                     doc_count: 24,
//                   },
//                 ],
//               },
//               '100087936213097': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-11T17:20:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Arab News',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '100064500378180': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2022-02-22T04:48:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح اقليم شرق غزة منطقة الشهيد ياسر عرفات الدرج',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '100064630303790': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-08T23:03:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح منطقة الشيخ رضوان غرباً - قلعة الشهيد سامي الغول',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '100069179860561': {
//                 docs_count: 13,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-06T17:44:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح اقليم شرق غزة منطقة شهداء المنطار',
//                     doc_count: 13,
//                   },
//                 ],
//               },
//               '100069243638240': {
//                 docs_count: 13,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-19T15:24:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح - منطقة شهداء دير البلح',
//                     doc_count: 13,
//                   },
//                 ],
//               },
//               '100064582457040': {
//                 docs_count: 9,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-08T14:11:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فتح اقليم شرق غزة - منطقة شهداء اجديدة',
//                     doc_count: 9,
//                   },
//                 ],
//               },
//               '100064821995352': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-31T17:58:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حركة فــتــح - منطقة شهداء المغازي',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '100064623521972': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2020-11-25T18:23:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       '\\u062d\\u0631\\u0643\\u0629 \\u0627\\u0644\\u062a\\u062d\\u0631\\u064a\\u0631 \\u0627\\u0644\\u0648\\u0637\\u0646\\u064a \\u0627\\u0644\\u0641\\u0644\\u0633\\u0637\\u064a\\u0646\\u064a \\',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '100081464619254': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2023-09-09T02:59:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة فتح -إقليم غرب غزة  منطقة الشهيد عماد ابو ثريا - الرمال الشمالى شرقا ً',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '100063862774271': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2021-04-16T19:25:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح إقليم شمال غزة منطقة الشهيد حاتم السيسي',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100064506827829': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-04-13T20:56:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح- اقليم غرب غزة',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100064795356259': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-31T15:14:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'منطقة الشهيد رسمى الطيبي',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100069253807958': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2019-05-15T12:24:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح - محافظة غزة - قاطع النصر والرمال',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100069349833808': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-09-26T21:48:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مفوضية الشبيبة الفتحاوية اقليم غرب خانيونس',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100095053024904': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-24T15:31:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح - إقليم الوسطى',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '100068904082537': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2020-11-10T21:23:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني فتح - اقليم شرق غزة',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '100064488354140': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2022-04-02T20:07:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'حركة التحرير الوطني الفلسطيني-فتح-شرق غزة منطقة الشهيد/محمدكشكو أبو كفاح',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '100082701240322': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-02T08:03:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'منطقة شهداء الدرج- إقليم شرق غزة',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//             },
//           },
//           telegram: {
//             docs_count: 1702637,
//             docs_count_3_days: 0,
//             last_time: '2024-05-20T00:31:04.000Z',
//             sources: {},
//           },
//           twitter: {
//             docs_count: 323145,
//             docs_count_3_days: 3351,
//             last_time: '2024-06-03T21:48:55.000Z',
//             sources: {
//               '2443666806': {
//                 docs_count: 32935,
//                 docs_count_3_days: 1097,
//                 last_time: '2024-06-03T21:48:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'التلفزيون العربي',
//                     doc_count: 32935,
//                   },
//                 ],
//               },
//               '128490459': {
//                 docs_count: 21666,
//                 docs_count_3_days: 780,
//                 last_time: '2024-06-03T21:30:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المركز الفلسطيني للإعلام',
//                     doc_count: 21666,
//                   },
//                 ],
//               },
//               '286018054': {
//                 docs_count: 11764,
//                 docs_count_3_days: 536,
//                 last_time: '2024-06-03T21:27:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وكالة شهاب للأنباء',
//                     doc_count: 11764,
//                   },
//                 ],
//               },
//               '377939666': {
//                 docs_count: 4895,
//                 docs_count_3_days: 209,
//                 last_time: '2024-06-03T21:34:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Roya News',
//                     doc_count: 4895,
//                   },
//                 ],
//               },
//               '1091552082': {
//                 docs_count: 4004,
//                 docs_count_3_days: 176,
//                 last_time: '2024-06-03T21:45:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بوابة اللاجئين الفلسطينيين',
//                     doc_count: 4004,
//                   },
//                 ],
//               },
//               '373299032': {
//                 docs_count: 3747,
//                 docs_count_3_days: 278,
//                 last_time: '2024-06-03T20:28:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة فلسطين اليوم',
//                     doc_count: 3747,
//                   },
//                 ],
//               },
//               '1167441727977902080': {
//                 docs_count: 3469,
//                 docs_count_3_days: 106,
//                 last_time: '2024-06-03T20:56:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'رؤى لدراسات الحرب',
//                     doc_count: 3469,
//                   },
//                 ],
//               },
//               '2362690333': {
//                 docs_count: 1637,
//                 docs_count_3_days: 39,
//                 last_time: '2024-06-02T20:56:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'نحو الحرية',
//                     doc_count: 1637,
//                   },
//                 ],
//               },
//               '389431330': {
//                 docs_count: 1118,
//                 docs_count_3_days: 21,
//                 last_time: '2024-06-02T19:23:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أدهم أبو سلمية 🇵🇸 Adham Abu Selmiya',
//                     doc_count: 1118,
//                   },
//                 ],
//               },
//               '2901565226': {
//                 docs_count: 1045,
//                 docs_count_3_days: 31,
//                 last_time: '2024-06-02T20:55:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الحـكـيم',
//                     doc_count: 1045,
//                   },
//                 ],
//               },
//               '252333216': {
//                 docs_count: 699,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-02T19:37:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بلال نزار ريان',
//                     doc_count: 699,
//                   },
//                 ],
//               },
//               '1066392792715399171': {
//                 docs_count: 692,
//                 docs_count_3_days: 15,
//                 last_time: '2024-06-03T17:33:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'TIMES OF GAZA',
//                     doc_count: 692,
//                   },
//                 ],
//               },
//               '525804877': {
//                 docs_count: 609,
//                 docs_count_3_days: 28,
//                 last_time: '2024-06-03T17:36:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسن اصليح |  Hassan',
//                     doc_count: 609,
//                   },
//                 ],
//               },
//               '820411862026190848': {
//                 docs_count: 542,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-02T20:54:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Younis Tirawi | يونس',
//                     doc_count: 542,
//                   },
//                 ],
//               },
//               '442209176': {
//                 docs_count: 383,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-01T20:38:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'رضوان الأخرس',
//                     doc_count: 383,
//                   },
//                 ],
//               },
//               '632654368': {
//                 docs_count: 209,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T19:28:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'State of Palestine - MFA 🇵🇸🇵🇸',
//                     doc_count: 209,
//                   },
//                 ],
//               },
//               '2662453121': {
//                 docs_count: 157,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-27T12:41:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '💡 Aboelعla🤺',
//                     doc_count: 157,
//                   },
//                 ],
//               },
//               '965277365172670465': {
//                 docs_count: 104,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T21:29:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'MoTaz',
//                     doc_count: 104,
//                   },
//                 ],
//               },
//               '350646253': {
//                 docs_count: 30,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T09:15:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الصحفي مثنى النجار',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '983883562184269824': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T22:11:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ahmed Nofal',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '1140212158418079744': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-20T21:56:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'احمد سعيد',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//             },
//           },
//           instagram: {
//             docs_count: 14605,
//             docs_count_3_days: 0,
//             last_time: '2024-05-20T09:54:10.000Z',
//             sources: {},
//           },
//           tiktok: {
//             docs_count: 155,
//             docs_count_3_days: 0,
//             last_time: '2024-05-02T16:29:24.000Z',
//             sources: {},
//           },
//           vk: {
//             docs_count: 75,
//             docs_count_3_days: 0,
//             last_time: '2023-10-23T12:49:19.000Z',
//             sources: {},
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.569000',
//       },
//       article: {
//         docs_count: 14613,
//         docs_count_3_days: 0,
//         last_time: '2024-05-20T17:55:00.000Z',
//         networks: {
//           'فلسطين اليوم - عاجل أخبار فلسطين ورام الله اخبار العرب': {
//             docs_count: 7328,
//             docs_count_3_days: 0,
//             last_time: '2024-03-24T06:21:30.000Z',
//             sources: {},
//           },
//           'وكالة الصحافة الفلسطينية': {
//             docs_count: 6623,
//             docs_count_3_days: 0,
//             last_time: '2024-04-18T01:51:13.000Z',
//             sources: {},
//           },
//           paltoday: {
//             docs_count: 595,
//             docs_count_3_days: 0,
//             last_time: '2024-05-20T17:55:00.000Z',
//             sources: {},
//           },
//           'فلسطين اليوم': {
//             docs_count: 67,
//             docs_count_3_days: 0,
//             last_time: '2023-12-18T16:28:00.000Z',
//             sources: {},
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.781000',
//       },
//     },
//     lebanon: {
//       sn: {
//         docs_count: 6152784,
//         docs_count_3_days: 28873,
//         last_time: '2024-06-04T05:49:15.000Z',
//         networks: {
//           facebook: {
//             docs_count: 5044320,
//             docs_count_3_days: 15652,
//             last_time: '2024-06-03T10:21:18.000Z',
//             sources: {
//               '100064572224562': {
//                 docs_count: 1334625,
//                 docs_count_3_days: 6647,
//                 last_time: '2024-06-02T23:21:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'bintjbeil.org',
//                     doc_count: 1334625,
//                   },
//                 ],
//               },
//               '100069103503573': {
//                 docs_count: 1095503,
//                 docs_count_3_days: 4919,
//                 last_time: '2024-06-02T23:12:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة العربية  Al Arabiya',
//                     doc_count: 1095503,
//                   },
//                 ],
//               },
//               '100064334753768': {
//                 docs_count: 487397,
//                 docs_count_3_days: 1595,
//                 last_time: '2024-06-02T22:58:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sky News Arabia سكاي نيوز عربية',
//                     doc_count: 487397,
//                   },
//                 ],
//               },
//               '100050262589169': {
//                 docs_count: 245433,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-26T09:36:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Revolution ثورة لبنان',
//                     doc_count: 244817,
//                   },
//                   {
//                     entity_name: 'Dima Sadek',
//                     doc_count: 616,
//                   },
//                 ],
//               },
//               '100064353832692': {
//                 docs_count: 229572,
//                 docs_count_3_days: 725,
//                 last_time: '2024-06-02T22:30:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'MTV Lebanon News',
//                     doc_count: 229572,
//                   },
//                 ],
//               },
//               '100064545080045': {
//                 docs_count: 167422,
//                 docs_count_3_days: 42,
//                 last_time: '2024-06-02T19:19:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Beirut City',
//                     doc_count: 167422,
//                   },
//                 ],
//               },
//               '100064749666837': {
//                 docs_count: 143325,
//                 docs_count_3_days: 370,
//                 last_time: '2024-06-02T22:30:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عربي بوست',
//                     doc_count: 143325,
//                   },
//                 ],
//               },
//               '100064838075249': {
//                 docs_count: 112087,
//                 docs_count_3_days: 311,
//                 last_time: '2024-06-02T22:15:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'العربية لبنان - Al Arabiya Lebanon',
//                     doc_count: 112087,
//                   },
//                 ],
//               },
//               '100064741208722': {
//                 docs_count: 100261,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T10:43:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'HESPRESS',
//                     doc_count: 100261,
//                   },
//                 ],
//               },
//               '588771014848527': {
//                 docs_count: 80195,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T09:01:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ليش صار فينا هيك يا بيروت !',
//                     doc_count: 80195,
//                   },
//                 ],
//               },
//               '100059261814995': {
//                 docs_count: 57843,
//                 docs_count_3_days: 17,
//                 last_time: '2024-06-02T20:13:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'واصف الحركة Wassef El Harakeh',
//                     doc_count: 57843,
//                   },
//                 ],
//               },
//               '100050573555765': {
//                 docs_count: 50522,
//                 docs_count_3_days: 22,
//                 last_time: '2024-06-02T21:58:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samir Geagea',
//                     doc_count: 50522,
//                   },
//                 ],
//               },
//               '100064470078723': {
//                 docs_count: 48802,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-22T16:25:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Orient - أورينت',
//                     doc_count: 48802,
//                   },
//                 ],
//               },
//               '442225216223405': {
//                 docs_count: 48234,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-09T16:20:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ميس الجبل - ميسيّات',
//                     doc_count: 48234,
//                   },
//                 ],
//               },
//               '100050635352845': {
//                 docs_count: 42212,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-07T17:10:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فرانس 24 / FRANCE 24 Arabic',
//                     doc_count: 42212,
//                   },
//                 ],
//               },
//               '1233176722': {
//                 docs_count: 38396,
//                 docs_count_3_days: 212,
//                 last_time: '2024-06-02T19:38:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Chamoun',
//                     doc_count: 38396,
//                   },
//                 ],
//               },
//               '367861761097401': {
//                 docs_count: 32526,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T08:34:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Thawra Memes - ثورة ميمز',
//                     doc_count: 32526,
//                   },
//                 ],
//               },
//               '100044627645008': {
//                 docs_count: 30252,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T10:48:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre Baaklini بيار بعقليني',
//                     doc_count: 30252,
//                   },
//                 ],
//               },
//               '100053586351795': {
//                 docs_count: 29665,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T14:38:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tony Abi Najem',
//                     doc_count: 29665,
//                   },
//                 ],
//               },
//               '100044142351096': {
//                 docs_count: 25415,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-01T20:08:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samy Gemayel',
//                     doc_count: 25415,
//                   },
//                 ],
//               },
//               '100000452418520': {
//                 docs_count: 24887,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T09:29:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Enass Karimeh',
//                     doc_count: 24887,
//                   },
//                 ],
//               },
//               '100053944682801': {
//                 docs_count: 22862,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T13:10:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'FEA lb',
//                     doc_count: 22862,
//                   },
//                 ],
//               },
//               '100672218316902': {
//                 docs_count: 21725,
//                 docs_count_3_days: 0,
//                 last_time: '2023-05-23T04:46:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جمعية المودعين اللبنانيين',
//                     doc_count: 21725,
//                   },
//                 ],
//               },
//               '100063733550663': {
//                 docs_count: 21311,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-08T07:28:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nadim Koteich',
//                     doc_count: 21311,
//                   },
//                 ],
//               },
//               '100052090057428': {
//                 docs_count: 19409,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T15:45:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وينيه الدولة',
//                     doc_count: 19409,
//                   },
//                 ],
//               },
//               '100044592692197': {
//                 docs_count: 18813,
//                 docs_count_3_days: 256,
//                 last_time: '2024-06-02T18:08:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Saad Hariri',
//                     doc_count: 18813,
//                   },
//                 ],
//               },
//               '100070124527512': {
//                 docs_count: 16487,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T12:14:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طلعت ريحتكم',
//                     doc_count: 16487,
//                   },
//                 ],
//               },
//               '100044407090365': {
//                 docs_count: 15010,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T16:42:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elias Hankach - إلياس حنكش',
//                     doc_count: 15010,
//                   },
//                 ],
//               },
//               '105087801902362': {
//                 docs_count: 14867,
//                 docs_count_3_days: 0,
//                 last_time: '2023-06-06T17:34:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جمعية صرخة المودعين',
//                     doc_count: 14867,
//                   },
//                 ],
//               },
//               '100079012834271': {
//                 docs_count: 14326,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T12:45:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre Hachach',
//                     doc_count: 14326,
//                   },
//                 ],
//               },
//               '100050535517290': {
//                 docs_count: 13987,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T19:37:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Walid Jounblat',
//                     doc_count: 13987,
//                   },
//                 ],
//               },
//               '100071719245349': {
//                 docs_count: 13813,
//                 docs_count_3_days: 36,
//                 last_time: '2024-06-03T10:21:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sarelwa2et',
//                     doc_count: 13813,
//                   },
//                 ],
//               },
//               '100064322754539': {
//                 docs_count: 13754,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-01T22:57:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Army - الجيش اللبناني',
//                     doc_count: 13754,
//                   },
//                 ],
//               },
//               '100024207437039': {
//                 docs_count: 13639,
//                 docs_count_3_days: 26,
//                 last_time: '2024-06-02T16:10:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'FANS Demain Nous Appartient',
//                     doc_count: 13639,
//                   },
//                 ],
//               },
//               '100064708267734': {
//                 docs_count: 13113,
//                 docs_count_3_days: 102,
//                 last_time: '2024-06-02T22:28:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'التوانسة',
//                     doc_count: 13113,
//                   },
//                 ],
//               },
//               '1693623697603972': {
//                 docs_count: 12335,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T08:39:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المحاربون القدامى',
//                     doc_count: 12335,
//                   },
//                 ],
//               },
//               '100064276855752': {
//                 docs_count: 12137,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-01T04:45:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Euronews عــربي',
//                     doc_count: 12137,
//                   },
//                 ],
//               },
//               '100044428959681': {
//                 docs_count: 10968,
//                 docs_count_3_days: 28,
//                 last_time: '2024-06-02T08:04:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'General Achraf Rifi',
//                     doc_count: 10968,
//                   },
//                 ],
//               },
//               '100000495433465': {
//                 docs_count: 10949,
//                 docs_count_3_days: 29,
//                 last_time: '2024-06-02T19:50:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Johnny Youssef Awad',
//                     doc_count: 10949,
//                   },
//                 ],
//               },
//               '100050333326720': {
//                 docs_count: 10220,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T12:44:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Bilal Nakouzi',
//                     doc_count: 10220,
//                   },
//                 ],
//               },
//               '546270936': {
//                 docs_count: 10088,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T08:53:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tony Abi Najem',
//                     doc_count: 10088,
//                   },
//                 ],
//               },
//               '100050313286900': {
//                 docs_count: 9976,
//                 docs_count_3_days: 20,
//                 last_time: '2024-06-02T19:38:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جبران باسيل - Gebran Bassil',
//                     doc_count: 9976,
//                   },
//                 ],
//               },
//               '100038697773791': {
//                 docs_count: 9859,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-21T04:31:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'C Tabet Tabet',
//                     doc_count: 9859,
//                   },
//                 ],
//               },
//               '100069097724330': {
//                 docs_count: 9408,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T13:34:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لبنان التغيير',
//                     doc_count: 9408,
//                   },
//                 ],
//               },
//               '100090825755115': {
//                 docs_count: 9002,
//                 docs_count_3_days: 30,
//                 last_time: '2024-06-02T20:44:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Leb Press',
//                     doc_count: 9002,
//                   },
//                 ],
//               },
//               '108155036510342': {
//                 docs_count: 8696,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-13T12:19:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Groupe Nanterre',
//                     doc_count: 8696,
//                   },
//                 ],
//               },
//               '1148670738864160': {
//                 docs_count: 8683,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T08:57:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أموال المودعين',
//                     doc_count: 8683,
//                   },
//                 ],
//               },
//               '100047151965634': {
//                 docs_count: 7827,
//                 docs_count_3_days: 21,
//                 last_time: '2024-06-02T20:51:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebpress news',
//                     doc_count: 7827,
//                   },
//                 ],
//               },
//               '107149767413008': {
//                 docs_count: 7667,
//                 docs_count_3_days: 0,
//                 last_time: '2023-05-21T02:47:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ثوار ١٧ تشرين',
//                     doc_count: 7667,
//                   },
//                 ],
//               },
//               '100001120942162': {
//                 docs_count: 7650,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-11T19:07:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tarek Jamil Abou Saleh',
//                     doc_count: 7650,
//                   },
//                 ],
//               },
//               '100082023318225': {
//                 docs_count: 7318,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T14:10:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لبنان اكبر من وطن',
//                     doc_count: 7318,
//                   },
//                 ],
//               },
//               '411490042869717': {
//                 docs_count: 7285,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T12:19:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'STAND WITH LEBANON WORLDWIDE',
//                     doc_count: 7285,
//                   },
//                 ],
//               },
//               '100050512538522': {
//                 docs_count: 6168,
//                 docs_count_3_days: 90,
//                 last_time: '2024-06-02T21:09:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sleiman Frangieh',
//                     doc_count: 6168,
//                   },
//                 ],
//               },
//               '100022508263202': {
//                 docs_count: 5863,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T11:18:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Megaphone - ميغافون',
//                     doc_count: 5863,
//                   },
//                 ],
//               },
//               '643570426': {
//                 docs_count: 5471,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-11T05:46:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre El Hachach',
//                     doc_count: 5471,
//                   },
//                 ],
//               },
//               '1998842856823091': {
//                 docs_count: 5321,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T11:29:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '‎United متحدون‎',
//                     doc_count: 5321,
//                   },
//                 ],
//               },
//               '100080101992428': {
//                 docs_count: 4995,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-17T17:29:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Al Hadath Lebanon الحدث اللبناني',
//                     doc_count: 4995,
//                   },
//                 ],
//               },
//               '100072764120370': {
//                 docs_count: 4743,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-12T06:39:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Kinda El-khatib',
//                     doc_count: 4743,
//                   },
//                 ],
//               },
//               '100057565686204': {
//                 docs_count: 4683,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T21:15:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Halimé El kaakour حليمة القعقور',
//                     doc_count: 4683,
//                   },
//                 ],
//               },
//               '271459847401652': {
//                 docs_count: 4642,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-12T16:31:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'In Solidarity With Lebanon',
//                     doc_count: 4642,
//                   },
//                 ],
//               },
//               '100000732405860': {
//                 docs_count: 4567,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T17:17:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Riad Ayoubi',
//                     doc_count: 4567,
//                   },
//                 ],
//               },
//               '565035288': {
//                 docs_count: 4520,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T08:56:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Imad Bazzi',
//                     doc_count: 4520,
//                   },
//                 ],
//               },
//               '100000623179994': {
//                 docs_count: 4505,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-10T11:48:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rabih Zein',
//                     doc_count: 4505,
//                   },
//                 ],
//               },
//               '100068931776086': {
//                 docs_count: 4115,
//                 docs_count_3_days: 40,
//                 last_time: '2024-06-02T19:47:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Waradana',
//                     doc_count: 4115,
//                   },
//                 ],
//               },
//               '100050568966140': {
//                 docs_count: 4009,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-15T21:16:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rachel Karam راشيل كرم',
//                     doc_count: 4009,
//                   },
//                 ],
//               },
//               '1520562444803844': {
//                 docs_count: 3984,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T08:30:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ثوار بيروت - Beirut Revolutionaries',
//                     doc_count: 3984,
//                   },
//                 ],
//               },
//               '100005655047818': {
//                 docs_count: 3858,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T08:55:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Roy M. Boukhary',
//                     doc_count: 3858,
//                   },
//                 ],
//               },
//               '100002348692778': {
//                 docs_count: 3700,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-02T13:39:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Firas Hamdan',
//                     doc_count: 3700,
//                   },
//                 ],
//               },
//               '100009371437728': {
//                 docs_count: 3543,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-12T07:03:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Georges B. Saade',
//                     doc_count: 3543,
//                   },
//                 ],
//               },
//               '892060583': {
//                 docs_count: 3517,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T16:30:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tima Rida',
//                     doc_count: 3517,
//                   },
//                 ],
//               },
//               '100078841489780': {
//                 docs_count: 3516,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T11:11:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghada Ayoub',
//                     doc_count: 3516,
//                   },
//                 ],
//               },
//               '100087594618186': {
//                 docs_count: 3372,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T13:20:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ali Khalifé',
//                     doc_count: 3372,
//                   },
//                 ],
//               },
//               '100044175322236': {
//                 docs_count: 3322,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-02T11:15:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nabih Berri',
//                     doc_count: 3322,
//                   },
//                 ],
//               },
//               '549881757': {
//                 docs_count: 3214,
//                 docs_count_3_days: 0,
//                 last_time: '2023-03-28T18:40:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Debb El Joumhouriyi',
//                     doc_count: 3214,
//                   },
//                 ],
//               },
//               '100064429912382': {
//                 docs_count: 3196,
//                 docs_count_3_days: 48,
//                 last_time: '2024-06-02T19:16:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Walid baarini- النائب وليد البعريني',
//                     doc_count: 3196,
//                   },
//                 ],
//               },
//               '100076509900015': {
//                 docs_count: 3123,
//                 docs_count_3_days: 0,
//                 last_time: '2023-08-02T17:21:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'كلن يعني كلن',
//                     doc_count: 3123,
//                   },
//                 ],
//               },
//               '100068796173340': {
//                 docs_count: 3121,
//                 docs_count_3_days: 0,
//                 last_time: '2023-04-13T15:10:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Parallel',
//                     doc_count: 3121,
//                   },
//                 ],
//               },
//               '100083051186406': {
//                 docs_count: 3116,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-12T16:55:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'القناة الفضائية',
//                     doc_count: 3116,
//                   },
//                 ],
//               },
//               '100000277890128': {
//                 docs_count: 3026,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-10T17:59:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Edmond Sassine',
//                     doc_count: 3026,
//                   },
//                 ],
//               },
//               '100075883120305': {
//                 docs_count: 2785,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T10:01:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Federal Lebanon',
//                     doc_count: 2785,
//                   },
//                 ],
//               },
//               '100077083557480': {
//                 docs_count: 2599,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T15:01:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جمعية صرخة المودعين',
//                     doc_count: 2599,
//                   },
//                 ],
//               },
//               '100093655480128': {
//                 docs_count: 2599,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-06T09:18:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي شعيب',
//                     doc_count: 2599,
//                   },
//                 ],
//               },
//               '100038352836021': {
//                 docs_count: 2479,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-06T07:34:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مخيم برج البراجنة',
//                     doc_count: 2479,
//                   },
//                 ],
//               },
//               '100002205281286': {
//                 docs_count: 2323,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-24T15:00:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dina Assouma',
//                     doc_count: 2323,
//                   },
//                 ],
//               },
//               '100057361543201': {
//                 docs_count: 2290,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-13T15:12:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'The Pierre',
//                     doc_count: 2290,
//                   },
//                 ],
//               },
//               '100043977226612': {
//                 docs_count: 2047,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T15:26:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'MP Hadi Aboul Hessen  - النائب هادي أبو الحسن',
//                     doc_count: 2047,
//                   },
//                 ],
//               },
//               '100067658486666': {
//                 docs_count: 2041,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T17:55:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جمعية أموالنا لنا',
//                     doc_count: 2041,
//                   },
//                 ],
//               },
//               '100050368844897': {
//                 docs_count: 2008,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T11:50:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'العماد ميشال عون - General Michel Aoun',
//                     doc_count: 2008,
//                   },
//                 ],
//               },
//               '648932422430906': {
//                 docs_count: 2007,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-27T19:17:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لبنان التغيير 🇱🇧',
//                     doc_count: 2007,
//                   },
//                 ],
//               },
//               '100064427636044': {
//                 docs_count: 1950,
//                 docs_count_3_days: 0,
//                 last_time: '2023-05-24T12:14:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مواطنون ومواطنات في دولة',
//                     doc_count: 1950,
//                   },
//                 ],
//               },
//               '1918990294985442': {
//                 docs_count: 1930,
//                 docs_count_3_days: 0,
//                 last_time: '2023-05-24T13:46:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Megaphone - ميغافون',
//                     doc_count: 1930,
//                   },
//                 ],
//               },
//               '100064387974411': {
//                 docs_count: 1929,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T18:33:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Wael Abou Faour - وائل أبو فاعور',
//                     doc_count: 1929,
//                   },
//                 ],
//               },
//               '505190530734620': {
//                 docs_count: 1693,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T08:26:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'اخبار لبنان(24/24)',
//                     doc_count: 1693,
//                   },
//                 ],
//               },
//               '1216945799': {
//                 docs_count: 1687,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-17T07:25:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسن مرعب',
//                     doc_count: 1687,
//                   },
//                 ],
//               },
//               '100004039991274': {
//                 docs_count: 1574,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-02T12:14:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ammounz KD',
//                     doc_count: 1574,
//                   },
//                 ],
//               },
//               '100010466107398': {
//                 docs_count: 1466,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-03T06:47:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohammad Safwat Al Sharif',
//                     doc_count: 1466,
//                   },
//                 ],
//               },
//               '100044207750750': {
//                 docs_count: 1322,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T18:29:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ziyad Baroud',
//                     doc_count: 1322,
//                   },
//                 ],
//               },
//               '100005627445795': {
//                 docs_count: 1246,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T19:36:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Firas Bou Hatoum',
//                     doc_count: 1246,
//                   },
//                 ],
//               },
//               '100059681765658': {
//                 docs_count: 1185,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T16:09:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المرصد الشعبي لمحاربة الفساد',
//                     doc_count: 1185,
//                   },
//                 ],
//               },
//               '100003901685556': {
//                 docs_count: 1176,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-24T16:02:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hala Rachid Ammoun',
//                     doc_count: 1176,
//                   },
//                 ],
//               },
//               '131476240840343': {
//                 docs_count: 1159,
//                 docs_count_3_days: 0,
//                 last_time: '2023-05-25T21:01:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'United متحدون',
//                     doc_count: 1159,
//                   },
//                 ],
//               },
//               '899385645': {
//                 docs_count: 1151,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-10T21:08:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre Baaklini',
//                     doc_count: 1151,
//                   },
//                 ],
//               },
//               '100050666491286': {
//                 docs_count: 1058,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-01T08:52:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghassan Germanos',
//                     doc_count: 1058,
//                   },
//                 ],
//               },
//               '528650107': {
//                 docs_count: 988,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-02T14:14:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Wadih Abi Najem',
//                     doc_count: 988,
//                   },
//                 ],
//               },
//               '100057533196057': {
//                 docs_count: 973,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T11:05:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جمعية المودعين اللبنانيين',
//                     doc_count: 973,
//                   },
//                 ],
//               },
//               '1051486042098602': {
//                 docs_count: 821,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-11T00:34:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Amwalouna lana',
//                     doc_count: 821,
//                   },
//                 ],
//               },
//               '100047042740611': {
//                 docs_count: 779,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-13T13:13:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Thawra TV',
//                     doc_count: 779,
//                   },
//                 ],
//               },
//               '100064879860447': {
//                 docs_count: 776,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T15:04:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مدينتي - Madinati',
//                     doc_count: 776,
//                   },
//                 ],
//               },
//               '100050285478144': {
//                 docs_count: 639,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-11T18:24:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fares Souaid',
//                     doc_count: 639,
//                   },
//                 ],
//               },
//               '724838152': {
//                 docs_count: 637,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T06:34:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Riyad Bou Fakhreddine',
//                     doc_count: 637,
//                   },
//                 ],
//               },
//               '440511176824064': {
//                 docs_count: 613,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-10T16:55:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'Lebanon Revolts - United لبنان ينتفض - متحدون',
//                     doc_count: 613,
//                   },
//                 ],
//               },
//               '100064363525171': {
//                 docs_count: 516,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T16:34:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanon 24',
//                     doc_count: 516,
//                   },
//                 ],
//               },
//               '100063253268101': {
//                 docs_count: 454,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T21:20:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'PoliticalPen',
//                     doc_count: 454,
//                   },
//                 ],
//               },
//               '532225342': {
//                 docs_count: 437,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-21T12:49:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nasser Fakih',
//                     doc_count: 437,
//                   },
//                 ],
//               },
//               '100080613797899': {
//                 docs_count: 432,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T08:44:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'متبرعين الكلى في لبنان',
//                     doc_count: 432,
//                   },
//                 ],
//               },
//               '100076719786571': {
//                 docs_count: 427,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T09:43:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Akhbar Zahle',
//                     doc_count: 427,
//                   },
//                 ],
//               },
//               '100034431854326': {
//                 docs_count: 384,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T12:37:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ميس الجبل - ميسيّات',
//                     doc_count: 384,
//                   },
//                 ],
//               },
//               '100064534073029': {
//                 docs_count: 363,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T09:14:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Decent Revolution LDR ثورة الحقّ',
//                     doc_count: 363,
//                   },
//                 ],
//               },
//               '779613610': {
//                 docs_count: 337,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T15:48:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joelle Bou Younes',
//                     doc_count: 337,
//                   },
//                 ],
//               },
//               '440634840464681': {
//                 docs_count: 302,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-11T17:04:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لبنان للبنانيين',
//                     doc_count: 302,
//                   },
//                 ],
//               },
//               '100063517002612': {
//                 docs_count: 291,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T13:00:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لجان العمل مخيمات لبنان',
//                     doc_count: 291,
//                   },
//                 ],
//               },
//               '811474556164488': {
//                 docs_count: 258,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-13T08:04:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لبنان',
//                     doc_count: 258,
//                   },
//                 ],
//               },
//               '100077408183746': {
//                 docs_count: 236,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-16T11:27:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'United متحدون',
//                     doc_count: 236,
//                   },
//                 ],
//               },
//               '100073842369285': {
//                 docs_count: 200,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T19:06:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nizar Abou El Ezz',
//                     doc_count: 200,
//                   },
//                 ],
//               },
//               '525222879233655': {
//                 docs_count: 164,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T16:48:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧أخبار لبنان🇱🇧',
//                     doc_count: 164,
//                   },
//                 ],
//               },
//               '100063802580327': {
//                 docs_count: 140,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-09T21:14:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ثورة لبنان ٢٠١٩',
//                     doc_count: 140,
//                   },
//                 ],
//               },
//               '100094087164175': {
//                 docs_count: 139,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T14:38:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: ' م.صرخة شعب ',
//                     doc_count: 139,
//                   },
//                 ],
//               },
//               '2677333249202465': {
//                 docs_count: 125,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-09T06:43:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'موقع شهداء عيترون',
//                     doc_count: 125,
//                   },
//                 ],
//               },
//               '832401204150569': {
//                 docs_count: 85,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-17T07:39:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'دواء للبنان - Medicine For Lebanon -',
//                     doc_count: 85,
//                   },
//                 ],
//               },
//               '100057527375877': {
//                 docs_count: 69,
//                 docs_count_3_days: 0,
//                 last_time: '2023-05-22T17:51:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ziad El Masri',
//                     doc_count: 69,
//                   },
//                 ],
//               },
//               '502620917': {
//                 docs_count: 53,
//                 docs_count_3_days: 0,
//                 last_time: '2023-06-20T15:29:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Omar A. Itani',
//                     doc_count: 53,
//                   },
//                 ],
//               },
//               '716956511': {
//                 docs_count: 49,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-17T13:31:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Paula Yacoubian',
//                     doc_count: 49,
//                   },
//                 ],
//               },
//               '985475592216297': {
//                 docs_count: 41,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-18T09:43:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شو عندك دوا 🫂',
//                     doc_count: 41,
//                   },
//                 ],
//               },
//               '100009312859993': {
//                 docs_count: 37,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-12T17:58:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Almaqdes Scout',
//                     doc_count: 37,
//                   },
//                 ],
//               },
//               '100070856051658': {
//                 docs_count: 25,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-13T16:18:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ثوار ١٧ تشرين',
//                     doc_count: 25,
//                   },
//                 ],
//               },
//               '1041081129689444': {
//                 docs_count: 17,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-21T11:47:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'My medicine is your medicine - دوائي دواؤك',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '332732025161142': {
//                 docs_count: 16,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-16T10:17:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'Medicines And Milk All Over Lebanon - أدوية وحليب في جميع أنحاء لبنان',
//                     doc_count: 16,
//                   },
//                 ],
//               },
//               '100087936213097': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2023-10-11T17:20:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Arab News',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '100067334704959': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2023-04-30T16:07:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'كافِح',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '485444526204670': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-07T16:43:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Medical Support Lebanon🇱🇧',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//               '1111900958': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-05T20:00:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Siblini Rabih',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '100064867143439': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2021-11-10T16:46:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jane Castro Photography',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '100089937033681': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2022-05-06T21:41:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'دواء الى لبنان',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '100044361972583': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2023-07-15T11:01:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مواطنون ومواطنات في دولة',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '100064542536641': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2023-08-23T13:15:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Carla Lopes',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//             },
//           },
//           telegram: {
//             docs_count: 684562,
//             docs_count_3_days: 413,
//             last_time: '2024-06-01T21:13:12.000Z',
//             sources: {
//               Electrohizbullah: {
//                 docs_count: 4524,
//                 docs_count_3_days: 213,
//                 last_time: '2024-06-01T21:13:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Electrohizbullah',
//                     doc_count: 4524,
//                   },
//                 ],
//               },
//               almayadeen: {
//                 docs_count: 2745,
//                 docs_count_3_days: 200,
//                 last_time: '2024-06-01T20:52:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'almayadeen',
//                     doc_count: 2745,
//                   },
//                 ],
//               },
//             },
//           },
//           twitter: {
//             docs_count: 410576,
//             docs_count_3_days: 12808,
//             last_time: '2024-06-04T05:49:15.000Z',
//             sources: {
//               '601837418': {
//                 docs_count: 25862,
//                 docs_count_3_days: 740,
//                 last_time: '2024-06-03T22:06:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanon 24',
//                     doc_count: 25862,
//                   },
//                 ],
//               },
//               '50586354': {
//                 docs_count: 21451,
//                 docs_count_3_days: 798,
//                 last_time: '2024-06-03T22:10:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sawt Beirut International',
//                     doc_count: 21451,
//                   },
//                 ],
//               },
//               '288196328': {
//                 docs_count: 21044,
//                 docs_count_3_days: 643,
//                 last_time: '2024-06-03T23:52:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'kataeb.org',
//                     doc_count: 21044,
//                   },
//                 ],
//               },
//               '1130891570': {
//                 docs_count: 17978,
//                 docs_count_3_days: 616,
//                 last_time: '2024-06-03T21:58:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الميادين عاجل',
//                     doc_count: 17978,
//                   },
//                 ],
//               },
//               '169196848': {
//                 docs_count: 15502,
//                 docs_count_3_days: 820,
//                 last_time: '2024-06-03T19:57:21.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanon Debate',
//                     doc_count: 15502,
//                   },
//                 ],
//               },
//               '430530678': {
//                 docs_count: 15495,
//                 docs_count_3_days: 400,
//                 last_time: '2024-06-03T21:20:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Annahar',
//                     doc_count: 15495,
//                   },
//                 ],
//               },
//               '319522800': {
//                 docs_count: 15268,
//                 docs_count_3_days: 462,
//                 last_time: '2024-06-03T22:20:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Akhbar Al Yawm',
//                     doc_count: 15268,
//                   },
//                 ],
//               },
//               '408795883': {
//                 docs_count: 13595,
//                 docs_count_3_days: 391,
//                 last_time: '2024-06-03T21:02:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LebanonFiles',
//                     doc_count: 13595,
//                   },
//                 ],
//               },
//               '594813423': {
//                 docs_count: 13032,
//                 docs_count_3_days: 372,
//                 last_time: '2024-06-03T21:09:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة الميادين',
//                     doc_count: 13032,
//                   },
//                 ],
//               },
//               '1343148137414881281': {
//                 docs_count: 11923,
//                 docs_count_3_days: 307,
//                 last_time: '2024-06-03T22:02:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الحدث عاجل',
//                     doc_count: 11923,
//                   },
//                 ],
//               },
//               '1252537856419119110': {
//                 docs_count: 11426,
//                 docs_count_3_days: 449,
//                 last_time: '2024-06-04T05:20:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'هنا لبنان',
//                     doc_count: 11426,
//                   },
//                 ],
//               },
//               '458301345': {
//                 docs_count: 10497,
//                 docs_count_3_days: 325,
//                 last_time: '2024-06-03T21:24:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'سكاي نيوز عربية-عاجل',
//                     doc_count: 10497,
//                   },
//                 ],
//               },
//               '295123952': {
//                 docs_count: 9925,
//                 docs_count_3_days: 184,
//                 last_time: '2024-06-02T20:50:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LBCI Lebanon News',
//                     doc_count: 9925,
//                   },
//                 ],
//               },
//               '59126044': {
//                 docs_count: 9384,
//                 docs_count_3_days: 366,
//                 last_time: '2024-06-03T22:13:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جريدة الأخبار - Al-Akhbar',
//                     doc_count: 9384,
//                   },
//                 ],
//               },
//               '397199380': {
//                 docs_count: 8043,
//                 docs_count_3_days: 247,
//                 last_time: '2024-06-03T20:43:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'MTV Lebanon News',
//                     doc_count: 8043,
//                   },
//                 ],
//               },
//               '1129428224327467008': {
//                 docs_count: 7688,
//                 docs_count_3_days: 249,
//                 last_time: '2024-06-04T04:20:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nidaa Al Watan نداء الوطن',
//                     doc_count: 7688,
//                   },
//                 ],
//               },
//               '625413763': {
//                 docs_count: 5848,
//                 docs_count_3_days: 222,
//                 last_time: '2024-06-03T16:19:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Radio Free Lebanon',
//                     doc_count: 5848,
//                   },
//                 ],
//               },
//               '1590243665192042496': {
//                 docs_count: 5549,
//                 docs_count_3_days: 222,
//                 last_time: '2024-06-03T22:50:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة المنار',
//                     doc_count: 5549,
//                   },
//                 ],
//               },
//               '260162879': {
//                 docs_count: 5120,
//                 docs_count_3_days: 131,
//                 last_time: '2024-06-03T21:09:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elnashra - النشرة',
//                     doc_count: 5120,
//                   },
//                 ],
//               },
//               '1508848274303819788': {
//                 docs_count: 5091,
//                 docs_count_3_days: 226,
//                 last_time: '2024-06-03T21:07:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الميادين لبنان',
//                     doc_count: 5091,
//                   },
//                 ],
//               },
//               '1061604324': {
//                 docs_count: 3659,
//                 docs_count_3_days: 97,
//                 last_time: '2024-06-03T21:00:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Al Modon - المدن',
//                     doc_count: 3659,
//                   },
//                 ],
//               },
//               '1181225176148713473': {
//                 docs_count: 3406,
//                 docs_count_3_days: 112,
//                 last_time: '2024-06-03T20:14:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Asas Media/أساس ميديا',
//                     doc_count: 3406,
//                   },
//                 ],
//               },
//               '1449780097188306946': {
//                 docs_count: 3378,
//                 docs_count_3_days: 72,
//                 last_time: '2024-06-03T20:34:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Forces News',
//                     doc_count: 3378,
//                   },
//                 ],
//               },
//               '1361242945609990147': {
//                 docs_count: 2988,
//                 docs_count_3_days: 65,
//                 last_time: '2024-06-03T20:50:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي هاشم 313 🇵🇸 🇾🇪',
//                     doc_count: 2988,
//                   },
//                 ],
//               },
//               '1048641048392728576': {
//                 docs_count: 2976,
//                 docs_count_3_days: 136,
//                 last_time: '2024-06-04T01:21:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'iBra 💉 إبرة ®',
//                     doc_count: 2976,
//                   },
//                 ],
//               },
//               '1315631150883319813': {
//                 docs_count: 2900,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T08:07:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jusur',
//                     doc_count: 2900,
//                   },
//                 ],
//               },
//               '76321868': {
//                 docs_count: 2797,
//                 docs_count_3_days: 204,
//                 last_time: '2024-06-03T19:55:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'tayyar.org',
//                     doc_count: 2797,
//                   },
//                 ],
//               },
//               '2166427412': {
//                 docs_count: 2547,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T13:11:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسين مرتضى Hussein Mortada',
//                     doc_count: 2547,
//                   },
//                 ],
//               },
//               '1392864463204782082': {
//                 docs_count: 2484,
//                 docs_count_3_days: 84,
//                 last_time: '2024-06-03T19:59:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'War Monitor',
//                     doc_count: 2484,
//                   },
//                 ],
//               },
//               '889268401': {
//                 docs_count: 2420,
//                 docs_count_3_days: 83,
//                 last_time: '2024-06-03T20:51:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جنوبية | Janoubia',
//                     doc_count: 2420,
//                   },
//                 ],
//               },
//               '1274716050962231296': {
//                 docs_count: 2358,
//                 docs_count_3_days: 42,
//                 last_time: '2024-06-04T00:09:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شريف حجازي',
//                     doc_count: 2358,
//                   },
//                 ],
//               },
//               '261700363': {
//                 docs_count: 2087,
//                 docs_count_3_days: 131,
//                 last_time: '2024-06-03T14:07:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'bintjbeil.org',
//                     doc_count: 2087,
//                   },
//                 ],
//               },
//               '1252218233630982145': {
//                 docs_count: 2015,
//                 docs_count_3_days: 49,
//                 last_time: '2024-06-02T14:48:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Spot Shot',
//                     doc_count: 2015,
//                   },
//                 ],
//               },
//               '1130700210': {
//                 docs_count: 1981,
//                 docs_count_3_days: 54,
//                 last_time: '2024-06-03T21:31:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'jamal cheaib',
//                     doc_count: 1981,
//                   },
//                 ],
//               },
//               '482720068': {
//                 docs_count: 1916,
//                 docs_count_3_days: 232,
//                 last_time: '2024-06-04T05:49:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanos',
//                     doc_count: 1916,
//                   },
//                 ],
//               },
//               '1557663364381392897': {
//                 docs_count: 1836,
//                 docs_count_3_days: 200,
//                 last_time: '2024-06-03T22:30:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'rabih darido(لتبقى لنا الحرية)',
//                     doc_count: 1836,
//                   },
//                 ],
//               },
//               '2857109715': {
//                 docs_count: 1757,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T16:24:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي شعيب || Ali Shoeib 🇱🇧',
//                     doc_count: 1757,
//                   },
//                 ],
//               },
//               '64385029': {
//                 docs_count: 1709,
//                 docs_count_3_days: 43,
//                 last_time: '2024-06-03T18:16:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: "L'Orient-Le Jour",
//                     doc_count: 1709,
//                   },
//                 ],
//               },
//               '433540042': {
//                 docs_count: 1692,
//                 docs_count_3_days: 39,
//                 last_time: '2024-06-03T21:35:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي',
//                     doc_count: 1692,
//                   },
//                 ],
//               },
//               '833246556727939072': {
//                 docs_count: 1648,
//                 docs_count_3_days: 126,
//                 last_time: '2024-06-03T19:42:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Leb Now',
//                     doc_count: 1648,
//                   },
//                 ],
//               },
//               '1519635559827877888': {
//                 docs_count: 1554,
//                 docs_count_3_days: 64,
//                 last_time: '2024-06-03T20:06:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sonar Media Center',
//                     doc_count: 1554,
//                   },
//                 ],
//               },
//               '792723295401549824': {
//                 docs_count: 1533,
//                 docs_count_3_days: 29,
//                 last_time: '2024-06-03T23:19:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Raymond Hakim',
//                     doc_count: 1533,
//                   },
//                 ],
//               },
//               '262844912': {
//                 docs_count: 1467,
//                 docs_count_3_days: 27,
//                 last_time: '2024-06-03T18:47:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Al Joumhouria',
//                     doc_count: 1467,
//                   },
//                 ],
//               },
//               '1236015635395760128': {
//                 docs_count: 1428,
//                 docs_count_3_days: 33,
//                 last_time: '2024-06-03T18:19:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Peter Germanos 𐤐𐤕𐤓𐤗',
//                     doc_count: 1428,
//                   },
//                 ],
//               },
//               '1242097281437970434': {
//                 docs_count: 1413,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T20:11:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇵🇸🌹 بنت قانا 🌹🇱🇧',
//                     doc_count: 1413,
//                   },
//                 ],
//               },
//               '1337292330097893376': {
//                 docs_count: 1357,
//                 docs_count_3_days: 17,
//                 last_time: '2024-06-03T19:25:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'برامج سياسية',
//                     doc_count: 1357,
//                   },
//                 ],
//               },
//               '1364910751203401732': {
//                 docs_count: 1335,
//                 docs_count_3_days: 20,
//                 last_time: '2024-06-02T18:37:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إدلب Online',
//                     doc_count: 1335,
//                   },
//                 ],
//               },
//               '1727903738': {
//                 docs_count: 1330,
//                 docs_count_3_days: 37,
//                 last_time: '2024-06-03T13:53:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Consuella Chammaii',
//                     doc_count: 1330,
//                   },
//                 ],
//               },
//               '1327775185': {
//                 docs_count: 1187,
//                 docs_count_3_days: 31,
//                 last_time: '2024-06-03T18:28:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre Abi-Saab',
//                     doc_count: 1187,
//                   },
//                 ],
//               },
//               '1199072960235089930': {
//                 docs_count: 1122,
//                 docs_count_3_days: 33,
//                 last_time: '2024-06-03T21:02:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abomohamad',
//                     doc_count: 1122,
//                   },
//                 ],
//               },
//               '1071852204175384576': {
//                 docs_count: 1006,
//                 docs_count_3_days: 33,
//                 last_time: '2024-06-03T21:53:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'العلّامة الميرزا أبو هادي',
//                     doc_count: 1006,
//                   },
//                 ],
//               },
//               '1371845396356534273': {
//                 docs_count: 987,
//                 docs_count_3_days: 44,
//                 last_time: '2024-06-03T23:32:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'loquacious - لوكاسيوس',
//                     doc_count: 987,
//                   },
//                 ],
//               },
//               '1454833206386176002': {
//                 docs_count: 980,
//                 docs_count_3_days: 30,
//                 last_time: '2024-06-03T21:20:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'flam freedom',
//                     doc_count: 980,
//                   },
//                 ],
//               },
//               '1472237119498338311': {
//                 docs_count: 973,
//                 docs_count_3_days: 43,
//                 last_time: '2024-06-03T20:52:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Haifaa Saad',
//                     doc_count: 973,
//                   },
//                 ],
//               },
//               '576846644': {
//                 docs_count: 954,
//                 docs_count_3_days: 34,
//                 last_time: '2024-06-03T22:14:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسن الدّر',
//                     doc_count: 954,
//                   },
//                 ],
//               },
//               '1361007844028534792': {
//                 docs_count: 931,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-03T21:17:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '*𝗔𝗯𝗼 𝗥𝗶𝗮𝗱 | الرابع عشر',
//                     doc_count: 931,
//                   },
//                 ],
//               },
//               '1226926214750855174': {
//                 docs_count: 926,
//                 docs_count_3_days: 31,
//                 last_time: '2024-06-03T21:09:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'البجاني',
//                     doc_count: 926,
//                   },
//                 ],
//               },
//               '53019445': {
//                 docs_count: 898,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T17:45:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'nasserkandil',
//                     doc_count: 898,
//                   },
//                 ],
//               },
//               '424475352': {
//                 docs_count: 851,
//                 docs_count_3_days: 20,
//                 last_time: '2024-06-03T20:15:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Khalil Nasrallah',
//                     doc_count: 851,
//                   },
//                 ],
//               },
//               '1527815005944664069': {
//                 docs_count: 847,
//                 docs_count_3_days: 42,
//                 last_time: '2024-06-03T22:23:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🪬🇱🇧💛 النصر قريباً💛 🇱🇧🪬',
//                     doc_count: 847,
//                   },
//                 ],
//               },
//               '156633908': {
//                 docs_count: 838,
//                 docs_count_3_days: 23,
//                 last_time: '2024-06-03T21:04:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'تـبـيـيـن',
//                     doc_count: 838,
//                   },
//                 ],
//               },
//               '1354469164652625926': {
//                 docs_count: 835,
//                 docs_count_3_days: 29,
//                 last_time: '2024-06-03T20:28:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'rita ballan',
//                     doc_count: 835,
//                   },
//                 ],
//               },
//               '1212804823180906496': {
//                 docs_count: 834,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T20:20:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LÛNÂCKÏ ܠܝܢ ܝܰܙܝܓܝ',
//                     doc_count: 834,
//                   },
//                 ],
//               },
//               '1400139833020932103': {
//                 docs_count: 823,
//                 docs_count_3_days: 89,
//                 last_time: '2024-06-03T17:30:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nelly .j.gemayell',
//                     doc_count: 823,
//                   },
//                 ],
//               },
//               '1709515980': {
//                 docs_count: 789,
//                 docs_count_3_days: 51,
//                 last_time: '2024-06-03T19:29:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tele liban',
//                     doc_count: 789,
//                   },
//                 ],
//               },
//               '882269652847603712': {
//                 docs_count: 787,
//                 docs_count_3_days: 19,
//                 last_time: '2024-06-03T19:57:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Megaphone',
//                     doc_count: 787,
//                   },
//                 ],
//               },
//               '845020828131610624': {
//                 docs_count: 783,
//                 docs_count_3_days: 14,
//                 last_time: '2024-06-03T19:59:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أبو الفضل (سّيد، ملاك و راهب)',
//                     doc_count: 783,
//                   },
//                 ],
//               },
//               '614433317': {
//                 docs_count: 719,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T12:39:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الدكتور منصور المالك 🇸🇦 Mansour Almalik',
//                     doc_count: 719,
//                   },
//                 ],
//               },
//               '3314894090': {
//                 docs_count: 689,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T13:16:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧Zeinab Elachkar🇱🇧',
//                     doc_count: 689,
//                   },
//                 ],
//               },
//               '1323234191518126086': {
//                 docs_count: 688,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T21:17:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zainabhelo',
//                     doc_count: 688,
//                   },
//                 ],
//               },
//               '981910596781264896': {
//                 docs_count: 678,
//                 docs_count_3_days: 19,
//                 last_time: '2024-06-03T19:39:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '‏ أمنـه يآسـين🇱🇧💫🇮🇷',
//                     doc_count: 678,
//                   },
//                 ],
//               },
//               '1570658283660234757': {
//                 docs_count: 673,
//                 docs_count_3_days: 53,
//                 last_time: '2024-06-03T19:06:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧1sabba@nomis🇱🇧',
//                     doc_count: 673,
//                   },
//                 ],
//               },
//               '1350198468682403858': {
//                 docs_count: 658,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-03T22:45:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'غالب جواد اساسي',
//                     doc_count: 658,
//                   },
//                 ],
//               },
//               '1456019408632045576': {
//                 docs_count: 634,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T18:53:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ابوالياس البرطي-Abu Elias Al-Barti',
//                     doc_count: 634,
//                   },
//                 ],
//               },
//               '3440417900': {
//                 docs_count: 628,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T15:58:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'souheil diab سهيل دياب',
//                     doc_count: 628,
//                   },
//                 ],
//               },
//               '1427319909810376707': {
//                 docs_count: 619,
//                 docs_count_3_days: 63,
//                 last_time: '2024-06-03T20:11:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مهند',
//                     doc_count: 619,
//                   },
//                 ],
//               },
//               '898854129325543424': {
//                 docs_count: 579,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T07:24:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Liliane Me ‎(⁨ܠܝܠܝܐܢ ܡܣܣܘ⁩)',
//                     doc_count: 579,
//                   },
//                 ],
//               },
//               '1392474858139828231': {
//                 docs_count: 564,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T21:11:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ramia al ibrahim - راميا الابراهيم',
//                     doc_count: 564,
//                   },
//                 ],
//               },
//               '2886136805': {
//                 docs_count: 555,
//                 docs_count_3_days: 25,
//                 last_time: '2024-06-03T17:02:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abduljalil Alsaeid عبدالجليل السعيد',
//                     doc_count: 555,
//                   },
//                 ],
//               },
//               '130908154': {
//                 docs_count: 542,
//                 docs_count_3_days: 28,
//                 last_time: '2024-06-03T20:34:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'wal',
//                     doc_count: 542,
//                   },
//                 ],
//               },
//               '1690100650955206657': {
//                 docs_count: 528,
//                 docs_count_3_days: 37,
//                 last_time: '2024-06-03T23:51:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'General Mounir Shehadeh',
//                     doc_count: 528,
//                   },
//                 ],
//               },
//               '2871412752': {
//                 docs_count: 528,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-03T19:26:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sahar Ghaddar',
//                     doc_count: 528,
//                   },
//                 ],
//               },
//               '1374709071354417156': {
//                 docs_count: 518,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T14:36:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🌸ٱمُ عُڷﮱ ٱڷږضٱ🌸',
//                     doc_count: 518,
//                   },
//                 ],
//               },
//               '1096853783206903809': {
//                 docs_count: 514,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T20:33:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nolla✨',
//                     doc_count: 514,
//                   },
//                 ],
//               },
//               '203476567': {
//                 docs_count: 510,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T15:08:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Forces',
//                     doc_count: 510,
//                   },
//                 ],
//               },
//               '1241520555393777665': {
//                 docs_count: 505,
//                 docs_count_3_days: 42,
//                 last_time: '2024-06-03T20:28:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name:
//                       'Bassam كنعاني من عاصمة الفينيق اليسار جنوب لبنان',
//                     doc_count: 505,
//                   },
//                 ],
//               },
//               '1521972349637115905': {
//                 docs_count: 495,
//                 docs_count_3_days: 24,
//                 last_time: '2024-06-03T21:39:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝐍𝐀𝐒𝐒𝐄𝐑 𝐄𝐋-𝐖𝐀𝟕𝐒𝐇🇱🇧',
//                     doc_count: 495,
//                   },
//                 ],
//               },
//               '345011788': {
//                 docs_count: 495,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T16:52:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝕿𝖍𝖊 𝖕𝖔𝖜𝖊𝖗𝖋𝖚𝖑 𝕽𝖊𝖕𝖚𝖇𝖑𝖎𝖈',
//                     doc_count: 495,
//                   },
//                 ],
//               },
//               '1371240780447240193': {
//                 docs_count: 489,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-02T19:50:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Em Mujtaba(B.Skyn)',
//                     doc_count: 489,
//                   },
//                 ],
//               },
//               '1501536111398641665': {
//                 docs_count: 484,
//                 docs_count_3_days: 21,
//                 last_time: '2024-06-03T21:28:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وقائع',
//                     doc_count: 484,
//                   },
//                 ],
//               },
//               '938344828169056256': {
//                 docs_count: 482,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T17:40:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rita Mokbel ✊🇱🇧🇦🇪',
//                     doc_count: 482,
//                   },
//                 ],
//               },
//               '894508509982863360': {
//                 docs_count: 479,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T14:54:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'التيار الوطني الحر - FPM',
//                     doc_count: 479,
//                   },
//                 ],
//               },
//               '1395356766087663622': {
//                 docs_count: 477,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-04T05:14:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'لبناني اولا',
//                     doc_count: 477,
//                   },
//                 ],
//               },
//               '1502409483263397897': {
//                 docs_count: 476,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T08:20:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'hiwarelmarhala',
//                     doc_count: 476,
//                   },
//                 ],
//               },
//               '1219762730527227904': {
//                 docs_count: 472,
//                 docs_count_3_days: 15,
//                 last_time: '2024-06-03T20:57:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jamal',
//                     doc_count: 472,
//                   },
//                 ],
//               },
//               '1301855973221564416': {
//                 docs_count: 463,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T20:41:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'abojawad 1️⃣🇱🇧🇱🇧ⓜⓗⓐⓜⓐⓓ',
//                     doc_count: 463,
//                   },
//                 ],
//               },
//               '1081195811076222982': {
//                 docs_count: 462,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T21:04:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mohamadkazan',
//                     doc_count: 462,
//                   },
//                 ],
//               },
//               '1187738682830344192': {
//                 docs_count: 459,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-03T22:02:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rania 🇱🇧',
//                     doc_count: 459,
//                   },
//                 ],
//               },
//               '1652703499': {
//                 docs_count: 454,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T20:23:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Marie-Lina Hraoui ن ⚜️🦊☄️',
//                     doc_count: 454,
//                   },
//                 ],
//               },
//               '1266978268181397505': {
//                 docs_count: 452,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T19:06:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ميسون الأسدي',
//                     doc_count: 452,
//                   },
//                 ],
//               },
//               '1393277206483374087': {
//                 docs_count: 451,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-03T21:06:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mimo',
//                     doc_count: 451,
//                   },
//                 ],
//               },
//               '1163684848445394945': {
//                 docs_count: 448,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T20:51:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hani Chahine PhD🌐',
//                     doc_count: 448,
//                   },
//                 ],
//               },
//               '1353435998965915656': {
//                 docs_count: 448,
//                 docs_count_3_days: 36,
//                 last_time: '2024-06-03T20:53:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'RRicha',
//                     doc_count: 448,
//                   },
//                 ],
//               },
//               '1298322634262839297': {
//                 docs_count: 447,
//                 docs_count_3_days: 14,
//                 last_time: '2024-06-03T19:25:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'suhahznsrla',
//                     doc_count: 447,
//                   },
//                 ],
//               },
//               '414287661': {
//                 docs_count: 443,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T15:04:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jossy.H.KH🇱🇧🇫🇷',
//                     doc_count: 443,
//                   },
//                 ],
//               },
//               '1354810667820224519': {
//                 docs_count: 442,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T10:51:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حيدر علي الضاحية الجنوبية🇮🇷🇱🇧',
//                     doc_count: 442,
//                   },
//                 ],
//               },
//               '1288902183266779143': {
//                 docs_count: 441,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T14:16:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'موقع الإمام الخامنئي',
//                     doc_count: 441,
//                   },
//                 ],
//               },
//               '1284762230': {
//                 docs_count: 432,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T19:33:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Aline Samed',
//                     doc_count: 432,
//                   },
//                 ],
//               },
//               '844628271220379652': {
//                 docs_count: 429,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T22:01:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Georges E. Hayek🇱🇧جورج إ. حايك',
//                     doc_count: 429,
//                   },
//                 ],
//               },
//               '1213796376900800513': {
//                 docs_count: 417,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-03T19:53:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Marwa (🐦🔄)',
//                     doc_count: 417,
//                   },
//                 ],
//               },
//               '1337036508746952704': {
//                 docs_count: 413,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-27T23:16:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abo Ali Nasr',
//                     doc_count: 413,
//                   },
//                 ],
//               },
//               '731147739489132548': {
//                 docs_count: 411,
//                 docs_count_3_days: 15,
//                 last_time: '2024-06-03T18:52:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '💎جورج',
//                     doc_count: 411,
//                   },
//                 ],
//               },
//               '2436079741': {
//                 docs_count: 404,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T11:06:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Kataeb Party',
//                     doc_count: 404,
//                   },
//                 ],
//               },
//               '946390576148156416': {
//                 docs_count: 403,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T13:21:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Maya Sabbagh',
//                     doc_count: 403,
//                   },
//                 ],
//               },
//               '1645849501318492165': {
//                 docs_count: 399,
//                 docs_count_3_days: 27,
//                 last_time: '2024-06-03T23:03:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شــshــرف زاز📞',
//                     doc_count: 399,
//                   },
//                 ],
//               },
//               '1482135340794228736': {
//                 docs_count: 394,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T19:06:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tony 🇱🇧2🇱🇧',
//                     doc_count: 394,
//                   },
//                 ],
//               },
//               '798722340': {
//                 docs_count: 392,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T18:14:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'xp² | 🏁',
//                     doc_count: 392,
//                   },
//                 ],
//               },
//               '986586783461888000': {
//                 docs_count: 388,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-03T21:13:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hasan Khalife',
//                     doc_count: 388,
//                   },
//                 ],
//               },
//               '1576980785172811777': {
//                 docs_count: 387,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-02T16:27:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إخبار',
//                     doc_count: 387,
//                   },
//                 ],
//               },
//               '1081270022713020417': {
//                 docs_count: 382,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T19:40:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '‏ ‏Ꮍ🅞ᵐᶰA🇵🇸𝕏|| بِنت الأرض',
//                     doc_count: 382,
//                   },
//                 ],
//               },
//               '814460690': {
//                 docs_count: 371,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-04T01:05:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Freedom Fighter - Anti-Oppressor 🇱🇧 🇵🇸 🇺🇦 ☮️',
//                     doc_count: 371,
//                   },
//                 ],
//               },
//               '1551899908822663169': {
//                 docs_count: 369,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-02T22:25:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mimo ♕',
//                     doc_count: 369,
//                   },
//                 ],
//               },
//               '1275361279': {
//                 docs_count: 367,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T20:02:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Imad Charbel Succar',
//                     doc_count: 367,
//                   },
//                 ],
//               },
//               '1215618935074316288': {
//                 docs_count: 366,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T21:48:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ابو علي ملاك🇮🇷',
//                     doc_count: 366,
//                   },
//                 ],
//               },
//               '467414386': {
//                 docs_count: 364,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-02T19:36:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '| Nader Alatrash |',
//                     doc_count: 364,
//                   },
//                 ],
//               },
//               '285975836': {
//                 docs_count: 361,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T18:56:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Marwan Matni 🇱🇧',
//                     doc_count: 361,
//                   },
//                 ],
//               },
//               '993406994013880322': {
//                 docs_count: 357,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T17:29:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المستشار قاسم حدرج',
//                     doc_count: 357,
//                   },
//                 ],
//               },
//               '362727858': {
//                 docs_count: 355,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-03T04:39:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Youssef Kaiss 🔴🌿',
//                     doc_count: 355,
//                   },
//                 ],
//               },
//               '1152326663839113217': {
//                 docs_count: 353,
//                 docs_count_3_days: 27,
//                 last_time: '2024-06-03T21:34:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الإعلامية إيمان طوالبه',
//                     doc_count: 353,
//                   },
//                 ],
//               },
//               '262310997': {
//                 docs_count: 347,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T08:50:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Aline ܐܠܝܢ',
//                     doc_count: 347,
//                   },
//                 ],
//               },
//               '3193409959': {
//                 docs_count: 345,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-03T20:38:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'فاطمة فتوني | Fatima ftouni',
//                     doc_count: 345,
//                   },
//                 ],
//               },
//               '1580073009703944196': {
//                 docs_count: 343,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T19:14:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝕄𝔸𝕐𝔸 𝕁𝔸𝔹𝔼ℝ',
//                     doc_count: 343,
//                   },
//                 ],
//               },
//               '957757488157339648': {
//                 docs_count: 342,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T21:33:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ali Malli #بالمختصر',
//                     doc_count: 342,
//                   },
//                 ],
//               },
//               '1338584416713633796': {
//                 docs_count: 333,
//                 docs_count_3_days: 32,
//                 last_time: '2024-06-03T20:24:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nidale Sawaya 🔺️',
//                     doc_count: 333,
//                   },
//                 ],
//               },
//               '1027405385517486081': {
//                 docs_count: 324,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T10:20:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'صار الوقت',
//                     doc_count: 324,
//                   },
//                 ],
//               },
//               '1484284405': {
//                 docs_count: 324,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T17:52:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '@Joyce Abou Zeidan جويس أبو زيدان',
//                     doc_count: 324,
//                   },
//                 ],
//               },
//               '166513119': {
//                 docs_count: 324,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T10:37:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Gebran Bassil',
//                     doc_count: 324,
//                   },
//                 ],
//               },
//               '3178547965': {
//                 docs_count: 323,
//                 docs_count_3_days: 15,
//                 last_time: '2024-06-03T20:29:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'MIRNA Abou Assaly🇱🇧',
//                     doc_count: 323,
//                   },
//                 ],
//               },
//               '727401692': {
//                 docs_count: 317,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T20:25:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hadi S. Machmouchi',
//                     doc_count: 317,
//                   },
//                 ],
//               },
//               '1267505413819424769': {
//                 docs_count: 313,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T20:30:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lara. Hadad',
//                     doc_count: 313,
//                   },
//                 ],
//               },
//               '343904121': {
//                 docs_count: 309,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T09:24:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Majdoline | مريم مجدولين اللحام',
//                     doc_count: 309,
//                   },
//                 ],
//               },
//               '1045269688287203329': {
//                 docs_count: 307,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-03T19:51:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسن الجواد ☫ 𓂆',
//                     doc_count: 307,
//                   },
//                 ],
//               },
//               '1512134331782897680': {
//                 docs_count: 306,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T20:23:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Carmen',
//                     doc_count: 306,
//                   },
//                 ],
//               },
//               '1200549442488864768': {
//                 docs_count: 305,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T21:02:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zahraa Ayoub 𓂆',
//                     doc_count: 305,
//                   },
//                 ],
//               },
//               '1450364605255983113': {
//                 docs_count: 305,
//                 docs_count_3_days: 19,
//                 last_time: '2024-06-03T21:00:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'البيت 𝗡𝗲𝘄𝘀',
//                     doc_count: 305,
//                   },
//                 ],
//               },
//               '527601848': {
//                 docs_count: 303,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T08:57:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samah Al Ayass',
//                     doc_count: 303,
//                   },
//                 ],
//               },
//               '1292685535': {
//                 docs_count: 302,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T21:07:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إيناس كريمة',
//                     doc_count: 302,
//                   },
//                 ],
//               },
//               '114681544': {
//                 docs_count: 301,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T16:45:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Naim Halawi',
//                     doc_count: 301,
//                   },
//                 ],
//               },
//               '735718281353383936': {
//                 docs_count: 298,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T12:24:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mahdisaade',
//                     doc_count: 298,
//                   },
//                 ],
//               },
//               '1188329290162675713': {
//                 docs_count: 297,
//                 docs_count_3_days: 14,
//                 last_time: '2024-06-03T18:21:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'OSINTtechnical',
//                     doc_count: 297,
//                   },
//                 ],
//               },
//               '1434479581252268042': {
//                 docs_count: 292,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-04T01:20:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joseph',
//                     doc_count: 292,
//                   },
//                 ],
//               },
//               '1459568182960742404': {
//                 docs_count: 292,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T12:59:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: "علي ج' غندور",
//                     doc_count: 292,
//                   },
//                 ],
//               },
//               '893936024': {
//                 docs_count: 292,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T15:53:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Antoun Abou Haiidar | أنطون أبو حيدر',
//                     doc_count: 292,
//                   },
//                 ],
//               },
//               '436224486': {
//                 docs_count: 288,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T10:56:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Cyril Sirgi',
//                     doc_count: 288,
//                   },
//                 ],
//               },
//               '1201207997764132864': {
//                 docs_count: 286,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T12:56:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مانيسّا',
//                     doc_count: 286,
//                   },
//                 ],
//               },
//               '1011359675818881027': {
//                 docs_count: 285,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T19:56:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Douaa | دعاء',
//                     doc_count: 285,
//                   },
//                 ],
//               },
//               '1486262050779189249': {
//                 docs_count: 283,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-02T11:07:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '☫أبو هاشم☫',
//                     doc_count: 283,
//                   },
//                 ],
//               },
//               '1175309328162725888': {
//                 docs_count: 282,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T13:54:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'gilda ayouby',
//                     doc_count: 282,
//                   },
//                 ],
//               },
//               '1187447437402742785': {
//                 docs_count: 281,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T16:54:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'wafaa',
//                     doc_count: 281,
//                   },
//                 ],
//               },
//               '1038388625514356736': {
//                 docs_count: 280,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T15:56:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Gaby Geagea',
//                     doc_count: 280,
//                   },
//                 ],
//               },
//               '1489570016718643206': {
//                 docs_count: 280,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-02T14:44:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مركز دراسات الازمات nidal hamade',
//                     doc_count: 280,
//                   },
//                 ],
//               },
//               '759160484': {
//                 docs_count: 276,
//                 docs_count_3_days: 16,
//                 last_time: '2024-06-03T14:23:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝓡𝓲𝓽𝓪 ♱ ܪܝܬܐ ن',
//                     doc_count: 276,
//                   },
//                 ],
//               },
//               '1520306915208835072': {
//                 docs_count: 274,
//                 docs_count_3_days: 14,
//                 last_time: '2024-06-03T20:15:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LebyNews',
//                     doc_count: 274,
//                   },
//                 ],
//               },
//               '429267966': {
//                 docs_count: 268,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T19:01:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'carine salameh',
//                     doc_count: 268,
//                   },
//                 ],
//               },
//               '929396538413060098': {
//                 docs_count: 266,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T21:11:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسَين بَلحَص 🇱🇧 ☫ 🇵🇸🇾🇪',
//                     doc_count: 266,
//                   },
//                 ],
//               },
//               '962065368': {
//                 docs_count: 257,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T16:28:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LaftitNazar 🇱🇧🇱🇧',
//                     doc_count: 257,
//                   },
//                 ],
//               },
//               '353543129': {
//                 docs_count: 256,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T18:36:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'البطريركية المارونية',
//                     doc_count: 256,
//                   },
//                 ],
//               },
//               '609952412': {
//                 docs_count: 255,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T06:49:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Walid Ghanem ✌️🇱🇧✊',
//                     doc_count: 255,
//                   },
//                 ],
//               },
//               '2258837700': {
//                 docs_count: 253,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T21:36:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'طوني بولس',
//                     doc_count: 253,
//                   },
//                 ],
//               },
//               '1020787072343396360': {
//                 docs_count: 249,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T17:21:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'RimA✨',
//                     doc_count: 249,
//                   },
//                 ],
//               },
//               '1462113049649766404': {
//                 docs_count: 248,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T12:35:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇮🇶🇮🇶 4️⃣Said Adel الخال الموسوي',
//                     doc_count: 248,
//                   },
//                 ],
//               },
//               '1053761820274630656': {
//                 docs_count: 247,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T17:30:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'fatima',
//                     doc_count: 247,
//                   },
//                 ],
//               },
//               '431942727': {
//                 docs_count: 247,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-04T03:03:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'gaby',
//                     doc_count: 247,
//                   },
//                 ],
//               },
//               '1238547149522173952': {
//                 docs_count: 242,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T07:34:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samara A Abbass',
//                     doc_count: 242,
//                   },
//                 ],
//               },
//               '477993080': {
//                 docs_count: 241,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T19:48:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rami Naim',
//                     doc_count: 241,
//                   },
//                 ],
//               },
//               '1192421498440552448': {
//                 docs_count: 233,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T19:20:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'حسن فاخوري',
//                     doc_count: 233,
//                   },
//                 ],
//               },
//               '482201580': {
//                 docs_count: 232,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-04T01:44:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fares Souaid',
//                     doc_count: 232,
//                   },
//                 ],
//               },
//               '436162374': {
//                 docs_count: 226,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T14:20:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Milad Nasrallah',
//                     doc_count: 226,
//                   },
//                 ],
//               },
//               '981208300179083264': {
//                 docs_count: 226,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T18:32:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مُحمّد سماحة',
//                     doc_count: 226,
//                   },
//                 ],
//               },
//               '1736670269941358592': {
//                 docs_count: 223,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T14:20:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عروج خميني',
//                     doc_count: 223,
//                   },
//                 ],
//               },
//               '980888693555843073': {
//                 docs_count: 216,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T13:21:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'micha 🇱🇧♥️🇱🇧',
//                     doc_count: 216,
//                   },
//                 ],
//               },
//               '1446431919386906662': {
//                 docs_count: 215,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-02T08:27:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Federal Lebanon',
//                     doc_count: 215,
//                   },
//                 ],
//               },
//               '1340695266849140736': {
//                 docs_count: 213,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T07:47:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🌺 آم تــرآب الــكاظــمــي 🌺',
//                     doc_count: 213,
//                   },
//                 ],
//               },
//               '1125863833': {
//                 docs_count: 209,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T20:03:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'زينب عواضة',
//                     doc_count: 209,
//                   },
//                 ],
//               },
//               '3192576656': {
//                 docs_count: 209,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T11:19:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nabil Abdel sater',
//                     doc_count: 209,
//                   },
//                 ],
//               },
//               '1077660540548382722': {
//                 docs_count: 206,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T09:22:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧Ray🇱🇧L🌲nd of the Ced🌲rs',
//                     doc_count: 206,
//                   },
//                 ],
//               },
//               '1077853202232553474': {
//                 docs_count: 204,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T15:37:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samar wehbe انت الامين',
//                     doc_count: 204,
//                   },
//                 ],
//               },
//               '1716340663099301888': {
//                 docs_count: 202,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-04T03:49:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hussein Srour',
//                     doc_count: 202,
//                   },
//                 ],
//               },
//               '1027178201473327104': {
//                 docs_count: 201,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T21:54:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Bissane Tarraf بيسان طراف',
//                     doc_count: 201,
//                   },
//                 ],
//               },
//               '1306157050943213568': {
//                 docs_count: 201,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T12:55:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'غنوى🇱🇧💔💔',
//                     doc_count: 201,
//                   },
//                 ],
//               },
//               '3159383989': {
//                 docs_count: 201,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T11:15:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'hawraa yassin',
//                     doc_count: 201,
//                   },
//                 ],
//               },
//               '1399268540': {
//                 docs_count: 199,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T20:35:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🔱Sanaa Moussa Fahess🔱',
//                     doc_count: 199,
//                   },
//                 ],
//               },
//               '1375141642383032320': {
//                 docs_count: 197,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T19:24:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mimo K.',
//                     doc_count: 197,
//                   },
//                 ],
//               },
//               '438236869': {
//                 docs_count: 197,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T20:21:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fatima Abdallah',
//                     doc_count: 197,
//                   },
//                 ],
//               },
//               '1401873314918903811': {
//                 docs_count: 196,
//                 docs_count_3_days: 15,
//                 last_time: '2024-06-03T20:31:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'nissrineNancy Lakiss🇱🇧 نانسي اللقيس نسرين 🇱🇧',
//                     doc_count: 196,
//                   },
//                 ],
//               },
//               '1406878300530745346': {
//                 docs_count: 196,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T11:45:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Amal Yasin',
//                     doc_count: 196,
//                   },
//                 ],
//               },
//               '992494402517061633': {
//                 docs_count: 192,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T14:10:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '“destra”',
//                     doc_count: 192,
//                   },
//                 ],
//               },
//               '3112616929': {
//                 docs_count: 191,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T18:15:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الجيش اللبناني',
//                     doc_count: 191,
//                   },
//                 ],
//               },
//               '705813584': {
//                 docs_count: 191,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T18:11:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Moawad',
//                     doc_count: 191,
//                   },
//                 ],
//               },
//               '1747984849233649664': {
//                 docs_count: 190,
//                 docs_count_3_days: 24,
//                 last_time: '2024-06-03T20:27:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧 تنظيم ثوار لبنان 🇱🇧',
//                     doc_count: 190,
//                   },
//                 ],
//               },
//               '1188091946289553409': {
//                 docs_count: 189,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T22:10:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sara zein',
//                     doc_count: 189,
//                   },
//                 ],
//               },
//               '1332420484298903553': {
//                 docs_count: 189,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-02T20:02:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ܐܠܝܣ - ✝️ ☦️ 🧡 🇱🇧 - FPM Breath Lebanon',
//                     doc_count: 189,
//                   },
//                 ],
//               },
//               '1195400115730690048': {
//                 docs_count: 186,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T15:58:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mariam Ch',
//                     doc_count: 186,
//                   },
//                 ],
//               },
//               '1425116582284566535': {
//                 docs_count: 181,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T18:47:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '♕« سہNــار »♕',
//                     doc_count: 181,
//                   },
//                 ],
//               },
//               '696998958716080128': {
//                 docs_count: 179,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T21:10:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '✍️ 🇵🇸🇮🇷🇱🇧🇾🇪🇸🇾🇮🇶Ahrar soumar',
//                     doc_count: 179,
//                   },
//                 ],
//               },
//               '1305538499119112195': {
//                 docs_count: 177,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T22:24:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مصادر رفيعة',
//                     doc_count: 177,
//                   },
//                 ],
//               },
//               '1105820658137817089': {
//                 docs_count: 176,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T15:08:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'سَــارَة ☫ | 𓂆',
//                     doc_count: 176,
//                   },
//                 ],
//               },
//               '1834427036': {
//                 docs_count: 175,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T18:53:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إياد أبو شقرا',
//                     doc_count: 175,
//                   },
//                 ],
//               },
//               '544058002': {
//                 docs_count: 175,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T14:09:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sadiq Al-Nabulsi',
//                     doc_count: 175,
//                   },
//                 ],
//               },
//               '971451088099561473': {
//                 docs_count: 175,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T06:11:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Paulina Querault 🇫🇷 بولينا',
//                     doc_count: 175,
//                   },
//                 ],
//               },
//               '1206319056128823297': {
//                 docs_count: 173,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T16:49:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'nihaya',
//                     doc_count: 173,
//                   },
//                 ],
//               },
//               '232799028': {
//                 docs_count: 173,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T11:13:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Maroun Ghannam',
//                     doc_count: 173,
//                   },
//                 ],
//               },
//               '591300228': {
//                 docs_count: 171,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T13:55:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre BouAssi',
//                     doc_count: 171,
//                   },
//                 ],
//               },
//               '294002598': {
//                 docs_count: 170,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T16:08:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joy Lahoud 🇱🇧✊🫡',
//                     doc_count: 170,
//                   },
//                 ],
//               },
//               '410800661': {
//                 docs_count: 170,
//                 docs_count_3_days: 10,
//                 last_time: '2024-06-03T20:12:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mario Malkoun',
//                     doc_count: 170,
//                   },
//                 ],
//               },
//               '1713541355681783808': {
//                 docs_count: 167,
//                 docs_count_3_days: 17,
//                 last_time: '2024-06-03T22:00:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'JAFFAR',
//                     doc_count: 167,
//                   },
//                 ],
//               },
//               '947393150': {
//                 docs_count: 167,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T17:33:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghassan Hasbani',
//                     doc_count: 167,
//                   },
//                 ],
//               },
//               '186637600': {
//                 docs_count: 166,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T04:06:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Antoinette Abboud',
//                     doc_count: 166,
//                   },
//                 ],
//               },
//               '1667488993800335360': {
//                 docs_count: 164,
//                 docs_count_3_days: 23,
//                 last_time: '2024-06-03T22:51:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zãyñåb⭕🔻',
//                     doc_count: 164,
//                   },
//                 ],
//               },
//               '1266707210450731010': {
//                 docs_count: 163,
//                 docs_count_3_days: 14,
//                 last_time: '2024-06-03T18:26:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'BouMkhael',
//                     doc_count: 163,
//                   },
//                 ],
//               },
//               '416053292': {
//                 docs_count: 162,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T16:44:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Richard Kouyoumjian',
//                     doc_count: 162,
//                   },
//                 ],
//               },
//               '1294957164449144833': {
//                 docs_count: 160,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T13:51:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fatima🇱🇧',
//                     doc_count: 160,
//                   },
//                 ],
//               },
//               '4158434472': {
//                 docs_count: 160,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T13:15:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ابو فضل شومان',
//                     doc_count: 160,
//                   },
//                 ],
//               },
//               '471418543': {
//                 docs_count: 157,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T18:00:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Karen Boustany كارن البستاني',
//                     doc_count: 157,
//                   },
//                 ],
//               },
//               '1754068827900461056': {
//                 docs_count: 156,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T15:33:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mounir Halwani',
//                     doc_count: 156,
//                   },
//                 ],
//               },
//               '1086341827052167169': {
//                 docs_count: 155,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T17:49:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zainab🇱🇧',
//                     doc_count: 155,
//                   },
//                 ],
//               },
//               '1203585380995551232': {
//                 docs_count: 153,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-03T22:27:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'زهراء قبيسي',
//                     doc_count: 153,
//                   },
//                 ],
//               },
//               '1013416115136090112': {
//                 docs_count: 152,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T16:11:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Fallah ميشال فلاّح',
//                     doc_count: 152,
//                   },
//                 ],
//               },
//               '1552663987514490880': {
//                 docs_count: 151,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-03T19:33:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dana🇱🇧🇺🇸',
//                     doc_count: 151,
//                   },
//                 ],
//               },
//               '1174055844331368455': {
//                 docs_count: 150,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T17:13:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Darine Succar',
//                     doc_count: 150,
//                   },
//                 ],
//               },
//               '1269395382708166656': {
//                 docs_count: 150,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-28T07:24:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'jawad ahmad',
//                     doc_count: 150,
//                   },
//                 ],
//               },
//               '1433206001369505793': {
//                 docs_count: 150,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T13:48:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tera Hora',
//                     doc_count: 150,
//                   },
//                 ],
//               },
//               '1404576821790838790': {
//                 docs_count: 149,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T22:17:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'وعي',
//                     doc_count: 149,
//                   },
//                 ],
//               },
//               '1344329212749090817': {
//                 docs_count: 148,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T19:41:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ossama Abol hosn',
//                     doc_count: 148,
//                   },
//                 ],
//               },
//               '1216656988098174976': {
//                 docs_count: 143,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-16T16:44:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohamad Ali Jaara || محمد علي جعارة',
//                     doc_count: 143,
//                   },
//                 ],
//               },
//               '1224732674318852103': {
//                 docs_count: 142,
//                 docs_count_3_days: 18,
//                 last_time: '2024-06-03T12:01:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'EL حAJJ',
//                     doc_count: 142,
//                   },
//                 ],
//               },
//               '1171692034551402496': {
//                 docs_count: 140,
//                 docs_count_3_days: 12,
//                 last_time: '2024-06-03T19:14:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'R.T. 🇱🇧 🇮🇹 ®️',
//                     doc_count: 140,
//                   },
//                 ],
//               },
//               '1271078058750074880': {
//                 docs_count: 139,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T15:59:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sergio M',
//                     doc_count: 139,
//                   },
//                 ],
//               },
//               '1532233152131133440': {
//                 docs_count: 138,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T18:21:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'JOSI LF جوزي',
//                     doc_count: 138,
//                   },
//                 ],
//               },
//               '1745170079480680448': {
//                 docs_count: 138,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-02T11:42:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'JACK ABI MANSOUR 🇱🇧',
//                     doc_count: 138,
//                   },
//                 ],
//               },
//               '1392436712392085506': {
//                 docs_count: 136,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T04:05:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'زينب يونس',
//                     doc_count: 136,
//                   },
//                 ],
//               },
//               '1747210507772141568': {
//                 docs_count: 136,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T15:33:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝓢𝗔𝗠𝗜𝗔 | ساميا خدّاج',
//                     doc_count: 136,
//                   },
//                 ],
//               },
//               '1092882789719072768': {
//                 docs_count: 135,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T18:37:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sam Mehana',
//                     doc_count: 135,
//                   },
//                 ],
//               },
//               '1483428636384452610': {
//                 docs_count: 135,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T05:34:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'BellaHabib22',
//                     doc_count: 135,
//                   },
//                 ],
//               },
//               '26487544': {
//                 docs_count: 135,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T14:41:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Serge Zarka',
//                     doc_count: 135,
//                   },
//                 ],
//               },
//               '412888415': {
//                 docs_count: 135,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T14:31:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohamad Barakat',
//                     doc_count: 135,
//                   },
//                 ],
//               },
//               '2717729938': {
//                 docs_count: 133,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T15:22:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Khaled Momtaz خالد ممتاز',
//                     doc_count: 133,
//                   },
//                 ],
//               },
//               '3349906754': {
//                 docs_count: 132,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T17:33:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mohamad alamin محمد الأمين',
//                     doc_count: 132,
//                   },
//                 ],
//               },
//               '935250094584205319': {
//                 docs_count: 131,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T21:24:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joy 💞',
//                     doc_count: 131,
//                   },
//                 ],
//               },
//               '1553768388664639490': {
//                 docs_count: 127,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T17:27:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'EVA 💛',
//                     doc_count: 127,
//                   },
//                 ],
//               },
//               '1118153351789776896': {
//                 docs_count: 126,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-04T01:09:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'brahim',
//                     doc_count: 126,
//                   },
//                 ],
//               },
//               '1254549450644762624': {
//                 docs_count: 126,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-28T13:13:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'khalil🔻 ezzedine🇱🇧🇮🇷',
//                     doc_count: 126,
//                   },
//                 ],
//               },
//               '1336768751795138561': {
//                 docs_count: 125,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T10:58:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mirelina.G.🔺🔺',
//                     doc_count: 125,
//                   },
//                 ],
//               },
//               '1145669962905862146': {
//                 docs_count: 123,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T20:00:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jessica Machaalany',
//                     doc_count: 123,
//                   },
//                 ],
//               },
//               '1291955623064735744': {
//                 docs_count: 122,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T06:16:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'jihan khalife🇱🇧🟥🌲🟥',
//                     doc_count: 122,
//                   },
//                 ],
//               },
//               '2216832181': {
//                 docs_count: 122,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T08:37:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'fatimaayoub',
//                     doc_count: 122,
//                   },
//                 ],
//               },
//               '337601423': {
//                 docs_count: 119,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T16:44:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elias Hankach',
//                     doc_count: 119,
//                   },
//                 ],
//               },
//               '134904577': {
//                 docs_count: 118,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T15:50:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sawsan Mhanna| سوسن مهنّا',
//                     doc_count: 118,
//                   },
//                 ],
//               },
//               '253098870': {
//                 docs_count: 118,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T08:24:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Paula Astih',
//                     doc_count: 118,
//                   },
//                 ],
//               },
//               '1356673860440121344': {
//                 docs_count: 117,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-08T05:33:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Aida Soursouk',
//                     doc_count: 117,
//                   },
//                 ],
//               },
//               '1751566265074819072': {
//                 docs_count: 117,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T08:19:35.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'lebnanaljadeed',
//                     doc_count: 117,
//                   },
//                 ],
//               },
//               '1523977554352295936': {
//                 docs_count: 116,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T05:07:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pierre Jabbour',
//                     doc_count: 116,
//                   },
//                 ],
//               },
//               '1761524413659336704': {
//                 docs_count: 116,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T16:58:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝐇𝐚𝐧𝐚𝐝𝐲 🇱🇧💙',
//                     doc_count: 116,
//                   },
//                 ],
//               },
//               '1127192470087970817': {
//                 docs_count: 115,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T17:01:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Antoine A. Saad',
//                     doc_count: 115,
//                   },
//                 ],
//               },
//               '1215398907976523777': {
//                 docs_count: 115,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T07:56:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '╰☆🇵🇸☆ Яі〽️а 彡★',
//                     doc_count: 115,
//                   },
//                 ],
//               },
//               '305565958': {
//                 docs_count: 114,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T17:41:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dima ديما صادق',
//                     doc_count: 114,
//                   },
//                 ],
//               },
//               '1496447243657822213': {
//                 docs_count: 113,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T13:20:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇬🇧PIERRE🇱🇧',
//                     doc_count: 113,
//                   },
//                 ],
//               },
//               '937814342': {
//                 docs_count: 112,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T22:14:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ric',
//                     doc_count: 112,
//                   },
//                 ],
//               },
//               '1163720469381562368': {
//                 docs_count: 111,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T10:16:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ziad el masri',
//                     doc_count: 111,
//                   },
//                 ],
//               },
//               '1057756371121254400': {
//                 docs_count: 110,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T15:25:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🔺Wzallrespect🔺',
//                     doc_count: 110,
//                   },
//                 ],
//               },
//               '1634660801805008902': {
//                 docs_count: 110,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T06:58:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Haasanahmad1959',
//                     doc_count: 110,
//                   },
//                 ],
//               },
//               '1439315128298655747': {
//                 docs_count: 109,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T19:57:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dana',
//                     doc_count: 109,
//                   },
//                 ],
//               },
//               '3248153867': {
//                 docs_count: 109,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T11:42:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hussein Akil #حظي_ضحكلي',
//                     doc_count: 109,
//                   },
//                 ],
//               },
//               '413346267': {
//                 docs_count: 109,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T19:35:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Charbel Eid',
//                     doc_count: 109,
//                   },
//                 ],
//               },
//               '59124351': {
//                 docs_count: 109,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T07:13:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fouad Makhzoumi',
//                     doc_count: 109,
//                   },
//                 ],
//               },
//               '1019898215129407488': {
//                 docs_count: 108,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T06:53:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'راي الحدّاد | Ray El Haddad',
//                     doc_count: 108,
//                   },
//                 ],
//               },
//               '1318458390830587905': {
//                 docs_count: 108,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T11:53:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sarkis El Chaykha El Douaihy',
//                     doc_count: 108,
//                   },
//                 ],
//               },
//               '482921234': {
//                 docs_count: 108,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T21:16:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'AchkarZak',
//                     doc_count: 108,
//                   },
//                 ],
//               },
//               '1734209557579055104': {
//                 docs_count: 107,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T17:04:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nissrine ܢܣܪܝܢ🇱🇧 †',
//                     doc_count: 107,
//                   },
//                 ],
//               },
//               '597630348': {
//                 docs_count: 107,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T14:34:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Chris✝️',
//                     doc_count: 107,
//                   },
//                 ],
//               },
//               '407174134': {
//                 docs_count: 105,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-04T03:59:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nadim Koteich',
//                     doc_count: 105,
//                   },
//                 ],
//               },
//               '291308681': {
//                 docs_count: 102,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T05:55:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'هادي القبيسي',
//                     doc_count: 102,
//                   },
//                 ],
//               },
//               '411641525': {
//                 docs_count: 102,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T09:24:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ali Mortada || علي مرتضى',
//                     doc_count: 102,
//                   },
//                 ],
//               },
//               '322589255': {
//                 docs_count: 101,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T13:20:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Salim el Sayegh',
//                     doc_count: 101,
//                   },
//                 ],
//               },
//               '1105972515757789184': {
//                 docs_count: 100,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T22:57:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fadel Balhas🇵🇸☫🇱🇧',
//                     doc_count: 100,
//                   },
//                 ],
//               },
//               '460518722': {
//                 docs_count: 100,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T17:30:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Imad Choueiri',
//                     doc_count: 100,
//                   },
//                 ],
//               },
//               '288144358': {
//                 docs_count: 99,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T08:52:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samy Gemayel',
//                     doc_count: 99,
//                   },
//                 ],
//               },
//               '1478747073449283584': {
//                 docs_count: 98,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T17:34:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rifaq',
//                     doc_count: 98,
//                   },
//                 ],
//               },
//               '1561178805611405315': {
//                 docs_count: 98,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T23:14:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أبوعلي كومندوس',
//                     doc_count: 98,
//                   },
//                 ],
//               },
//               '2287915533': {
//                 docs_count: 98,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T17:19:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rasha El-Helou',
//                     doc_count: 98,
//                   },
//                 ],
//               },
//               '928654182168580096': {
//                 docs_count: 98,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T09:52:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '⭐⚔Georges Roukoz⚔⭐',
//                     doc_count: 98,
//                   },
//                 ],
//               },
//               '1511235257739137024': {
//                 docs_count: 96,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T17:24:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Charbel Frem',
//                     doc_count: 96,
//                   },
//                 ],
//               },
//               '1555219768222826497': {
//                 docs_count: 96,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-03T05:38:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'nadine',
//                     doc_count: 96,
//                   },
//                 ],
//               },
//               '1535726573554393091': {
//                 docs_count: 95,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T20:05:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Houssam Alkheshen',
//                     doc_count: 95,
//                   },
//                 ],
//               },
//               '1136489352316575745': {
//                 docs_count: 94,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T15:52:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rita',
//                     doc_count: 94,
//                   },
//                 ],
//               },
//               '1750394829626912768': {
//                 docs_count: 94,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T15:29:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghiya',
//                     doc_count: 94,
//                   },
//                 ],
//               },
//               '992149136718909441': {
//                 docs_count: 93,
//                 docs_count_3_days: 8,
//                 last_time: '2024-06-03T23:50:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'chalhoub',
//                     doc_count: 93,
//                   },
//                 ],
//               },
//               '804417699627565056': {
//                 docs_count: 91,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-01T21:09:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Antoine Sarkis',
//                     doc_count: 91,
//                   },
//                 ],
//               },
//               '1326557994': {
//                 docs_count: 88,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T10:11:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ELIAS EID',
//                     doc_count: 88,
//                   },
//                 ],
//               },
//               '414172778': {
//                 docs_count: 88,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T05:14:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'manuel dergham',
//                     doc_count: 88,
//                   },
//                 ],
//               },
//               '926789128028438528': {
//                 docs_count: 87,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T21:28:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Julie Daccache',
//                     doc_count: 87,
//                   },
//                 ],
//               },
//               '1514493689669861379': {
//                 docs_count: 86,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T09:50:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fadi Raslan',
//                     doc_count: 86,
//                   },
//                 ],
//               },
//               '3276271843': {
//                 docs_count: 86,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-24T00:39:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'أڵــمـيرّزَٱ بِٱقّـرّ أڵـزَيرّچٱوي',
//                     doc_count: 86,
//                   },
//                 ],
//               },
//               '1577113033': {
//                 docs_count: 85,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T18:35:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tony Rizk',
//                     doc_count: 85,
//                   },
//                 ],
//               },
//               '1083459364097347586': {
//                 docs_count: 84,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T19:03:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧souha🇱🇧',
//                     doc_count: 84,
//                   },
//                 ],
//               },
//               '1603222848': {
//                 docs_count: 83,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T08:35:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tony Frangieh',
//                     doc_count: 83,
//                   },
//                 ],
//               },
//               '181906382': {
//                 docs_count: 83,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T11:22:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samir Geagea',
//                     doc_count: 83,
//                   },
//                 ],
//               },
//               '587764069': {
//                 docs_count: 83,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T12:36:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tony Boumalhab',
//                     doc_count: 83,
//                   },
//                 ],
//               },
//               '921461000': {
//                 docs_count: 83,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T02:51:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '_Naji kalek🇱🇧🇺🇸صار لازم نغير مع',
//                     doc_count: 83,
//                   },
//                 ],
//               },
//               '1577662772556488706': {
//                 docs_count: 82,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T17:20:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Maysaa Fawaz 𝕏 ميساء فوّاز',
//                     doc_count: 82,
//                   },
//                 ],
//               },
//               '3263072424': {
//                 docs_count: 82,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T15:40:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Antonios Tawk🇱🇧✞ܐܢܛܘܢܝܘܣ ܛܘܩ',
//                     doc_count: 82,
//                   },
//                 ],
//               },
//               '143960925': {
//                 docs_count: 81,
//                 docs_count_3_days: 21,
//                 last_time: '2024-06-03T22:01:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'human',
//                     doc_count: 81,
//                   },
//                 ],
//               },
//               '1283418910235267072': {
//                 docs_count: 79,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T05:30:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Вiͥaͣncͨaͣ ᴋⷦfoͦuͧrͬy 🇱🇧🌲',
//                     doc_count: 79,
//                   },
//                 ],
//               },
//               '1303456547603976193': {
//                 docs_count: 79,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T10:17:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mayssa yahfoufi',
//                     doc_count: 79,
//                   },
//                 ],
//               },
//               '167367986': {
//                 docs_count: 79,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T12:07:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mhamad allouch',
//                     doc_count: 79,
//                   },
//                 ],
//               },
//               '415065368': {
//                 docs_count: 79,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T17:28:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إدوين ®⎢⎢ ⎥ ™️ Edwen',
//                     doc_count: 79,
//                   },
//                 ],
//               },
//               '1281273337839321088': {
//                 docs_count: 78,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T22:21:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'منشق عن حزب الله',
//                     doc_count: 78,
//                   },
//                 ],
//               },
//               '1086200593': {
//                 docs_count: 77,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-04T05:23:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Raymond Chaker',
//                     doc_count: 77,
//                   },
//                 ],
//               },
//               '1486240347244183556': {
//                 docs_count: 77,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-24T17:38:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fatima',
//                     doc_count: 77,
//                   },
//                 ],
//               },
//               '3144516798': {
//                 docs_count: 77,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-01T22:04:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'wael saad',
//                     doc_count: 77,
//                   },
//                 ],
//               },
//               '1300882815664500736': {
//                 docs_count: 76,
//                 docs_count_3_days: 9,
//                 last_time: '2024-06-03T18:02:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧🇱🇧ali-313🇱🇧🌲💛💚🖤🌲🇱🇧',
//                     doc_count: 76,
//                   },
//                 ],
//               },
//               '1412796721315434500': {
//                 docs_count: 76,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-15T20:34:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nemer Assaf',
//                     doc_count: 76,
//                   },
//                 ],
//               },
//               '884504995487469575': {
//                 docs_count: 76,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-02T19:45:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mona Tahini منى طحيني',
//                     doc_count: 76,
//                   },
//                 ],
//               },
//               '1273200010059014144': {
//                 docs_count: 75,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T14:41:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sfeir',
//                     doc_count: 75,
//                   },
//                 ],
//               },
//               '1647879164': {
//                 docs_count: 75,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T09:47:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ziad Hawat',
//                     doc_count: 75,
//                   },
//                 ],
//               },
//               '841536647183400960': {
//                 docs_count: 75,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T12:09:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ibrahim El Sakr',
//                     doc_count: 75,
//                   },
//                 ],
//               },
//               '1428492970538541060': {
//                 docs_count: 74,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T11:23:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Howaida',
//                     doc_count: 74,
//                   },
//                 ],
//               },
//               '1325528040768679937': {
//                 docs_count: 72,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-03T20:49:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'hawraa‏‎',
//                     doc_count: 72,
//                   },
//                 ],
//               },
//               '939811922291150848': {
//                 docs_count: 72,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T07:00:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rita Boulos',
//                     doc_count: 72,
//                   },
//                 ],
//               },
//               '1500144600425672709': {
//                 docs_count: 71,
//                 docs_count_3_days: 0,
//                 last_time: '2024-06-04T05:00:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Said El Asmar',
//                     doc_count: 71,
//                   },
//                 ],
//               },
//               '1379878647906062338': {
//                 docs_count: 70,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T10:38:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Daad دعد🇱🇧♥️🇱🇧',
//                     doc_count: 70,
//                   },
//                 ],
//               },
//               '397219443': {
//                 docs_count: 68,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T14:02:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'بولا يعقوبيان',
//                     doc_count: 68,
//                   },
//                 ],
//               },
//               '1199621659252183040': {
//                 docs_count: 67,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T10:58:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fayez Nahed',
//                     doc_count: 67,
//                   },
//                 ],
//               },
//               '1337696382724005889': {
//                 docs_count: 67,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T05:13:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Banin Rabah 🌸',
//                     doc_count: 67,
//                   },
//                 ],
//               },
//               '518993215': {
//                 docs_count: 67,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T14:42:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Maya Diab',
//                     doc_count: 67,
//                   },
//                 ],
//               },
//               '52998862': {
//                 docs_count: 66,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T13:51:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Helou | ميشال حلو',
//                     doc_count: 66,
//                   },
//                 ],
//               },
//               '1202867321703981056': {
//                 docs_count: 65,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T07:59:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Pamela',
//                     doc_count: 65,
//                   },
//                 ],
//               },
//               '1210934645547601925': {
//                 docs_count: 65,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T21:10:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مَالِك اٰلأَشْتَرٰ 𓂆🇱🇧☫',
//                     doc_count: 65,
//                   },
//                 ],
//               },
//               '1904242795': {
//                 docs_count: 64,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T07:20:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Roger Edde روجيه إدّه',
//                     doc_count: 64,
//                   },
//                 ],
//               },
//               '378501731': {
//                 docs_count: 64,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T11:17:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'elias zoghby',
//                     doc_count: 64,
//                   },
//                 ],
//               },
//               '792828737926594560': {
//                 docs_count: 59,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T21:40:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Anwar Khalil',
//                     doc_count: 59,
//                   },
//                 ],
//               },
//               '1196515648190464007': {
//                 docs_count: 58,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T13:29:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hanan',
//                     doc_count: 58,
//                   },
//                 ],
//               },
//               '1234927950': {
//                 docs_count: 58,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T06:35:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elie Mahfoud',
//                     doc_count: 58,
//                   },
//                 ],
//               },
//               '1642945571991302144': {
//                 docs_count: 57,
//                 docs_count_3_days: 13,
//                 last_time: '2024-06-03T21:15:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abbas Al khatib',
//                     doc_count: 57,
//                   },
//                 ],
//               },
//               '823503407499636737': {
//                 docs_count: 57,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T19:33:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'julie 961🌪',
//                     doc_count: 57,
//                   },
//                 ],
//               },
//               '1042209137428291584': {
//                 docs_count: 56,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T08:22:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joe',
//                     doc_count: 56,
//                   },
//                 ],
//               },
//               '339965424': {
//                 docs_count: 56,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T09:27:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nadim Gemayel',
//                     doc_count: 56,
//                   },
//                 ],
//               },
//               '614283563': {
//                 docs_count: 56,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T19:18:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Naji Emile Hayek',
//                     doc_count: 56,
//                   },
//                 ],
//               },
//               '800238775951507456': {
//                 docs_count: 56,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T12:13:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Simon Abou Fadel',
//                     doc_count: 56,
//                   },
//                 ],
//               },
//               '1667479737961271298': {
//                 docs_count: 55,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T07:57:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'عـ♥ـبـ♥ـآسـ♥ـ 💛',
//                     doc_count: 55,
//                   },
//                 ],
//               },
//               '178682241': {
//                 docs_count: 55,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T16:55:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Waddah Sadek - وضاح الصادق',
//                     doc_count: 55,
//                   },
//                 ],
//               },
//               '410654689': {
//                 docs_count: 55,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T14:36:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jimmy Francis - جيمي فرنسيس🇱🇧',
//                     doc_count: 55,
//                   },
//                 ],
//               },
//               '911885453107875840': {
//                 docs_count: 55,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T06:56:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Marc Saad',
//                     doc_count: 55,
//                   },
//                 ],
//               },
//               '1608473968893206528': {
//                 docs_count: 54,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-10T17:37:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'chadia',
//                     doc_count: 54,
//                   },
//                 ],
//               },
//               '475828909': {
//                 docs_count: 53,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T04:27:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧 طرابلسي 🇱🇧',
//                     doc_count: 53,
//                   },
//                 ],
//               },
//               '272227624': {
//                 docs_count: 52,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T14:46:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'makram rabah',
//                     doc_count: 52,
//                   },
//                 ],
//               },
//               '1506704782018465803': {
//                 docs_count: 49,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T19:15:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jay Abboud',
//                     doc_count: 49,
//                   },
//                 ],
//               },
//               '247764313': {
//                 docs_count: 49,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T18:30:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joe Hammoura',
//                     doc_count: 49,
//                   },
//                 ],
//               },
//               '2518627392': {
//                 docs_count: 49,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T16:43:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joe Moujally',
//                     doc_count: 49,
//                   },
//                 ],
//               },
//               '415727207': {
//                 docs_count: 49,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T07:43:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Chammai',
//                     doc_count: 49,
//                   },
//                 ],
//               },
//               '570929957': {
//                 docs_count: 49,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T16:23:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'May Chidiac مي شدياق',
//                     doc_count: 49,
//                   },
//                 ],
//               },
//               '2945516527': {
//                 docs_count: 48,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T19:13:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Khaled Ajib',
//                     doc_count: 48,
//                   },
//                 ],
//               },
//               '413194280': {
//                 docs_count: 48,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T09:49:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'روضه حسين علي قاسم',
//                     doc_count: 48,
//                   },
//                 ],
//               },
//               '375249420': {
//                 docs_count: 47,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T17:17:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'سالم زهران',
//                     doc_count: 47,
//                   },
//                 ],
//               },
//               '1351967661677277184': {
//                 docs_count: 46,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T18:29:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abir Geagea',
//                     doc_count: 46,
//                   },
//                 ],
//               },
//               '461626754': {
//                 docs_count: 46,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T15:12:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'خالد العمّار',
//                     doc_count: 46,
//                   },
//                 ],
//               },
//               '1473305682099290114': {
//                 docs_count: 45,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-08T11:58:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝕴𝖒𝖆𝖉🇱🇧🇮🇷🇵🇸🖤',
//                     doc_count: 45,
//                   },
//                 ],
//               },
//               '1492381598284660746': {
//                 docs_count: 45,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T14:04:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Arz fadous',
//                     doc_count: 45,
//                   },
//                 ],
//               },
//               '2946562729': {
//                 docs_count: 45,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T16:22:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'carla  El Hayek',
//                     doc_count: 45,
//                   },
//                 ],
//               },
//               '987419000446636037': {
//                 docs_count: 45,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T08:21:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fatima 💛🧡💚',
//                     doc_count: 45,
//                   },
//                 ],
//               },
//               '1384035346053169168': {
//                 docs_count: 44,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T14:54:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LUNA LF',
//                     doc_count: 44,
//                   },
//                 ],
//               },
//               '1194957278119641094': {
//                 docs_count: 43,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T20:11:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zeinab Kahil',
//                     doc_count: 43,
//                   },
//                 ],
//               },
//               '1330798613979684864': {
//                 docs_count: 43,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-08T19:40:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Taha Sleem | طه سليم',
//                     doc_count: 43,
//                   },
//                 ],
//               },
//               '201985422': {
//                 docs_count: 43,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T13:52:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الخبير الألماني 🇩🇪 Der Deutsche Experte',
//                     doc_count: 43,
//                   },
//                 ],
//               },
//               '761144458448625665': {
//                 docs_count: 43,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T22:01:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Layal Alekhtiar - ليال الاختيار',
//                     doc_count: 43,
//                   },
//                 ],
//               },
//               '904990663959134208': {
//                 docs_count: 43,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T10:33:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elie Estephan',
//                     doc_count: 43,
//                   },
//                 ],
//               },
//               '1139922386944479233': {
//                 docs_count: 42,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T15:33:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LF-Toronto Chapter',
//                     doc_count: 42,
//                   },
//                 ],
//               },
//               '1467023126': {
//                 docs_count: 42,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-02T08:01:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'General Ashraf Rifi',
//                     doc_count: 42,
//                   },
//                 ],
//               },
//               '998749017508114432': {
//                 docs_count: 42,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T20:34:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Abbass Fneish',
//                     doc_count: 42,
//                   },
//                 ],
//               },
//               '1463903688666275842': {
//                 docs_count: 40,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-19T12:32:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝙈𝙍.𝘼𝘿𝘼𝙈',
//                     doc_count: 40,
//                   },
//                 ],
//               },
//               '1710616106191245312': {
//                 docs_count: 40,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-04T00:41:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'الموسَويّ 𓂆 يَحيَى🔻',
//                     doc_count: 40,
//                   },
//                 ],
//               },
//               '1285150342225723397': {
//                 docs_count: 39,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T17:53:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ضياء أبو طعام',
//                     doc_count: 39,
//                   },
//                 ],
//               },
//               '3034497500': {
//                 docs_count: 39,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T19:00:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rita e khattar',
//                     doc_count: 39,
//                   },
//                 ],
//               },
//               '1207400128769867776': {
//                 docs_count: 38,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T06:21:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mireille 🇱🇧',
//                     doc_count: 38,
//                   },
//                 ],
//               },
//               '1199437285865000961': {
//                 docs_count: 37,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-22T05:34:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ᬁنـِِـِـ💛وُر فُـ,ـآطُـمـْْ❦',
//                     doc_count: 37,
//                   },
//                 ],
//               },
//               '1504482867291729932': {
//                 docs_count: 37,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T11:08:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fadi Ghosn...🍁',
//                     doc_count: 37,
//                   },
//                 ],
//               },
//               '1518487154': {
//                 docs_count: 37,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T06:25:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Techy',
//                     doc_count: 37,
//                   },
//                 ],
//               },
//               '1608444735177326594': {
//                 docs_count: 37,
//                 docs_count_3_days: 11,
//                 last_time: '2024-06-03T05:44:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ZahraaMahdi',
//                     doc_count: 37,
//                   },
//                 ],
//               },
//               '1319622754493149185': {
//                 docs_count: 36,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-16T10:54:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mahmoud EID',
//                     doc_count: 36,
//                   },
//                 ],
//               },
//               '1551633785694916608': {
//                 docs_count: 36,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T08:38:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ابوسمير .طروبلسي انا',
//                     doc_count: 36,
//                   },
//                 ],
//               },
//               '1282980336': {
//                 docs_count: 35,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T00:15:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghassan Jawad',
//                     doc_count: 35,
//                   },
//                 ],
//               },
//               '1373776258790793223': {
//                 docs_count: 35,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-10T10:20:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇮🇷 Fatimaa 🇱🇧',
//                     doc_count: 35,
//                   },
//                 ],
//               },
//               '2199795687': {
//                 docs_count: 35,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T18:19:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebanese Observer',
//                     doc_count: 35,
//                   },
//                 ],
//               },
//               '1074764936151228416': {
//                 docs_count: 34,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T10:51:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'marc chidiac',
//                     doc_count: 34,
//                   },
//                 ],
//               },
//               '1539931947236990978': {
//                 docs_count: 34,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-01T15:44:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mohamad Hasson',
//                     doc_count: 34,
//                   },
//                 ],
//               },
//               '22641379': {
//                 docs_count: 34,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T12:31:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Carla Hayek',
//                     doc_count: 34,
//                   },
//                 ],
//               },
//               '2998253167': {
//                 docs_count: 33,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T14:57:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Cʟᴀᴜᴅᴇ Gᴇᴍᴀʏᴇʟ',
//                     doc_count: 33,
//                   },
//                 ],
//               },
//               '405844319': {
//                 docs_count: 33,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T14:29:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Edgard Bou Malhab',
//                     doc_count: 33,
//                   },
//                 ],
//               },
//               '478764007': {
//                 docs_count: 33,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T08:26:17.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Fares Ayoub 🇱🇧',
//                     doc_count: 33,
//                   },
//                 ],
//               },
//               '797811661629493248': {
//                 docs_count: 33,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T13:16:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Melhem Khalaf',
//                     doc_count: 33,
//                   },
//                 ],
//               },
//               '181862310': {
//                 docs_count: 32,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T15:12:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ibrahim Mneimneh | ابراهيم منيمنة',
//                     doc_count: 32,
//                   },
//                 ],
//               },
//               '149730585': {
//                 docs_count: 31,
//                 docs_count_3_days: 7,
//                 last_time: '2024-06-03T23:59:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'gladys slim',
//                     doc_count: 31,
//                   },
//                 ],
//               },
//               '246747724': {
//                 docs_count: 31,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T19:18:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇧🇷🇱🇧⭐ A7mad ⭐🇱🇧🇧🇷',
//                     doc_count: 31,
//                   },
//                 ],
//               },
//               '1032415355782750208': {
//                 docs_count: 30,
//                 docs_count_3_days: 5,
//                 last_time: '2024-06-03T19:31:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧Sousoumadridistabrasileiro🇺🇸',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '1069209553': {
//                 docs_count: 30,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T15:27:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Maroun Maroun',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '1526842448420511744': {
//                 docs_count: 30,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T11:29:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Khadija M. Hawi',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '350985398': {
//                 docs_count: 30,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T10:18:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nicolas Sehnaoui',
//                     doc_count: 30,
//                   },
//                 ],
//               },
//               '246766762': {
//                 docs_count: 29,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T08:19:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hammoudé',
//                     doc_count: 29,
//                   },
//                 ],
//               },
//               '828269642154143744': {
//                 docs_count: 29,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-01T17:21:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'léa🎀',
//                     doc_count: 29,
//                   },
//                 ],
//               },
//               '1190003573272301568': {
//                 docs_count: 28,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T17:16:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'joumana 🇱🇧',
//                     doc_count: 28,
//                   },
//                 ],
//               },
//               '1336372160277979143': {
//                 docs_count: 28,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T15:48:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dany El Hajj',
//                     doc_count: 28,
//                   },
//                 ],
//               },
//               '2469297722': {
//                 docs_count: 28,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T16:07:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Samar Abou Khalil',
//                     doc_count: 28,
//                   },
//                 ],
//               },
//               '3427647804': {
//                 docs_count: 28,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T18:40:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghada Ayoub',
//                     doc_count: 28,
//                   },
//                 ],
//               },
//               '733377378479706114': {
//                 docs_count: 28,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T03:00:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rania',
//                     doc_count: 28,
//                   },
//                 ],
//               },
//               '1201465141373607937': {
//                 docs_count: 26,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T10:11:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Nazih Matta',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '1342746416083570688': {
//                 docs_count: 26,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-17T11:27:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧إيهاب ناصر الدين🇵🇸',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '1585899287292116993': {
//                 docs_count: 26,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T15:30:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'karma_k',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '477601842': {
//                 docs_count: 26,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T16:38:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'bo Jad🇱🇧',
//                     doc_count: 26,
//                   },
//                 ],
//               },
//               '1494987500896628739': {
//                 docs_count: 25,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T17:52:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Gebraneum & Co 🕯',
//                     doc_count: 25,
//                   },
//                 ],
//               },
//               '1557794374494322690': {
//                 docs_count: 25,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T18:34:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Najat Key',
//                     doc_count: 25,
//                   },
//                 ],
//               },
//               '246474396': {
//                 docs_count: 25,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T17:17:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Amy Aoun',
//                     doc_count: 25,
//                   },
//                 ],
//               },
//               '268759867': {
//                 docs_count: 25,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T21:22:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'رينة من لبنانRęyñà🇱🇧',
//                     doc_count: 25,
//                   },
//                 ],
//               },
//               '1218931627': {
//                 docs_count: 24,
//                 docs_count_3_days: 6,
//                 last_time: '2024-06-03T17:04:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mark B. Daou 🅱️➕',
//                     doc_count: 24,
//                   },
//                 ],
//               },
//               '1435196175305650176': {
//                 docs_count: 24,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-16T09:52:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'George Kadisi',
//                     doc_count: 24,
//                   },
//                 ],
//               },
//               '745090891': {
//                 docs_count: 24,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-17T15:48:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Cesar Abi Khalil',
//                     doc_count: 24,
//                   },
//                 ],
//               },
//               '1093425096876802048': {
//                 docs_count: 23,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T10:27:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'شربل الخوري',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '1213689931': {
//                 docs_count: 23,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T16:21:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Margot...',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '1294250862362099713': {
//                 docs_count: 23,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-23T19:33:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '❤️🇱🇧2 أيقونة الجهاد والمقاومة🇱🇧❤️',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '1348714102470930433': {
//                 docs_count: 23,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T09:22:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Markos',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '1370690069892378624': {
//                 docs_count: 23,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T10:25:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧Ali Sherry🇱🇧',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '1461740072831795207': {
//                 docs_count: 23,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T21:10:57.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'زين',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '275970771': {
//                 docs_count: 23,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-18T17:29:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'fadichahwan',
//                     doc_count: 23,
//                   },
//                 ],
//               },
//               '1185178302958493701': {
//                 docs_count: 22,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T08:19:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sarah Bou Rjeily🇱🇧',
//                     doc_count: 22,
//                   },
//                 ],
//               },
//               '1186884728001052672': {
//                 docs_count: 22,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T19:48:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'amal 2🇱🇧',
//                     doc_count: 22,
//                   },
//                 ],
//               },
//               '1480925098869669897': {
//                 docs_count: 22,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T17:50:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Wiseman',
//                     doc_count: 22,
//                   },
//                 ],
//               },
//               '1637680357': {
//                 docs_count: 22,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T16:45:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧Hussein Hazimeh🇱🇧',
//                     doc_count: 22,
//                   },
//                 ],
//               },
//               '271361747': {
//                 docs_count: 22,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T20:30:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jihad Pakradouni',
//                     doc_count: 22,
//                   },
//                 ],
//               },
//               '1200747012': {
//                 docs_count: 21,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T06:02:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ALI misto',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '1258386336559632387': {
//                 docs_count: 21,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T10:54:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elie Chebly',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '1281156659465916417': {
//                 docs_count: 21,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T13:24:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧Yorgo Abboud/يورغو عبّود🇱🇧',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '1281213779527729153': {
//                 docs_count: 21,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-17T19:54:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇧🇷Nour ♡ F@tim@🇧🇷',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '1295550604421496832': {
//                 docs_count: 21,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T18:23:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sunny',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '3096176128': {
//                 docs_count: 21,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T04:44:54.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dr Semaan Boutros سمعان بطرس',
//                     doc_count: 21,
//                   },
//                 ],
//               },
//               '1292325900122497024': {
//                 docs_count: 20,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-28T06:15:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'السيستانية الولائية|فلسطين 🇵🇸 🇮🇶',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '2150630940': {
//                 docs_count: 20,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T16:06:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rindala Jabbour رندلى جبور',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '2169739632': {
//                 docs_count: 20,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-01T13:37:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Amu.Alan',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '278235826': {
//                 docs_count: 20,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T20:16:37.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elissa',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '527855832': {
//                 docs_count: 20,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-30T18:42:26.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Issa Hamdan ',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '841841564586524673': {
//                 docs_count: 20,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T11:14:06.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rana chaaban 🇱🇧',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '887457396': {
//                 docs_count: 20,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T17:08:46.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Kataeb Youth',
//                     doc_count: 20,
//                   },
//                 ],
//               },
//               '1263553098083176449': {
//                 docs_count: 19,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T15:34:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝕬𝖑𝖎 𝖆𝖙𝖜𝖎 💛 🏴هيهات منا الذلة🏴',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '1357023314837966850': {
//                 docs_count: 19,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T19:18:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Elias Murr',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '1365788365015105538': {
//                 docs_count: 19,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-14T16:39:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'هادي سيف الدين|| 𓂆☫',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '2985490699': {
//                 docs_count: 19,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-29T07:13:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Anthony Salloum',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '422024329': {
//                 docs_count: 19,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-03T14:05:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Andrew Lebanon',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '940696646526128128': {
//                 docs_count: 19,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-21T16:10:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'LC khoory',
//                     doc_count: 19,
//                   },
//                 ],
//               },
//               '1542494564950441988': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T11:32:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Kutlat Tajadod',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '1669276149845835777': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T17:37:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'mohammad kashmar',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '1920829086': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-02T18:35:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sabine Jean Youssef',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '251815948': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-07T10:59:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'هادي الأمين',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '2858373900': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T14:17:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joseph Abu Fadel',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '454653269': {
//                 docs_count: 18,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T12:38:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧 NAdia',
//                     doc_count: 18,
//                   },
//                 ],
//               },
//               '1126409073602256896': {
//                 docs_count: 17,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-20T06:08:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Georges Jamhouri جورج جمهوري',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '1261972926649249792': {
//                 docs_count: 17,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T14:24:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Chadi Jeha',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '1336880622736961536': {
//                 docs_count: 17,
//                 docs_count_3_days: 0,
//                 last_time: '2023-04-23T18:34:59.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Louis Fares 🇱🇧',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '1535007065311170560': {
//                 docs_count: 17,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-11T20:19:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Zaynab Haydar',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '1674178427144863746': {
//                 docs_count: 17,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T17:36:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'المختار الثقفي',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '1716876581334102024': {
//                 docs_count: 17,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T07:00:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'abbas haidar',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '329574194': {
//                 docs_count: 17,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-20T11:45:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joêlle Bou Abboud Rouillard',
//                     doc_count: 17,
//                   },
//                 ],
//               },
//               '1309385604396986369': {
//                 docs_count: 16,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-27T10:51:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Lebnen1',
//                     doc_count: 16,
//                   },
//                 ],
//               },
//               '132104458': {
//                 docs_count: 16,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T12:22:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Darine Dandachly دارين دندشلي',
//                     doc_count: 16,
//                   },
//                 ],
//               },
//               '197802204': {
//                 docs_count: 16,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-31T11:58:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Toni Najib Khoury',
//                     doc_count: 16,
//                   },
//                 ],
//               },
//               '779765765734096896': {
//                 docs_count: 16,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T16:59:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ghassan Atallah',
//                     doc_count: 16,
//                   },
//                 ],
//               },
//               '1107473764596494336': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-14T04:37:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Menki 𓂀 #Beirut',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '1283419475564519427': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T17:24:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Cedra 🇱🇧 🌲',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '1354583116237705218': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T16:59:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hanin Dagher',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '1408869094808502275': {
//                 docs_count: 15,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T16:21:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'محمد رضا',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '475546631': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-08T20:47:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Georges Nahas',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '907992437695684608': {
//                 docs_count: 15,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-31T18:07:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Michel Faddoul',
//                     doc_count: 15,
//                   },
//                 ],
//               },
//               '1214744360266477568': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-11T09:49:36.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ZaHraa 🔔',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '1558511102803288065': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T08:31:12.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝖲𝖺𝗆𝗂 💖💖',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '1634812957698785281': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-17T19:52:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'don',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '2826134439': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-20T12:04:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elias Semaan - الياس سمعان',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '434684327': {
//                 docs_count: 14,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T19:22:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dany Dagher',
//                     doc_count: 14,
//                   },
//                 ],
//               },
//               '1109425961542606848': {
//                 docs_count: 13,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T11:45:03.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'رحمة محي الدين',
//                     doc_count: 13,
//                   },
//                 ],
//               },
//               '1346949166061264897': {
//                 docs_count: 13,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-12T00:08:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jack Abi Mansour 🇱🇧💚💚💚',
//                     doc_count: 13,
//                   },
//                 ],
//               },
//               '1488547764187316238': {
//                 docs_count: 13,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-02T12:13:48.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elie semaan',
//                     doc_count: 13,
//                   },
//                 ],
//               },
//               '1046425648649113600': {
//                 docs_count: 12,
//                 docs_count_3_days: 3,
//                 last_time: '2024-06-03T19:10:04.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rabih Badaoui',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '1533129154526334976': {
//                 docs_count: 12,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T12:46:14.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'إبن طرابلس',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '1571850507651514368': {
//                 docs_count: 12,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-28T17:01:41.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ali',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '2700940262': {
//                 docs_count: 12,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T12:57:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mary Joe',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '69979562': {
//                 docs_count: 12,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-02T12:06:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'MalihDaaboul 🐳',
//                     doc_count: 12,
//                   },
//                 ],
//               },
//               '1078417942335889408': {
//                 docs_count: 11,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-21T17:04:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '〽️ir@ khoury 🇱🇧 إبنة جبيل',
//                     doc_count: 11,
//                   },
//                 ],
//               },
//               '1180085826425950208': {
//                 docs_count: 11,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T15:08:28.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Muse Mrad',
//                     doc_count: 11,
//                   },
//                 ],
//               },
//               '141320689': {
//                 docs_count: 11,
//                 docs_count_3_days: 2,
//                 last_time: '2024-06-01T02:32:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '5allesna ba2a',
//                     doc_count: 11,
//                   },
//                 ],
//               },
//               '2353907198': {
//                 docs_count: 11,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-23T14:50:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Alain Hakim',
//                     doc_count: 11,
//                   },
//                 ],
//               },
//               '60646332': {
//                 docs_count: 11,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T14:33:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Jad Bou Karam',
//                     doc_count: 11,
//                   },
//                 ],
//               },
//               '1296535174931513344': {
//                 docs_count: 10,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-30T08:01:33.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'pascal',
//                     doc_count: 10,
//                   },
//                 ],
//               },
//               '1336768816936869889': {
//                 docs_count: 10,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-06T13:17:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Eliane Khoury',
//                     doc_count: 10,
//                   },
//                 ],
//               },
//               '576290548': {
//                 docs_count: 10,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-02T20:13:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Elise Bassil',
//                     doc_count: 10,
//                   },
//                 ],
//               },
//               '74481416': {
//                 docs_count: 10,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-19T20:59:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sara Assaf',
//                     doc_count: 10,
//                   },
//                 ],
//               },
//               '729247066015195136': {
//                 docs_count: 9,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-27T20:19:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'jack poladian',
//                     doc_count: 9,
//                   },
//                 ],
//               },
//               '1221470959': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T14:13:19.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Leila Issa',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '1354040068500029440': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-29T15:24:22.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Em ahmad 🔁',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '1713652834921508865': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-28T14:48:02.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧 عامر',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '2285690342': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-09T14:01:07.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Bumblebee',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '3037697849': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-15T17:23:01.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Riad  Tawk',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '53199113': {
//                 docs_count: 8,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T14:27:40.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ربيع شاتيلا',
//                     doc_count: 8,
//                   },
//                 ],
//               },
//               '1223846196': {
//                 docs_count: 7,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-24T06:58:05.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mala Housseini',
//                     doc_count: 7,
//                   },
//                 ],
//               },
//               '271138622': {
//                 docs_count: 7,
//                 docs_count_3_days: 4,
//                 last_time: '2024-06-02T10:28:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dakhlallah x🇱🇧',
//                     doc_count: 7,
//                   },
//                 ],
//               },
//               '495403049': {
//                 docs_count: 7,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T08:15:52.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hanane Rahme',
//                     doc_count: 7,
//                   },
//                 ],
//               },
//               '1251479393710624770': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-19T22:04:10.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mahmoud.S.S',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '1263503410084675584': {
//                 docs_count: 6,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-03T15:24:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'L’BoB',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '1707273882749509632': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T19:11:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Richard Hayek',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '1717176532651642880': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-14T23:12:20.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'زهرة الربيع',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '1732093684747808768': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-19T12:46:32.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Carina Khoury',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '2922461192': {
//                 docs_count: 6,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T20:40:43.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'علي',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '360514619': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-17T16:34:08.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Patrick Richa',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '363150959': {
//                 docs_count: 6,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-17T17:32:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Carla Q',
//                     doc_count: 6,
//                   },
//                 ],
//               },
//               '1259822462369517568': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T20:26:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ElyNasr',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//               '1267558507391393793': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-13T14:47:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Giogeagea3',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//               '1340943601656868864': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T17:55:58.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Cedric Chemaly',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//               '1656394505136816128': {
//                 docs_count: 5,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-18T13:25:49.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ابو محمد مالك',
//                     doc_count: 5,
//                   },
//                 ],
//               },
//               '1190990027427373057': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-28T17:46:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'جواد نصرالله 🔻 Jawad Nasrallah',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '1246362328100155393': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-29T17:39:13.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Tarek Moussa',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '1421569840020602881': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-21T09:27:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hassan Salameh 🇱🇧👑',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '1436638588645650432': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-06T08:39:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'El Hajj',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '1712169428127776768': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-13T19:13:34.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'THE QUEEN 2 🔄',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '218378059': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-29T05:27:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Joe',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '383227402': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-20T05:22:47.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'hanadihamadani',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '413235001': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T07:29:39.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'joseph tabet',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '964794402895024129': {
//                 docs_count: 4,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-30T17:10:55.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'michel',
//                     doc_count: 4,
//                   },
//                 ],
//               },
//               '1042760827613396992': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T07:13:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'مغرد111',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1241982793317482497': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-16T17:37:45.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Sara Abou Rjeily',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1244045281521475584': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-13T22:44:24.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '𝒮𝗔𝗠𝗜𝗔 | ساميا خدّاج',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1323551661781065728': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-10T05:52:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'ŘØĞ€®W@K£|)',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1373341874119979008': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-10T21:05:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Hanna',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1488725996912009223': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-02-23T16:52:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'MAY 🇱🇧🇺🇸',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1571861287704879104': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-26T21:51:23.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧British Made in Lebanon🇬🇧',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1597277963191570432': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-25T13:15:44.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'دكتور نظام',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1914287234': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-08T20:11:09.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Majd Harb',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '518719879': {
//                 docs_count: 3,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-30T15:01:31.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'francoise 🇱🇧',
//                     doc_count: 3,
//                   },
//                 ],
//               },
//               '1296877300546404352': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-31T19:09:27.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Dr. Taghrid',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '1454960946': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-26T12:56:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Russella Akl',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '1455957603633274880': {
//                 docs_count: 2,
//                 docs_count_3_days: 1,
//                 last_time: '2024-06-01T14:58:30.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'George Azzi',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '1487693264589242374': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-03-29T07:30:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'hussein 🇱🇧',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '1492613334386057219': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-23T15:28:56.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'clarita',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '255420303': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-29T12:02:15.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Reham Khalill 🇦🇺🇱🇧🇺🇦',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '37692962': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-08T10:38:51.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🇱🇧 يحيا لبنان 🇱🇧',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '731424230': {
//                 docs_count: 2,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-23T14:27:38.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Rita🇱🇧🇸🇪',
//                     doc_count: 2,
//                   },
//                 ],
//               },
//               '1316097968882233346': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-14T06:45:16.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mario Nassif',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '1478436685943816198': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-22T16:51:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '❀Tima❀',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '1479720576': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-27T14:24:42.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'samer haj ali',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '1496950810873409536': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-01T16:19:25.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Gk_kds',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '1572537581576888321': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-21T05:48:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'christine m semaan',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '1656379994761723905': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2023-11-20T13:17:53.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Ali Taleb',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '1734673140423229440': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-01-31T15:16:29.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'داني',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '2967546975': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-05-04T16:58:18.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Mell',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '471710178': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2024-04-08T08:57:11.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'Kaiser Fares',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//               '49436802': {
//                 docs_count: 1,
//                 docs_count_3_days: 0,
//                 last_time: '2023-12-16T09:20:50.000Z',
//                 entity_names: [
//                   {
//                     entity_name: '🅰️zad Hay',
//                     doc_count: 1,
//                   },
//                 ],
//               },
//             },
//           },
//           instagram: {
//             docs_count: 13326,
//             docs_count_3_days: 0,
//             last_time: '2023-11-01T21:31:09.000Z',
//             sources: {},
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.569000',
//       },
//       article: {
//         docs_count: 105449,
//         docs_count_3_days: 1,
//         last_time: '2024-06-03T11:21:27.000Z',
//         networks: {
//           elnashra: {
//             docs_count: 26870,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T08:56:44.000Z',
//             sources: {},
//           },
//           'شبكة الميادين': {
//             docs_count: 20857,
//             docs_count_3_days: 0,
//             last_time: '2024-03-26T04:27:55.000Z',
//             sources: {},
//           },
//           lebanon24: {
//             docs_count: 17392,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T09:44:34.000Z',
//             sources: {},
//           },
//           almanar: {
//             docs_count: 7092,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T11:34:09.000Z',
//             sources: {},
//           },
//           almayadeen: {
//             docs_count: 4694,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T10:50:56.000Z',
//             sources: {},
//           },
//           alahednews: {
//             docs_count: 4550,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T09:58:30.000Z',
//             sources: {},
//           },
//           lebanondebate: {
//             docs_count: 4213,
//             docs_count_3_days: 0,
//             last_time: '2024-05-29T15:31:59.000Z',
//             sources: {},
//           },
//           addiyar: {
//             docs_count: 4159,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T12:35:33.000Z',
//             sources: {},
//           },
//           'nna-leb': {
//             docs_count: 3730,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T08:52:56.000Z',
//             sources: {},
//           },
//           annahar: {
//             docs_count: 3616,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T08:57:00.000Z',
//             sources: {},
//           },
//           janoubia: {
//             docs_count: 2623,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T12:56:06.000Z',
//             sources: {},
//           },
//           mtv: {
//             docs_count: 2520,
//             docs_count_3_days: 1,
//             last_time: '2024-06-03T11:21:27.000Z',
//             sources: {},
//           },
//           nidaalwatan: {
//             docs_count: 2298,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T12:49:26.000Z',
//             sources: {},
//           },
//           'al-akhbar': {
//             docs_count: 436,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T12:49:39.000Z',
//             sources: {},
//           },
//           Elnashra: {
//             docs_count: 360,
//             docs_count_3_days: 0,
//             last_time: '2024-01-11T21:50:00.000Z',
//             sources: {},
//           },
//           Almanar: {
//             docs_count: 33,
//             docs_count_3_days: 0,
//             last_time: '2024-01-15T00:00:00.000Z',
//             sources: {},
//           },
//           Janoubia: {
//             docs_count: 6,
//             docs_count_3_days: 0,
//             last_time: '2023-09-02T00:00:00.000Z',
//             sources: {},
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.781000',
//       },
//     },
//     'inter-arab': {
//       sn: {
//         docs_count: 9908,
//         docs_count_3_days: 320,
//         last_time: '2024-06-03T21:40:00.000Z',
//         networks: {
//           twitter: {
//             docs_count: 9908,
//             docs_count_3_days: 320,
//             last_time: '2024-06-03T21:40:00.000Z',
//             sources: {
//               '5536782': {
//                 docs_count: 9908,
//                 docs_count_3_days: 320,
//                 last_time: '2024-06-03T21:40:00.000Z',
//                 entity_names: [
//                   {
//                     entity_name: 'قناة الجزيرة',
//                     doc_count: 9908,
//                   },
//                 ],
//               },
//             },
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.569000',
//       },
//       article: {
//         docs_count: 43232,
//         docs_count_3_days: 0,
//         last_time: '2024-05-21T10:57:50.000Z',
//         networks: {
//           aljazeera: {
//             docs_count: 36233,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T10:57:50.000Z',
//             sources: {},
//           },
//           Aljazeera: {
//             docs_count: 3117,
//             docs_count_3_days: 0,
//             last_time: '2024-03-26T05:42:48.000Z',
//             sources: {},
//           },
//           almamlakatv: {
//             docs_count: 2428,
//             docs_count_3_days: 0,
//             last_time: '2024-05-21T10:29:10.000Z',
//             sources: {},
//           },
//           ' قناة المملكة ': {
//             docs_count: 1390,
//             docs_count_3_days: 0,
//             last_time: '2024-03-26T06:10:27.000Z',
//             sources: {},
//           },
//           'قناة المملكة': {
//             docs_count: 64,
//             docs_count_3_days: 0,
//             last_time: '2024-03-16T14:16:59.000Z',
//             sources: {},
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.781000',
//       },
//     },
//     international: {
//       article: {
//         docs_count: 16916,
//         docs_count_3_days: 7,
//         last_time: '2024-06-03T18:43:20.000Z',
//         networks: {
//           'the new york times': {
//             docs_count: 10634,
//             docs_count_3_days: 0,
//             last_time: '2024-03-20T03:44:49.000Z',
//             sources: {},
//           },
//           'The New York Times': {
//             docs_count: 2547,
//             docs_count_3_days: 0,
//             last_time: '2024-03-26T04:50:56.000Z',
//             sources: {},
//           },
//           reuters: {
//             docs_count: 1734,
//             docs_count_3_days: 0,
//             last_time: '2024-01-14T19:26:56.000Z',
//             sources: {},
//           },
//           'france 24': {
//             docs_count: 917,
//             docs_count_3_days: 0,
//             last_time: '2024-03-20T01:17:02.000Z',
//             sources: {},
//           },
//           'cnn international': {
//             docs_count: 537,
//             docs_count_3_days: 0,
//             last_time: '2024-03-20T04:10:50.000Z',
//             sources: {},
//           },
//           nytimes: {
//             docs_count: 301,
//             docs_count_3_days: 5,
//             last_time: '2024-06-03T18:43:20.000Z',
//             sources: {},
//           },
//           'edition.cnn': {
//             docs_count: 97,
//             docs_count_3_days: 2,
//             last_time: '2024-06-02T08:45:00.000Z',
//             sources: {},
//           },
//           'فرانس 24 / France 24': {
//             docs_count: 85,
//             docs_count_3_days: 0,
//             last_time: '2024-03-18T07:41:44.000Z',
//             sources: {},
//           },
//           'CNN International': {
//             docs_count: 34,
//             docs_count_3_days: 0,
//             last_time: '2024-03-22T13:10:55.000Z',
//             sources: {},
//           },
//           Reuters: {
//             docs_count: 17,
//             docs_count_3_days: 0,
//             last_time: '2024-03-09T19:32:09.000Z',
//             sources: {},
//           },
//           'France 24': {
//             docs_count: 8,
//             docs_count_3_days: 0,
//             last_time: '2024-03-26T03:33:20.000Z',
//             sources: {},
//           },
//           'فرانس 24 / france 24': {
//             docs_count: 5,
//             docs_count_3_days: 0,
//             last_time: '2024-02-29T20:02:03.000Z',
//             sources: {},
//           },
//         },
//         timestamp: '2024-06-04T07:11:49.781000',
//       },
//     },
//   };
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   return locations;
// }
