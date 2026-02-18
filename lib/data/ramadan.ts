export /* ===============================
   🔹 Day Schedule - ভোর, দুপুর, বিকেল, সন্ধ্যা, রাত
   =============================== */
    const daySchedule = {
        Date: { msg: "" },
        Fajr: { msg: "ভোর" },
        Sehri: { msg: "ভোর" },
        Dhuhr: { msg: "দুপুর" },
        Asr: { msg: "বিকেল" },
        Maghrib: { msg: "সন্ধ্যা" },
        Isha: { msg: "রাত" },
        Iftar: { msg: "সন্ধ্যা" },
    };

export function toBanglaNumber(value: string | number): string {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return value.toString().split('').map(c => (c >= '0' && c <= '9' ? banglaDigits[parseInt(c)] : c)).join('');
}

export function toBanglaDate(enDate: string): string {
    const [year, month, day] = enDate.split('-');
    const banglaMonths = ['', 'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    return `${toBanglaNumber(day)} ${banglaMonths[parseInt(month)]} ${toBanglaNumber(year)}`;
}

export function toBanglaDay(enDate: string): string {
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const date = new Date(enDate);
    return days[date.getDay()];
}

// export function adjustTime(time: string, offset: number): string {
//     const [hour, minute] = time.split(':').map(Number);
//     let totalMinutes = hour * 60 + minute + offset;
//     if (totalMinutes < 0) totalMinutes += 24 * 60;
//     totalMinutes %= 24 * 60;
//     const h = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
//     const m = (totalMinutes % 60).toString().padStart(2, '0');
//     return `${h}:${m}`;
// }

export function adjustTime(time: string, offset: number): string {
    const [hour, minute] = time.split(':').map(Number);

    let totalMinutes = hour * 60 + minute + offset;

    totalMinutes = (totalMinutes + 1440) % 1440;

    const h = Math.floor(totalMinutes / 60).toString().padStart(2, '0');
    const m = (totalMinutes % 60).toString().padStart(2, '0');

    return `${h}:${m}`;
}


export const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];

// function toBanglaNumber(value: string | number) {
//     return value
//         .toString()
//         .split('')
//         .map(c => (/\d/.test(c) ? bnDigits[parseInt(c)] : c))
//         .join('');
// }

// function adjustTime(time: string, offset: number) {
//     const [h, m] = time.split(':').map(Number);
//     let total = h * 60 + m + offset;
//     if (total < 0) total += 1440;
//     total %= 1440;
//     const nh = Math.floor(total / 60);
//     const nm = total % 60;
//     return `${nh.toString().padStart(2, '0')}:${nm.toString().padStart(2, '0')}`;
// }

export function getBanglaDay(dateStr: string) {
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    return days[new Date(dateStr).getDay()];
}

// function toBanglaDate(enDate: string): string {
//     const [year, month, day] = enDate.split('-');
//     const banglaMonths = ['', 'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
//     return `${toBanglaNumber(day)} ${banglaMonths[parseInt(month)]} ${toBanglaNumber(year)}`;
// }

export function format12Hour(time: string) {
    let [hour, minute] = time.split(":").map(Number);

    hour = hour % 12;
    if (hour === 0) hour = 12;

    return `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
}

export function formatIslamicTime(
    time: string,
    offset: number,
    type: keyof typeof daySchedule
) {
    const adjusted = adjustTime(time, offset);
    const formatted = format12Hour(adjusted);

    return `${daySchedule[type].msg} ${toBanglaNumber(formatted)}`;
    // return `${daySchedule[type].msg} ${formatted}`;
}

export function getOffsetMinutes(offset: number) {
    // if value is too large → assume seconds
    // if (Math.abs(offset) > 60) {
    //     return Math.round(offset / 60);
    // }
    return offset * 60;
}

export function getOffsetMinutes2(offset: number) {
    // if value is too large → assume seconds
    if (Math.abs(offset) > 60) {
        return Math.round(offset / 60);
    }
    return offset;
}

/* ===============================
   🔹 All Bangladesh Divisions
   =============================== */
// import { ramadanData } from '@/lib/data/ramadan';
const divisions = [
    { division_en_name: 'Dhaka', division_bn_name: 'ঢাকা', time_offset_minute: 0 },
    { division_en_name: 'Chattogram', division_bn_name: 'চট্টগ্রাম', time_offset_minute: 5 },
    { division_en_name: 'Khulna', division_bn_name: 'খুলনা', time_offset_minute: -3 },
    { division_en_name: 'Rajshahi', division_bn_name: 'রাজশাহী', time_offset_minute: -4 },
    { division_en_name: 'Barishal', division_bn_name: 'বরিশাল', time_offset_minute: -2 },
    { division_en_name: 'Sylhet', division_bn_name: 'সিলেট', time_offset_minute: 6 },
    { division_en_name: 'Rangpur', division_bn_name: 'রংপুর', time_offset_minute: -6 },
    { division_en_name: 'Mymensingh', division_bn_name: 'ময়মনসিংহ', time_offset_minute: -1 },
];

export const ramadanData = {
    "hijri_year": 1447,
    "ramadan_start_date": "2026-02-16",
    "country": "Bangladesh",
    "days": [
        {
            "day": 1,
            "enDate": "2026-02-16",
            "sehri_start": "04:00",
            "sehri_end": "05:00",
            "iftar": "17:50",
            "fajr": "04:15",
            "duhr": "12:05",
            "asr": "15:20",
            "maghrib": "17:50",
            "isha": "19:05"
        },
        {
            "day": 2,
            "enDate": "2026-02-19",
            "sehri_start": "03:59",
            "sehri_end": "04:59",
            "iftar": "17:51",
            "fajr": "04:14",
            "duhr": "12:05",
            "asr": "15:21",
            "maghrib": "17:51",
            "isha": "19:06"
        },
        {
            "day": 3,
            "enDate": "2026-02-20",
            "sehri_start": "03:58",
            "sehri_end": "04:58",
            "iftar": "17:52",
            "fajr": "04:13",
            "duhr": "12:05",
            "asr": "15:22",
            "maghrib": "17:52",
            "isha": "19:07"
        },
        {
            "day": 4,
            "enDate": "2026-02-21",
            "sehri_start": "03:57",
            "sehri_end": "04:57",
            "iftar": "17:53",
            "fajr": "04:12",
            "duhr": "12:06",
            "asr": "15:23",
            "maghrib": "17:53",
            "isha": "19:08"
        },
        {
            "day": 5,
            "enDate": "2026-02-22",
            "sehri_start": "03:56",
            "sehri_end": "04:56",
            "iftar": "17:54",
            "fajr": "04:11",
            "duhr": "12:06",
            "asr": "15:24",
            "maghrib": "17:54",
            "isha": "19:09"
        },
        {
            "day": 6,
            "enDate": "2026-02-23",
            "sehri_start": "03:55",
            "sehri_end": "04:55",
            "iftar": "18:38",
            "fajr": "04:10",
            "duhr": "12:06",
            "asr": "15:25",
            "maghrib": "17:55",
            "isha": "19:10"
        },
        {
            "day": 7,
            "enDate": "2026-02-24",
            "sehri_start": "03:54",
            "sehri_end": "04:54",
            "iftar": "17:56",
            "fajr": "04:09",
            "duhr": "12:07",
            "asr": "15:26",
            "maghrib": "17:56",
            "isha": "19:11"
        },
        {
            "day": 8,
            "enDate": "2026-02-25",
            "sehri_start": "03:53",
            "sehri_end": "04:53",
            "iftar": "17:57",
            "fajr": "04:08",
            "duhr": "12:07",
            "asr": "15:27",
            "maghrib": "17:57",
            "isha": "19:12"
        },
        {
            "day": 9,
            "enDate": "2026-02-26",
            "sehri_start": "03:52",
            "sehri_end": "04:52",
            "iftar": "17:58",
            "fajr": "04:07",
            "duhr": "12:07",
            "asr": "15:28",
            "maghrib": "17:58",
            "isha": "19:13"
        },
        {
            "day": 10,
            "enDate": "2026-02-27",
            "sehri_start": "03:51",
            "sehri_end": "04:51",
            "iftar": "17:59",
            "fajr": "04:06",
            "duhr": "12:08",
            "asr": "15:29",
            "maghrib": "17:59",
            "isha": "19:14"
        },
        {
            "day": 11,
            "enDate": "2026-02-28",
            "sehri_start": "03:50",
            "sehri_end": "04:50",
            "iftar": "18:00",
            "fajr": "04:05",
            "duhr": "12:08",
            "asr": "15:30",
            "maghrib": "18:00",
            "isha": "19:15"
        },
        {
            "day": 12,
            "enDate": "2026-03-01",
            "sehri_start": "03:49",
            "sehri_end": "04:49",
            "iftar": "18:01",
            "fajr": "04:04",
            "duhr": "12:08",
            "asr": "15:31",
            "maghrib": "18:01",
            "isha": "19:16"
        },
        {
            "day": 13,
            "enDate": "2026-03-02",
            "sehri_start": "03:48",
            "sehri_end": "04:48",
            "iftar": "18:02",
            "fajr": "04:03",
            "duhr": "12:09",
            "asr": "15:32",
            "maghrib": "18:02",
            "isha": "19:17"
        },
        {
            "day": 14,
            "enDate": "2026-03-03",
            "sehri_start": "03:47",
            "sehri_end": "04:47",
            "iftar": "18:03",
            "fajr": "04:02",
            "duhr": "12:09",
            "asr": "15:33",
            "maghrib": "18:03",
            "isha": "19:18"
        },
        {
            "day": 15,
            "enDate": "2026-03-04",
            "sehri_start": "03:46",
            "sehri_end": "04:46",
            "iftar": "18:04",
            "fajr": "04:01",
            "duhr": "12:09",
            "asr": "15:34",
            "maghrib": "18:04",
            "isha": "19:19"
        },
        {
            "day": 16,
            "enDate": "2026-03-05",
            "sehri_start": "03:45",
            "sehri_end": "04:45",
            "iftar": "18:05",
            "fajr": "04:00",
            "duhr": "12:10",
            "asr": "15:35",
            "maghrib": "18:05",
            "isha": "19:20"
        },
        {
            "day": 17,
            "enDate": "2026-03-06",
            "sehri_start": "03:44",
            "sehri_end": "04:44",
            "iftar": "18:06",
            "fajr": "03:59",
            "duhr": "12:10",
            "asr": "15:36",
            "maghrib": "18:06",
            "isha": "19:21"
        },
        {
            "day": 18,
            "enDate": "2026-03-07",
            "sehri_start": "03:43",
            "sehri_end": "04:43",
            "iftar": "18:07",
            "fajr": "03:58",
            "duhr": "12:10",
            "asr": "15:37",
            "maghrib": "18:07",
            "isha": "19:22"
        },
        {
            "day": 19,
            "enDate": "2026-03-08",
            "sehri_start": "03:42",
            "sehri_end": "04:42",
            "iftar": "18:08",
            "fajr": "03:57",
            "duhr": "12:11",
            "asr": "15:38",
            "maghrib": "18:08",
            "isha": "19:23"
        },
        {
            "day": 20,
            "enDate": "2026-03-09",
            "sehri_start": "03:41",
            "sehri_end": "04:41",
            "iftar": "18:09",
            "fajr": "03:56",
            "duhr": "12:11",
            "asr": "15:39",
            "maghrib": "18:09",
            "isha": "19:24"
        },
        {
            "day": 21,
            "enDate": "2026-03-10",
            "sehri_start": "03:40",
            "sehri_end": "04:40",
            "iftar": "18:10",
            "fajr": "03:55",
            "duhr": "12:11",
            "asr": "15:40",
            "maghrib": "18:10",
            "isha": "19:25"
        },
        {
            "day": 22,
            "enDate": "2026-03-11",
            "sehri_start": "03:39",
            "sehri_end": "04:39",
            "iftar": "18:11",
            "fajr": "03:54",
            "duhr": "12:12",
            "asr": "15:41",
            "maghrib": "18:11",
            "isha": "19:26"
        },
        {
            "day": 23,
            "enDate": "2026-03-12",
            "sehri_start": "03:38",
            "sehri_end": "04:38",
            "iftar": "18:12",
            "fajr": "03:53",
            "duhr": "12:12",
            "asr": "15:42",
            "maghrib": "18:12",
            "isha": "19:27"
        },
        {
            "day": 24,
            "enDate": "2026-03-13",
            "sehri_start": "03:37",
            "sehri_end": "04:37",
            "iftar": "18:13",
            "fajr": "03:52",
            "duhr": "12:12",
            "asr": "15:43",
            "maghrib": "18:13",
            "isha": "19:28"
        },
        {
            "day": 25,
            "enDate": "2026-03-14",
            "sehri_start": "03:36",
            "sehri_end": "04:36",
            "iftar": "18:14",
            "fajr": "03:51",
            "duhr": "12:13",
            "asr": "15:44",
            "maghrib": "18:14",
            "isha": "19:29"
        },
        {
            "day": 26,
            "enDate": "2026-03-15",
            "sehri_start": "03:35",
            "sehri_end": "04:35",
            "iftar": "18:15",
            "fajr": "03:50",
            "duhr": "12:13",
            "asr": "15:45",
            "maghrib": "18:15",
            "isha": "19:30"
        },
        {
            "day": 27,
            "enDate": "2026-03-16",
            "sehri_start": "03:34",
            "sehri_end": "04:34",
            "iftar": "18:16",
            "fajr": "03:49",
            "duhr": "12:13",
            "asr": "15:46",
            "maghrib": "18:16",
            "isha": "19:31"
        },
        {
            "day": 28,
            "enDate": "2026-03-17",
            "sehri_start": "03:33",
            "sehri_end": "04:33",
            "iftar": "18:17",
            "fajr": "03:48",
            "duhr": "12:14",
            "asr": "15:47",
            "maghrib": "18:17",
            "isha": "19:32"
        },
        {
            "day": 29,
            "enDate": "2026-03-18",
            "sehri_start": "03:32",
            "sehri_end": "04:32",
            "iftar": "18:18",
            "fajr": "03:47",
            "duhr": "12:14",
            "asr": "15:48",
            "maghrib": "18:18",
            "isha": "19:33"
        },
        {
            "day": 30,
            "enDate": "2026-03-19",
            "sehri_start": "03:31",
            "sehri_end": "04:31",
            "iftar": "18:19",
            "fajr": "03:46",
            "duhr": "12:14",
            "asr": "15:49",
            "maghrib": "18:19",
            "isha": "19:34"
        }
    ]
}