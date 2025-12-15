import React from "react";
import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import { x, tiktok, youtube, facebook } from "@/lib/components/icons";
import Container from "@/lib/components/common/container";

export default function ApplicationFooter() {
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
      <div className="w-full py-12 bg-gray-2">
        <Container>
          <div className="flex justify-between items-start">
            {/* Left Sections */}
            <div className="flex gap-[76px]">
              {/* Contact */}
              <div className="flex flex-col gap-[20px]">
                <p className="w-fit text-[20px] border-b rounded-[3px] border-[#BABABA] mb-3">
                  যোগাযোগ করুন
                </p>
                <div className="flex flex-col space-y-3">
                  <p className="text-lg text-textGray font-normal">
                    টাওয়ার-এ (২য় তলা) , হাউস-১৩, রোড-১৭, বনানী, ঢাকা-১২১৩।
                  </p>
                  <p className="text-lg text-textGray font-normal">
                    টেলিফোন : ০৯৬৩৯১০১৯২৩
                  </p>
                  <p className="text-lg text-textGray font-normal">
                    Email: <Link href={`malito:dailyadinbd@gmail.com`} className="hover:text-black">dailyadinbd@gmail.com</Link>
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-[20px]">
                <p className="w-fit text-[20px] border-b rounded-[3px] border-[#BABABA] mb-3">
                  লিঙ্কসমূহ
                </p>
                <div className="flex flex-col space-y-3">
                  {urls.map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-lg text-textGray font-normal hover:text-black"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-[20px]">
              <p className="w-fit text-[20px] border-b rounded-[3px] border-[#BABABA] mb-3">
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
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="w-full py-6 bg-gray-3">
        <Container>
          <div className="flex justify-between gap-4">
            <p className="text-md font-normal text-textGray">
              © স্বত্ব ২০২৫ দৈনিক এদিন | ভারপ্রাপ্ত সম্পাদক: মো. সাইদুল ইসলাম সাজু
            </p>
            <p className="text-md font-normal text-textGray">
              Design & Developed by <a href="http://www.bongosoftbd.com/" className="text-green-600 hover:underline">Bongosoft Ltd</a>.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
