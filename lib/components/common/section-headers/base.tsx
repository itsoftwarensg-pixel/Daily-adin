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

// Main header colors
const colorMap: Record<string, string> = {
    slate: "bg-slate-700",
    gray: "bg-gray-700",
    zinc: "bg-zinc-700",
    neutral: "bg-neutral-700",
    stone: "bg-stone-700",
    red: "bg-red-700",
    orange: "bg-orange-700",
    amber: "bg-amber-700",
    yellow: "bg-yellow-700",
    lime: "bg-lime-700",
    green: "bg-green-700",
    emerald: "bg-emerald-700",
    teal: "bg-teal-700",
    cyan: "bg-cyan-700",
    sky: "bg-sky-700",
    blue: "bg-blue-700",
    indigo: "bg-indigo-700",
    violet: "bg-violet-700",
    purple: "bg-purple-700",
    fuchsia: "bg-fuchsia-700",
    pink: "bg-pink-700",
    rose: "bg-rose-700",
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

export default function SectionHeaderBase({
    title,
    href,
    color = "blue",
    className = "",
    showReadMoreBtn = false,
}: GradientHeaderProps) {
    const bgColorClass = colorMap[color] || colorMap["blue"];
    const btnGradientClasses = buttonColorMap[color] || buttonColorMap["blue"];

    const content = (
        <div
            className={`group flex justify-between items-center pl-4 py-2 pr-2 mb-4 text-xl font-bold
                 text-white ${bgColorClass} 
                 ${className}`}
        >
            <span className="py-1">
                {title}
            </span>
            {href && showReadMoreBtn && (
                <div
                    className={`flex gap-2 items-center bg-gradient-to-r ${btnGradientClasses} 
                        text-white py-2 px-4 font-normal text-sm transition-all group-hover:gap-4`}
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
