import React from "react";
import Link from "next/link";
import { LuPlay } from "react-icons/lu"
import { MdArrowOutward } from "react-icons/md";

// Props
interface Props {
    title: string;
    href?: string;
}

const LeadVideoHeader = ({ title, href }: Props) => {
    return (
        <Link href={`${href}`} className="group flex justify-between items-center gap-2 px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700">
            <div className="flex gap-2 items-center">
                <LuPlay />
                <span className="pt-0.5">{title}</span>
            </div>
            <div>
                <MdArrowOutward className="group-hover:rotate-[45deg] transition-all" />
            </div>
        </Link>
    );
};

export default LeadVideoHeader;
