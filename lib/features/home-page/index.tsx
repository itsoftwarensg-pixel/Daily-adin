import React from "react";
import HomeLead from "@/lib/features/home-page/lead";
import HomeLeadBelow from "@/lib/features/home-page/lead-below";
import HomeSports from "@/lib/features/home-page/sports";
import HomeCountry from "@/lib/features/home-page/country";

const HomePage = () => {
    return (
        <>
            <HomeLead />
            <HomeLeadBelow />
            <HomeSports />
            <HomeCountry />
        </>
    );
};

export default HomePage;
