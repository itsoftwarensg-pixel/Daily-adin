import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Container from "../../common/container";

export default function ApplicationHeader() {
  return (
    <Container>
      <div className="w-full fixed top-0 left-0 z-50 bg-white">
        <Container>
          <div className="w-full flex flex-col gap-[30px] pt-[30px]">
            <TopBar />
            <Navbar />
          </div>
        </Container>
      </div>
    </Container>
  );
}
