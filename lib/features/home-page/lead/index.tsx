import React from "react";
import Container from "@/lib/components/common/container";
import HomeLeadSidebar from "@/lib/features/home-page/lead/aside";
import Advertisement from "@/lib/components/common/advertisement";
import LeadNewsItem from "@/lib/components/common/news-elements/lead-news-item";
import NewsItemBase from "@/lib/components/common/news-elements/news-item-base";

const HomeLead = () => {
  return (
    <div className="py-8">
      <Container>
        <div className="grid grid-cols-4 gap-4">
          {/* Lead news - Left side */}
          <div className="space-y-2">
            <NewsItemBase />
            <Advertisement height={"90"} width={"360"} />
          </div>

          {/* Lead news - Center */}
          <div className="col-span-2">
            <LeadNewsItem />
            <Advertisement width={"728"} height={"90"} className="mx-auto" />
          </div>

          {/* Sidebar - Rigt side */}
          <div className="">
            <HomeLeadSidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeLead;
