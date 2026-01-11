import React from "react";
import Container from "@/lib/components/common/container";
import TopBar from "@/lib/components/layout/header/TopBar";
import Navbar from "@/lib/components/layout/header/Navbar";
import { getBnDateTimeAction, getMenuAction } from "@/app/actions/utils";

export default async function ApplicationHeader() {
  const [dateTimeBn, menus] = await Promise.all([
    getBnDateTimeAction(),
    getMenuAction(),
  ]);

  return (
    <>
      <div className="w-full bg-white">
        <div className="w-full bg-white sticky top-0 z-50 md:top-auto">
          <Container>
            <div className="w-full flex flex-col gap-2 pt-3">
              <TopBar menus={menus} dateTimeBn={dateTimeBn} />
            </div>
          </Container>
        </div>
      </div>
      <div className="sticky top-0 hidden md:block w-full bg-white z-[11] shadow-md shadow-gray-200 border-t">
        <Container>
          <Navbar menus={menus} />
        </Container>
      </div>
    </>
  );
}
