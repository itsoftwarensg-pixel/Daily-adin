import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Container from "../../common/container";

export default function ApplicationHeader() {
  return (
    <Container>
      <div className="w-full h-full flex flex-col items-start gap-[30px] pt-[30px]">
        <TopBar />
        <Navbar />
      </div>
    </Container>
  );
}
