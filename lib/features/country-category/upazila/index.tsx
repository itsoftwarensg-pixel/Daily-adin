import Link from "next/link";
import Container from "@/lib/components/common/container";
import { IoIosArrowForward } from "react-icons/io";
import {
  UpazilaContentItemType,
  UpazilaPageContentType,
} from "@/lib/types/upazila.page";
import { UpazilaType } from "@/lib/types/district.page";
import { COUNTRY_PAGE, LOAD_MORE_TYPES } from "@/lib/config/constant";
import LoadMoreContent from "@/lib/components/load-more-content";
import InnnerInitalContents from "@/lib/components/inner-initial-contents";
import LatestPopular from "@/lib/features/latest-popular";
import NoContentFound from "@/lib/components/no-content-found";

// Define the props type
interface Props {
  upazila: UpazilaPageContentType;
  upazilas: UpazilaType[];
  contents: {
    data: UpazilaContentItemType[];
    last_page: number;
  };
}

const UpazilaPage = ({ contents, upazila, upazilas }: Props) => {
  return (
    <div className="">
      <Container>
        <div className="my-6">
          <div className="flex items-center gap-2 overflow-x-auto">
            <Link
              href={`/${COUNTRY_PAGE.slug}`}
              className="text-2xl border-l-4 border-red-500 text-red-500 font-bold flex gap-2 items-center"
            >
              <span className="pl-4">{COUNTRY_PAGE.name_bn}</span>
              <IoIosArrowForward />
            </Link>

            <Link
              href={`${upazila.division.full_url}`}
              className="text-xl text-red-600 font-bold flex gap-2 items-center"
            >
              <span>{upazila.division.name_bn}</span>
              <IoIosArrowForward />
            </Link>
            <Link
              href={`${upazila.district.full_url}`}
              className="text-xl text-red-600 font-bold flex gap-2 items-center"
            >
              <span>{upazila.district.name_bn}</span>
              <IoIosArrowForward />
            </Link>
            <Link
              href={`${upazila.full_url}`}
              className="text-xl text-red-600 font-bold flex gap-2 items-center"
            >
              <span>{upazila.name_bn}</span>
            </Link>
          </div>

          <div className="border-b pb-2 mt-2 mb-0 pl-[22px] overflow-x-auto">
            {upazilas && upazilas.length > 0 && (
              <ul className="flex gap-4 whitespace-nowrap">
                {upazilas &&
                  upazilas.length > 0 &&
                  upazilas.map((up, index) => (
                    <li
                      key={index}
                      className={
                        index != (upazilas?.length ?? 0) - 1
                          ? "pr-4 border-r"
                          : ""
                      }
                    >
                      <Link
                        href={`${up.full_url}`}
                        className={` hover:text-blue-700 font-semibold ${up.alias === upazila.alias
                            ? "text-blue-700"
                            : "text-gray-700"
                          }`}
                      >
                        {up.name_bn}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[auto_360px] gap-4">
          <div className="col-span-1 lg:col-auto">
            {contents.data && contents.data.length > 0 ? (
              <>
                {/* Lead, SubLead, and 3 contents. Lead below */}
                <InnnerInitalContents contents={contents.data.slice(0, 5)} />

                {/* Advertisement */}
                <div className="flex justify-center mb-4">
                  <img
                    src="https://tpc.googlesyndication.com/simgad/15643014635329783982"
                    alt=""
                  />
                </div>

                {/* LoadMoreContent component */}
                <LoadMoreContent
                  id={upazila.id}
                  type={LOAD_MORE_TYPES.UPAZILA}
                  loadMoreContents={{
                    contents: contents.data.slice(5), // Exclude the first 5 contents already displayed
                    last_page: contents.last_page, // Assuming 1 for now, will be updated with actual last_page from API
                  }}
                />
              </>
            ) : (
              <NoContentFound />
            )}
          </div>

          <div className="col-span-1 lg:col-auto">
            <div className="flex justify-center">
              <img
                src="https://tpc.googlesyndication.com/simgad/11473454279542623205"
                alt=""
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

export default UpazilaPage;
