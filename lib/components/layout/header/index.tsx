import React from "react";
import Container from "@/lib/components/common/container";
import TopBar from "@/lib/components/layout/header/TopBar";
import Navbar from "@/lib/components/layout/header/Navbar";

export default function ApplicationHeader() {
  return (
    <>
      <div className="w-full bg-white">
        <Container>
          <div className="w-full flex flex-col gap-2 pt-3">
            <TopBar />
          </div>
        </Container>
      </div>
      <div className="sticky top-0 w-full bg-white z-50">
        <Container>
          <Navbar />
        </Container>
      </div>
    </>
  );
}
