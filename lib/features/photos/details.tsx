import Link from "next/link";
import LatestPopular from "../latest-popular";
import PhotoAlbumDetails from "./album-details";
import { ADVERTISE_TYPES, PHOTO_PAGE } from "@/lib/config/constant";
import { IoIosArrowForward } from "react-icons/io";
import { PhotoItemType } from "@/lib/types/photo.page";
import Container from "@/lib/components/common/container";
import Advertisement from "@/lib/components/common/advertisement";

// Props
interface Props {
  data: PhotoItemType;
}

const PhotoDetails = ({ data }: Props) => {
  return (
    <div className="">
      <Container>
        <div className="mt-4">
          <>
            <div className="flex items-center gap-2 overflow-x-auto">
              <Link
                href={`/${PHOTO_PAGE.slug}`}
                className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
              >
                <span className="pl-4">
                  {PHOTO_PAGE.name_bn || `ক্লিকস্মৃতি`}
                </span>
                <IoIosArrowForward />
              </Link>
            </div>
          </>
        </div>
        <div className="border-b pb-2 mt-0 mb-2 pl-[22px] overflow-x-auto"></div>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <PhotoAlbumDetails data={data} />

          <div className="col-span-1 lg:col-auto">
            <div className="flex justify-center">
              <Advertisement
                width={300}
                height={300}
                imgSrc={ADVERTISE_TYPES.PHOTO_DETAILS_TOP_RIGHT}
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

export default PhotoDetails;
