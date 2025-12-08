import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface GradientHeaderProps {
    title: string;
    href?: string;
    color?:
    | "slate" | "gray" | "zinc" | "neutral" | "stone"
    | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald"
    | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple"
    | "fuchsia" | "pink" | "rose";
    className?: string;
    showReadMoreBtn?: boolean;
}

// Main header gradient (right side opacity 0 → 10% hover)
const colorMap: Record<string, string> = {
    slate: "from-slate-700 to-slate-700/0 hover:to-slate-700/10",
    gray: "from-gray-700 to-gray-700/0 hover:to-gray-700/10",
    zinc: "from-zinc-700 to-zinc-700/0 hover:to-zinc-700/10",
    neutral: "from-neutral-700 to-neutral-700/0 hover:to-neutral-700/10",
    stone: "from-stone-700 to-stone-700/0 hover:to-stone-700/10",
    red: "from-red-700 to-red-700/0 hover:to-red-700/10",
    orange: "from-orange-700 to-orange-700/0 hover:to-orange-700/10",
    amber: "from-amber-700 to-amber-700/0 hover:to-amber-700/10",
    yellow: "from-yellow-700 to-yellow-700/0 hover:to-yellow-700/10",
    lime: "from-lime-700 to-lime-700/0 hover:to-lime-700/10",
    green: "from-green-700 to-green-700/0 hover:to-green-700/10",
    emerald: "from-emerald-700 to-emerald-700/0 hover:to-emerald-700/10",
    teal: "from-teal-700 to-teal-700/0 hover:to-teal-700/10",
    cyan: "from-cyan-700 to-cyan-700/0 hover:to-cyan-700/10",
    sky: "from-sky-700 to-sky-700/0 hover:to-sky-700/10",
    blue: "from-blue-700 to-blue-700/0 hover:to-blue-700/10",
    indigo: "from-indigo-700 to-indigo-700/0 hover:to-indigo-700/10",
    violet: "from-violet-700 to-violet-700/0 hover:to-violet-700/10",
    purple: "from-purple-700 to-purple-700/0 hover:to-purple-700/10",
    fuchsia: "from-fuchsia-700 to-fuchsia-700/0 hover:to-fuchsia-700/10",
    pink: "from-pink-700 to-pink-700/0 hover:to-pink-700/10",
    rose: "from-rose-700 to-rose-700/0 hover:to-rose-700/10",
};

// Read More button gradient
const buttonColorMap: Record<string, string> = {
    slate: "from-slate-500 to-black/80",
    gray: "from-gray-500 to-black/80",
    zinc: "from-zinc-500 to-black/80",
    neutral: "from-neutral-500 to-black/80",
    stone: "from-stone-500 to-black/80",
    red: "from-red-500 to-black/80",
    orange: "from-orange-500 to-black/80",
    amber: "from-amber-500 to-black/80",
    yellow: "from-yellow-500 to-black/80",
    lime: "from-lime-500 to-black/80",
    green: "from-green-500 to-black/80",
    emerald: "from-emerald-500 to-black/80",
    teal: "from-teal-500 to-black/80",
    cyan: "from-cyan-500 to-black/80",
    sky: "from-sky-500 to-black/80",
    blue: "from-blue-500 to-black/80",
    indigo: "from-indigo-500 to-black/80",
    violet: "from-violet-500 to-black/80",
    purple: "from-purple-500 to-black/80",
    fuchsia: "from-fuchsia-500 to-black/80",
    pink: "from-pink-500 to-black/80",
    rose: "from-rose-500 to-black/80",
};

export default function GradientHeader({
    title,
    href,
    color = "blue",
    className = "",
    showReadMoreBtn = false,
}: GradientHeaderProps) {
    const gradientClasses = colorMap[color] || colorMap["blue"];
    const btnGradientClasses = buttonColorMap[color] || buttonColorMap["blue"];

    const content = (
        <div
            className={`flex justify-between items-center pl-4 py-2 pr-2 mb-4 text-xl font-bold
                 text-white bg-gradient-to-r ${gradientClasses} 
                 ${className}`}
        >
            <span className="py-1">
                {title}
            </span>
            {href && showReadMoreBtn && (
                <div
                    className={`flex gap-2 items-center bg-gradient-to-r ${btnGradientClasses} 
                        text-white py-2 px-4 font-normal text-sm transition-all hover:gap-4`}
                >
                    <span>আরও দেখুন</span>
                    <FaArrowRightLong />
                </div>
            )}
        </div>
    );

    if (href) return <Link href={href}>{content}</Link>;
    return content;
}
