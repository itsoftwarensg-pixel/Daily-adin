"use client";

import React, { useEffect, useState } from "react";
import Container from "@/lib/components/common/container";
import TopBar from "@/lib/components/layout/header/TopBar";
import Navbar from "@/lib/components/layout/header/Navbar";
import { getBnDateTimeAction, getMenuAction } from "@/app/actions/utils";
import { NavbarMenuItem } from "@/lib/types/common.types";

export function ApplicationHeaderClient() {
  const [dateTimeBn, setDateTimeBn] = useState<string>("");
  const [menus, setMenus] = useState<NavbarMenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [dateRes, menuRes] = await Promise.all([
          getBnDateTimeAction(),
          getMenuAction(),
        ]);
        if (dateRes) setDateTimeBn(dateRes);
        if (menuRes) setMenus(menuRes);
      } catch (error) {
        console.error("Error fetching header data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full bg-white sticky top-0 z-50 md:top-auto">
        <Container>
          <div className="w-full flex flex-col gap-2 pt-3">
            <TopBar menus={menus} dateTimeBn={dateTimeBn} />
          </div>
        </Container>
      </div>
      <div className="sticky top-0 hidden md:block w-full bg-white z-[11]">
        <Container>
          <Navbar menus={menus} />
        </Container>
      </div>
      {loading && (
        <div className="h-1 bg-red-600 animate-pulse absolute top-0 left-0 right-0 z-[60]" />
      )}
    </>
  );
}
