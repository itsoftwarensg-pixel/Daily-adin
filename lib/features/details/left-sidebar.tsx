import { ContentDetailsType } from "@/lib/types/details.page";
import Link from "next/link";
import { FiPrinter } from "react-icons/fi";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
import { RiTwitterXFill, RiWhatsappLine } from "react-icons/ri";

// Props
interface Props {
    contentDetails: ContentDetailsType;
    category: string;
    categoryUrl: string;
}

const DetailsLeftSidebar = ({ contentDetails, category, categoryUrl }: Props) => {
    return (
        <div className="mb-6">
            {/* Category title */}
            <Link href={categoryUrl} className="text-xl border-l-4 border-red-500 text-red-500 font-bold inline-flex gap-2 items-center mb-4">
                <span className="pl-4">{category}</span>
                <IoIosArrowForward />
            </Link>

            {/* Writer */}
            <div className="text-gray-700 font-semibold mb-2">
                <span>{contentDetails?.writer?.name || `নিজস্ব প্রতিবেদক`}</span>
            </div>

            {/* Publish/updated time */}
            <div className="text-gray-500 mb-4">
                <p>{contentDetails?.created_at_bangla}</p>
                {contentDetails?.updated_at_bangla && <p>আপডেট: {contentDetails.updated_at_bangla}</p>}
            </div>

            {/* Social sharable links */}
            <div className="flex gap-1 mb-8">
                <GrFacebookOption size={36} className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border" />
                <RiTwitterXFill size={36} className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border" />
                <RiWhatsappLine size={36} className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border" />
                <MdContentCopy size={36} className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border" />
                <FiPrinter size={36} className="p-2 hover:bg-gray-100 cursor-pointer rounded text-black border" />
            </div>
        </div>
    )
}

export default DetailsLeftSidebar;