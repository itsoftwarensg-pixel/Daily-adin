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
import { ImageWithFallback } from "@/lib/components/image";
import logo from "@/public/logo.png";

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
              <div className="text-center gap-2">
                <div className="h-full text-center group space-y-3 mb-2">
                  <div className="mb-2 bg-gray-200 w-36 h-36 p-3 rounded-full mx-auto">
                    <ImageWithFallback
                      src={writer.photo ? writer.photo : logo}
                      height={600}
                      width={900}
                      alt={`${writer.title}`}
                      className="w-full h-full rounded-full mx-auto object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{writer.name}</h4>
                  <p className="text-gray-500">{writer.description}</p>
                </div>
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
