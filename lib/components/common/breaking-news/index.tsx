import Marquee from "react-fast-marquee";
import Link from "next/link";
import { newsJson } from "@/lib/data"; // TODO:: Temporary usage, remove later once API integrated
import Container from "@/lib/components/common/container";
import { HomePageContentItem } from "@/lib/types/home.page";

// Props
interface Props {
    contents: HomePageContentItem[];
}


const BreakingNews = ({ contents }: Props) => {
    return (
        <div className="mt-4">
            <Container>
                <div className="flex items-center justify-beteen text-[16px] font-normal w-full">
                    <div className="bg-[#FF4646] text-white px-3 py-2 shrink-0 border-l-[6px] border-t border-b border-black">
                        শিরোনাম :
                    </div>

                    <Marquee
                        pauseOnHover={true}
                        speed={50}
                        gradient={false}
                        className="bg-[#ffffff] px-5 py-2 border border-l-0 border-black"
                    >
                        <div className="flex items-center gap-10 pr-10">
                            {contents.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="bg-primaryRed w-2.5 h-2.5 rounded-full shrink-0" />
                                    <Link href={`${item.full_url}`} className="hover:text-red-600">{item.heading}</Link>
                                </div>
                            ))}
                        </div>
                    </Marquee>
                </div>
            </Container>
        </div>
    )
}

export default BreakingNews;