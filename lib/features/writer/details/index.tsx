import Link from "next/link";
import { Suspense } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Loader from "@/lib/components/common/loader";
import Container from "@/lib/components/common/container";
import { ADVERTISE_TYPES, LOAD_MORE_TYPES, WRITER_PAGE } from "@/lib/config/constant";
import { WriterType } from "@/lib/types/writer.page";
import Advertisement from "@/lib/components/common/advertisement";
import LatestPopular from "@/lib/features/latest-popular";
import LoadMoreContent from "@/lib/components/load-more-content";
import { ContentItem } from "@/lib/types/category.page";

// Define the props type
interface Props {
  writer: WriterType;
  data: {
    last_page: number;
    data: ContentItem[];
  };
}

const WriterDetails = ({ writer, data }: Props) => {

  return (
    <div className="mt-4">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <div className="col-span-1 lg:col-auto">
            <div className="border-b pb-2 mb-4">
              <div className="flex items-center gap-2 overflow-x-auto">
                <Link
                  href={`/${WRITER_PAGE.slug}`}
                  className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
                >
                  <span className="pl-4">{WRITER_PAGE.name_bn}</span>
                  <IoIosArrowForward />
                </Link>
                <Link
                  href={`${writer.full_url}`}
                  className="text-xl text-red-600 font-bold flex gap-2 items-center"
                >
                  <span>{writer.name}</span>
                </Link>
              </div>
            </div>

            {/* LoadMoreContent component */}
            <Suspense fallback={<Loader />}>
              <LoadMoreContent
                id={writer.id}
                type={LOAD_MORE_TYPES.WRITER}
                loadMoreContents={{
                  contents: data.data,
                  last_page: data.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                }}
              />
            </Suspense>
          </div>

          <div className="col-span-1 lg:col-auto">
            <div className="flex justify-center">
              <Advertisement
                width={300}
                height={300}
                imgSrc={ADVERTISE_TYPES.VIDEO_DETAILS_TOP_RIGHT}
              />
            </div>

            {/* Latest - Popular */}
            <div className="my-4">
              <LatestPopular />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WriterDetails;
