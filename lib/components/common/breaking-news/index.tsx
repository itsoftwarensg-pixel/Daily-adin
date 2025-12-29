import Marquee from "react-fast-marquee";
import Link from "next/link";
import { newsJson } from "@/lib/data"; // TODO:: Temporary usage, remove later once API integrated
import Container from "@/lib/components/common/container";

const BreakingNews = () => {
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
                            {newsJson.slice(0, 10).map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="bg-primaryRed w-2.5 h-2.5 rounded-full shrink-0" />
                                    <Link href={'/'} className="hover:text-red-600">{item.title}</Link>
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