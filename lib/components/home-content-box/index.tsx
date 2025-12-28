import GradientHeader from "@/lib/components/common/section-headers/gradient";
import HomeContentBoxNewsItem from "@/lib/components/home-content-box/news-item";
import { HomePageContentItem } from "@/lib/types/home.page";

// Props
interface Props {
    contents: HomePageContentItem[];
    sectionHeaderTitle: string;
    sectionUrl?: string;
    showSectionReadMoreBtn?: boolean;
    sectionHeaderColor?:
    | "slate"
    | "gray"
    | "zinc"
    | "neutral"
    | "stone"
    | "red"
    | "orange"
    | "amber"
    | "yellow"
    | "lime"
    | "green"
    | "emerald"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "fuchsia"
    | "pink"
    | "rose";
}

export default function HomeContentBox({
    contents,
    sectionHeaderColor,
    sectionHeaderTitle,
    sectionUrl,
    showSectionReadMoreBtn,
}: Props) {

    const leadContent = contents[0];                // Lead
    const subLeadContents = contents.slice(1, 3);   // 2 Sub leads

    return (
        <div className="space-y-2">
            <div className="pr-4">
                <GradientHeader
                    title={sectionHeaderTitle}
                    color={sectionHeaderColor || "red"}
                    showReadMoreBtn={showSectionReadMoreBtn || false}
                    href={sectionUrl || "/"}
                />
            </div>

            {/* News contents */}
            <div className="space-y-2 pr-4 border-r">
                {/* First item (large) */}
                <HomeContentBoxNewsItem
                    titleSize="large"
                    newsItem={leadContent}
                    bgColor={"gray"}
                />

                {/* Next two items in a 2-column grid */}
                <div className="grid grid-cols-2 gap-2">
                    {subLeadContents.map((newsItem, idx) => (
                        <HomeContentBoxNewsItem
                            key={idx}
                            newsItem={newsItem}
                            bgColor="gray"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
