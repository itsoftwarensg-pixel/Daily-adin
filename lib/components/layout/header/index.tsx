import React from "react";
import Container from "@/lib/components/common/container";
import TopBar from "@/lib/components/layout/header/TopBar";
import Navbar from "@/lib/components/layout/header/Navbar";
import { getBnDateTimeAction, getMenuAction } from "@/app/actions/utils";
import { AJKER_PATRIKA_PAGE } from "@/lib/config/constant";
import { ImageWithFallback } from "@/lib/components/image";
import headerBanner from "@/public/images/header-banner.svg";
import Link from "next/link";

export default async function ApplicationHeader() {
  // Previously also fetched the personality category for the inactive TopBar card.
  // getCategoryBySlugAction(CATEGORY_SLUG.PERSONALITY, "position_contents")
  const [dateTimeBn, menus] = await Promise.all([
    getBnDateTimeAction(),
    getMenuAction(),
  ]);

  return (
    <>
      {/* In Mobile view - Show dataTimeBn and links */}
      <div className="relative overflow-hidden flex gap-2 justify-between sm:hidden print:hidden py-2 px-4 bg-gray-100">
        <div>
          <p className="text-[12px] font-normal">{dateTimeBn}</p>
        </div>
        <div className="flex items-end gap-3">
          <Link
            href={`/${AJKER_PATRIKA_PAGE.slug}`}
            className="group flex items-center gap-1 text-xs text-black hover:text-blue-600"
          >
            আজকের পত্রিকা
          </Link>

          <Link
            href={"https://epaper.dailyadin.com/"}
            target="_blank"
            className="group flex items-center gap-1 text-xs text-black hover:text-blue-600"
          >
            ই-পেপার
          </Link>
        </div>
      </div>
      <div className="w-full bg-white sticky top-0 z-50 md:top-auto">

        <Container>
          <div className="w-full flex flex-col gap-2 pt-3">
            <TopBar menus={menus} dateTimeBn={dateTimeBn} />
          </div>
        </Container>
      </div>
      <div className="sticky top-0 hidden md:block w-full bg-white z-[11] shadow-md shadow-gray-200 border-t">
        <Container>
          <Navbar menus={menus} />
        </Container>
      </div>

      {/* Adevtisement - Below Top Header in Mobile view */}
      <div className="relative overflow-hidden block sm:hidden print:hidden pt-2 px-4">
        {/* The mobile banner previously rendered without a link. */}
        <Link
          href="https://northsouthgroup.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-100"
        >
          <ImageWithFallback
            src={headerBanner}
            width={500}
            height={150}
            alt="North South Group"
            className="object-contain w-80 xl:w-[360px] mx-auto"
          />
        </Link>
      </div>
    </>
  );
}
