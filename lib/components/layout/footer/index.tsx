import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import { x, tiktok, youtube, facebook } from "@/lib/components/icons";

export default function ApplicationFooter() {
  const addressLines = [
    "টাওয়ার-এ (২য় তলা) , হাউস-১৩, রোড-১৭, বনানী, ঢাকা-১২১৩।",
    "টেলিফোন : ০৯৬৩৯১০১৯২৩",
    "Email: dailyadinbd@gmail.com",
  ];

  const urls = [
    { href: "#advertisement", label: "বিজ্ঞাপন" },
    { href: "#terms-and-conditions", label: "নীতি ও শর্ত" },
    { href: "#newsletter", label: "নিউজলেটার" },
    { href: "#about-us", label: "আমাদের সম্পর্কে" },
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", icon: facebook, alt: "facebook" },
    { href: "https://www.x.com", icon: x, alt: "x" },
    { href: "https://www.youtube.com", icon: youtube, alt: "youtube" },
    { href: "https://www.tiktok.com", icon: tiktok, alt: "tiktok" },
  ];

  return (
    <footer className="w-full">
      {/* Upper Section */}
      <div className="w-full pt-[45px] pb-[90px] bg-[#F5F5F5]">
        <div className="max-w-[1200px] mx-auto flex justify-between items-start">
          {/* Left Sections */}
          <div className="flex gap-[76px]">
            {/* Contact */}
            <div className="flex flex-col gap-[20px]">
              <p className="w-fit text-[20px] border-b rounded-[3px] border-[#BABABA] p-[10px]">
                যোগাযোগ করুন
              </p>
              <div className="flex flex-col">
                {addressLines.map((text, i) => (
                  <p
                    key={i}
                    className="p-[10px] text-[20px] text-textGray font-normal"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-[20px]">
              <p className="w-fit text-[20px] border-b rounded-[3px] border-[#BABABA] p-[10px]">
                লিঙ্কসমূহ
              </p>
              <div className="flex flex-col">
                {urls.map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="p-[10px] text-[20px] text-textGray font-normal"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-[20px]">
            <p className="w-fit text-[20px] border-b rounded-[3px] border-[#BABABA] p-[10px]">
              আমাদের সোসিয়াল মিডিয়া সমূহ
            </p>
            <div className="flex items-center gap-[10px]">
              {socialLinks.map((item, i) => (
                <Link
                  key={i}
                  target="_blank"
                  href={item.href}
                  className="bg-white p-[10px] overflow-hidden"
                >
                  <ImageWithFallback
                    src={item.icon}
                    width={24}
                    height={24}
                    alt={item.alt}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-[76px] bg-[#ECECEC] text-center">
        <p className="text-[20px] font-normal text-textGray">
          © স্বত্ব ২০২৫ দৈনিক এদিন | ভারপ্রাপ্ত সম্পাদক: মো. সাইদুল ইসলাম সাজু
        </p>
      </div>
    </footer>
  );
}
