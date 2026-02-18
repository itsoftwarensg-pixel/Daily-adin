'use client';
import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Container from '@/lib/components/common/container';
import { adjustTime, formatIslamicTime, getBanglaDay, getOffsetMinutes, toBanglaMonth, toBanglaNumber, ramadanDatas, duas } from '@/lib/data/ramadan';
import HtmlContent from '@/lib/components/common/html-content';
import RamadanCard from '@/lib/features/ramadan/countdown';
import { RamadanDay, RamadanDivision } from "@/lib/types/ramadan";

// Props
interface Props {
    data: {
        ramadan_start_date: string;
        title: string;
        hijri_year: number;
        name: string;
        footnote: string;
        days: RamadanDay[];
        division_offsets: RamadanDivision[];
    };
}
export default function RamadanComponent({ data: ramadanData }: Props) {
    const { division_offsets: divisions, title, name } = ramadanData;
    const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
    const [activeCountdown, setActiveCountdown] = useState('');
    const [activeLabel, setActiveLabel] = useState('');

    const now = new Date();
    const [month, day, year] = now.toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).split('/');

    const todayStr = `${year}-${month}-${day}`;

    const todayData = ramadanData.days.find(d => d.enDate === todayStr);

    /* =======================
       🔹 Before Ramadan
    ======================= */
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            /* =======================
               🔹 First day before Ramadan
            ======================= */
            // Ramadan starts from
            const ramadanStartDate = ramadanData.ramadan_start_date; // "2026-02-17"

            // 1. Date object বানানো
            const startDate = new Date(ramadanStartDate + "T00:00:00+06:00"); // Bangladesh UTC+6

            // 2. Previous day বের করা
            const prevDay = new Date(startDate);
            prevDay.setDate(startDate.getDate() - 1);

            // 3. yyyy-mm-dd string
            const prevDayStr = prevDay.toISOString().split('T')[0];

            // First date
            const firstDateIftarTime = ramadanData.days[0].iftar; // "17:50"

            // Parse first day iftar time
            const [h, m] = firstDateIftarTime.split(":").map(Number);

            // Set previous day + first day iftar time
            const prevDayTarget = new Date(prevDay);
            prevDayTarget.setHours(h, m, 0, 0); // 17:50

            // formatDiff helper
            const formatDiff = (diff: number) => {
                if (diff <= 0) return "";
                const hours = Math.floor(diff / 1000 / 3600);
                const minutes = Math.floor((diff / 1000 % 3600) / 60);
                const seconds = Math.floor((diff / 1000) % 60);
                return `${toBanglaNumber(hours)} ঘণ্টা ${toBanglaNumber(minutes)} মিনিট ${toBanglaNumber(seconds)} সেকেন্ড`;
            };

            if (now >= prevDayTarget && now < startDate) {
                const [h, m] = ramadanData.days[0].sehri_end.split(":").map(Number);
                const target = new Date(`${ramadanStartDate}T${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:00+06:00`);

                const diff = target.getTime() - now.getTime();
                setActiveLabel("🌙 স্বাগতম মাহে রমজান। সেহরি শেষ হতে বাকি");
                setActiveCountdown(formatDiff(diff));
                return; // early return
            }
            setActiveLabel("স্বাগতম শিঘ্রই মাহে রমজান শুরু হচ্ছে।");
            setActiveCountdown('');
        }, 1000);

        return () => clearInterval(interval);
    }, [todayData, selectedDivision]);


    /* Countdown - During Ramadan */
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            if (!todayData) return;

            const todayIndex = ramadanData.days.findIndex(
                d => d.enDate === todayData.enDate
            );

            // formatDiff helper
            const formatDiff = (diff: number) => {
                if (diff <= 0) return "";

                const hours = Math.floor(diff / 1000 / 3600);
                const minutes = Math.floor((diff / 1000 % 3600) / 60);
                const seconds = Math.floor((diff / 1000) % 60);

                const pad = (num: number) => num.toString().padStart(2, "0");

                return `${toBanglaNumber(pad(hours))} ঘণ্টা ${toBanglaNumber(pad(minutes))} মিনিট ${toBanglaNumber(pad(seconds))} সেকেন্ড`;
            };


            /* =======================
               🔹 Normal Sehri / Iftar logic
            ======================= */

            if (todayIndex === -1) return;

            const offsetMinutes = getOffsetMinutes(Number(selectedDivision.time_offset_minute));

            const getIftarTarget = () => {
                const adjusted = adjustTime(todayData.iftar, offsetMinutes);
                const [h, m] = adjusted.split(":").map(Number);
                const target = new Date();
                target.setHours(h, m, 0, 0);
                if (now < target) return target;

                const nextIndex = todayIndex + 1;
                if (nextIndex >= ramadanData.days.length) return null;

                const nextAdjusted = adjustTime(ramadanData.days[nextIndex].iftar, offsetMinutes);
                const [nh, nm] = nextAdjusted.split(":").map(Number);
                const nextTarget = new Date();
                nextTarget.setDate(nextTarget.getDate() + 1);
                nextTarget.setHours(nh, nm, 0, 0);
                return nextTarget;
            };

            const getSehriTarget = () => {
                const adjusted = adjustTime(todayData.sehri_end, offsetMinutes);
                const [h, m] = adjusted.split(":").map(Number);
                const target = new Date();
                target.setHours(h, m, 0, 0);
                if (now < target) return target;

                const nextIndex = todayIndex + 1;
                if (nextIndex >= ramadanData.days.length - 28) return null;

                const nextAdjusted = adjustTime(ramadanData.days[nextIndex].sehri_end, offsetMinutes);
                const [nh, nm] = nextAdjusted.split(":").map(Number);
                const nextTarget = new Date();
                nextTarget.setDate(nextTarget.getDate() + 1);
                nextTarget.setHours(nh, nm, 0, 0);
                return nextTarget;
            };

            const sehriTarget = getSehriTarget();
            const iftarTarget = getIftarTarget();

            const sehriDiff = sehriTarget ? sehriTarget.getTime() - now.getTime() : -1;
            const iftarDiff = iftarTarget ? iftarTarget.getTime() - now.getTime() : -1;

            /* =======================
               SMART SWITCH
            ======================= */
            if (sehriDiff > 0 && sehriDiff < iftarDiff) {
                setActiveLabel(`সেহরি শেষ হতে বাকি`);
                setActiveCountdown(formatDiff(sehriDiff));
            } else if (iftarDiff > 0) {
                setActiveLabel(`ইফতার হতে বাকি`);
                setActiveCountdown(formatDiff(iftarDiff));
            } else {
                setActiveLabel("ঈদ মুবারাক!");
                setActiveCountdown("");
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [todayData, selectedDivision]);

    /* Segments */
    const segments = useMemo(() => [
        { name: '🌿 প্রথম ১০ দিন — রহমত', days: ramadanData.days.slice(0, 10) },
        { name: '🤲 দ্বিতীয় ১০ দিন — মাগফিরাত', days: ramadanData.days.slice(10, 20) },
        { name: '🕊 শেষ ১০ দিন — নাজাত', days: ramadanData.days.slice(20, 30) },
    ], []);

    return (
        <div className="min-h-screen" style={{
            backgroundImage: `url('https://www.toptal.com/designers/subtlepatterns/uploads/spikes.png')`,
            backgroundPosition: 'top center',
        }}>
            <div className="min-h-screen bg-gradient-to-b from-emerald-50/40 to-white p-0 sm:p-6">
                {/* ================= HEADER ================= */}
                <Container>
                    <div>
                        <div className="flex justify-center gap-4 items-center ">
                            <div className="">
                                <div className="relative mx-auto">
                                    {/* Map Icon */}
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaMapMarkerAlt className="text-emerald-500" />
                                    </div>

                                    <select
                                        className="cursor-pointer w-full appearance-none rounded-xl pl-8 py-2 bg-white/50 dark:bg-gray-700/50 border-0 border-emerald-300 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300 font-medium focus:outline-none focus:ring-0 focus:ring-emerald-300 dark:focus:ring-emerald-500"
                                        value={selectedDivision.division_en_name}
                                        onChange={(e) =>
                                            setSelectedDivision(
                                                divisions.find((d) => d.division_en_name === e.target.value)!
                                            )
                                        }
                                    >
                                        {divisions.map((d) => (
                                            <option key={d.division_en_name} value={d.division_en_name}>
                                                {d.division_bn_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Today's Info */}
                        {todayData ? (
                            <div className="text-center space-y-2">
                                <p className="text-md font-semibold text-gray-600">
                                    আজ {getBanglaDay(todayData.enDate)}, {toBanglaMonth(todayData.enDate)} | {toBanglaNumber(todayData.day)} রমজান, {toBanglaNumber(ramadanData.hijri_year)}
                                </p>
                            </div>
                        ) :
                            ''}
                        <h1 className="text-4xl font-bold text-emerald-700 text-center mt-2 mb-4">
                            🌙 {ramadanData.title}
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 w-full mb-4">
                        {duas.map((dua) => (
                            <div key={dua.title} className="bg-white/60 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                                <h2 className="text-xl text-center font-semibold text-red-600 mb-4">{dua.title}</h2>
                                <p className="text-xl md:text-2xl text-center font-arabic mb-4">{dua.arabic}</p>
                                <p className="text-gray-800 text-center">{dua.arbicPronunciation}</p>
                                <p className="text-gray-700 text-center">{dua.bangla}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white/60 rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300">
                        {/* Today's Info */}
                        <div className="grid md:grid-cols-3 gap-6 w-full">
                            <div className="text-left pl-8">
                                {todayData && (
                                    <div className="text-md font-semibold text-emerald-700">
                                        <p>আজকের সেহরির শেষ সময়</p>
                                        <h4 className='text-xl'>{formatIslamicTime(todayData.sehri_end, getOffsetMinutes(Number(selectedDivision.time_offset_minute)), "Sehri")}</h4>
                                    </div>
                                )}
                            </div>
                            <div className="">
                                <div className="text-center">
                                    <p className="text-md font-semibold text-emerald-700 mb-2">
                                        {activeLabel}
                                    </p>

                                    <p className="text-2xl font-bold text-emerald-500 tracking-wide">
                                        {activeCountdown}
                                    </p>

                                </div>
                            </div>

                            <div className="text-right pr-8">
                                {todayData && (
                                    <div className="text-md font-semibold text-emerald-700">
                                        <p>আজকের ইফতারের সময়</p>
                                        <h4 className='text-xl'>{formatIslamicTime(todayData.iftar, getOffsetMinutes(Number(selectedDivision.time_offset_minute)), "Iftar")}</h4>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ================= TABLE ================= */}
                    <div className="mx-auto overflow-x-auto bg-white shadow-lg rounded-3xl p-4 mt-4">
                        <table className="w-full text-sm text-center border-collapse">
                            <thead>
                                <tr className="bg-emerald-100 text-emerald-800 text-base">
                                    <th className="p-2">দিন</th>
                                    <th>বার</th>
                                    <th>ইংরেজি তারিখ</th>
                                    <th>সেহরি শেষ</th>
                                    <th>ফজর</th>
                                    <th>যোহর</th>
                                    <th>আসর</th>
                                    <th>মাগরিব</th>
                                    <th>ইফতার</th>
                                    <th>ইশা</th>
                                </tr>
                            </thead>

                            <tbody>
                                {segments.map((segment, i) => (
                                    <React.Fragment key={i}>
                                        <tr className="bg-emerald-50 font-bold text-emerald-700"><td colSpan={10} className="py-2"> {segment.name}</td></tr>
                                        {segment.days.filter(d => d.day != 0 && d.status == 1).map(d => {
                                            const isToday = d.enDate === todayStr;
                                            const offsetMinutes = getOffsetMinutes(Number(selectedDivision.time_offset_minute));
                                            return (
                                                <tr
                                                    key={d.day}
                                                    className={`transition-all duration-300 hover:bg-emerald-50 ${isToday ? 'text-emerald-500 font-bold' : ''}`}>
                                                    <td className="p-2">{toBanglaNumber(d.day)}</td>
                                                    <td>{getBanglaDay(d.enDate)}</td>
                                                    <td>{toBanglaMonth(d.enDate)}</td>
                                                    <td>{formatIslamicTime(d.sehri_end, offsetMinutes, "Sehri")}</td>
                                                    <td>{formatIslamicTime(d.fajr, offsetMinutes, "Fajr")}</td>
                                                    <td>{formatIslamicTime(d.duhr, offsetMinutes, "Dhuhr")}</td>
                                                    <td>{formatIslamicTime(d.asr, offsetMinutes, "Asr")}</td>
                                                    <td>{formatIslamicTime(d.maghrib, offsetMinutes, "Maghrib")}</td>
                                                    <td>{formatIslamicTime(d.iftar, offsetMinutes, "Iftar")}</td>
                                                    <td>{formatIslamicTime(d.isha, offsetMinutes, "Isha")}</td>
                                                </tr>
                                            );
                                        })}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white/60 shadow-lg rounded-3xl mt-4 p-6 hover:shadow-xl transition-shadow duration-300">
                        <HtmlContent html={ramadanData.footnote} />
                    </div>
                </Container>
            </div>
        </div>
    );
}
