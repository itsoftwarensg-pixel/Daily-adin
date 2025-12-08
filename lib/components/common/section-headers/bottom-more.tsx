import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface GradientHeaderProps {
    href: string;
    className: string;
    color?:
    | "slate" | "gray" | "zinc" | "neutral" | "stone"
    | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald"
    | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple"
    | "fuchsia" | "pink" | "rose";
}

// Read More button gradient
const buttonColorMap: Record<string, string> = {
    slate: "from-slate-500 to-slate-900",
    gray: "from-gray-500 to-gray-900",
    zinc: "from-zinc-500 to-zinc-900",
    neutral: "from-neutral-500 to-neutral-900",
    stone: "from-stone-500 to-stone-900",
    red: "from-red-500 to-red-900",
    orange: "from-orange-500 to-orange-900",
    amber: "from-amber-500 to-amber-900",
    yellow: "from-yellow-500 to-yellow-900",
    lime: "from-lime-500 to-lime-900",
    green: "from-green-500 to-green-900",
    emerald: "from-emerald-500 to-emerald-900",
    teal: "from-teal-500 to-teal-900",
    cyan: "from-cyan-500 to-cyan-900",
    sky: "from-sky-500 to-sky-900",
    blue: "from-blue-500 to-blue-900",
    indigo: "from-indigo-500 to-indigo-900",
    violet: "from-violet-500 to-violet-900",
    purple: "from-purple-500 to-purple-900",
    fuchsia: "from-fuchsia-500 to-fuchsia-900",
    pink: "from-pink-500 to-pink-900",
    rose: "from-rose-500 to-rose-900",
};

export default function BottomMoreButton({
    href,
    color = "blue",
    className
}: GradientHeaderProps) {
    const btnGradientClasses = buttonColorMap[color] || buttonColorMap["blue"];

    return (
        <Link href={href}>
            <div
                className={`group flex justify-between items-center mt-2 ${className}`}
            >
                <span></span>
                <div
                    className={`flex gap-2 items-center bg-gradient-to-l ${btnGradientClasses} 
                        text-white py-2.5 px-4 font-normal text-sm transition-all group-hover:gap-4`}
                >
                    <span>আরও</span>
                    <FaArrowRightLong />
                </div>
            </div>
        </Link>
    );
}
