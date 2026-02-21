import React from "react";
import Container from "@/lib/components/common/container";
import TopBar from "@/lib/components/layout/header/TopBar";
import Navbar from "@/lib/components/layout/header/Navbar";
import { getBnDateTimeAction, getMenuAction } from "@/app/actions/utils";
import { CATEGORY_SLUG } from "@/lib/config/constant";
import { getCategoryBySlugAction } from "@/app/actions/category";
import { ImageWithFallback } from "@/lib/components/image";
import headerBanner from "@/public/images/header-banner.svg";
import Link from "next/link";

export default async function ApplicationHeader() {
  const [dateTimeBn, menus, personalityData] = await Promise.all([
    getBnDateTimeAction(),
    getMenuAction(),
    getCategoryBySlugAction(CATEGORY_SLUG.PERSONALITY, "position_contents") // সবিশেষ
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
            href={"/"}
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
            <TopBar menus={menus} dateTimeBn={dateTimeBn} personalityData={personalityData} />
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
        <div className="bg-gray-100">
          <ImageWithFallback
            src={headerBanner}
            width={500}
            height={150}
            alt="The Daily Adin Logo"
            className="object-contain w-80 xl:w-[360px] mx-auto"
          />
        </div>
      </div>
    </>
  );
}
