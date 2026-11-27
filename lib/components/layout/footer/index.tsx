import Link from "next/link";
import { ImageWithFallback } from "@/lib/components/image";
import { x, tiktok, youtube, facebook } from "@/lib/components/icons";
import Container from "@/lib/components/common/container";
import { CurrentYear } from "@/lib/utils/helpers";
import { PiPhoneDisconnect } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { ContactEmail } from "./contact-email";

// import Image from "next/image";
// import adinLogo from "@/public/logo.png";
// import northSouthLogo from "@/public/images/north-south-group-logo.jpg";
// import titanicLogo from "@/public/images/topbar-logo.png";
import { editorialTeam } from "./editorial-team";

// const brands = [
//   { href: "/", src: adinLogo, alt: "দৈনিক এদিন" },
//   { href: "https://northsouthgroup.com/", src: northSouthLogo, alt: "North South Group" },
//   { href: "https://www.titanicbay.com/", src: titanicLogo, alt: "Titanic Bay" },
// ];

const headingClass = "mb-3 border-b border-gray-200 pb-2 text-lg font-semibold text-black";

export default function ApplicationFooter() {
  const urls = [
    { href: "#advertisement", label: "বিজ্ঞাপন" },
    { href: "#terms-and-conditions", label: "নীতি ও শর্ত" },
    // Previous destination: "#about-us".
    { href: "/about-us", label: "আমাদের সম্পর্কে" },
    { href: "/team", label: "আমরা" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/dailyadinbd",
      icon: facebook,
      alt: "facebook",
    },
    { href: "https://x.com/dailyadinbd", icon: x, alt: "x" },
    {
      href: "https://www.youtube.com/@dailyadinbd",
      icon: youtube,
      alt: "youtube",
    },
    {
      href: "https://www.tiktok.com/@adinbd",
      icon: tiktok,
      alt: "tiktok",
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-2 print:hidden">
      <Container>
        {/* Previous footer logo row
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 py-5 sm:gap-4">
          {brands.map(({ href, src, alt }) => (
            <Link
              key={href}
              href={href}
              prefetch={false}
              // Previous logo tiles used h-14 with widths of 96px and 144px.
              className="flex w-full max-w-64 flex-col items-center rounded border border-gray-200 bg-white px-3 pb-2 hover:border-red-500 focus-visible:outline-red-700 sm:w-64"
            >
              <Image
                src={src}
                alt=""
                // Previous image box: max-h-10 with a 78px or 118px size hint.
                sizes="230px"
                className="h-24 w-full object-contain"
              />
              <span className="text-center text-sm font-semibold text-gray-800">{alt}</span>
            </Link>
          ))}
        </div>
        */}

        <div className="grid gap-x-8 gap-y-7 py-7 text-textGray sm:grid-cols-2 lg:grid-cols-[1.2fr_1.2fr_0.65fr_0.85fr]">
          <section>
            <h2 className={headingClass}>সম্পাদকীয়</h2>
            <div className="space-y-2">
              {editorialTeam.map(({ role, name }) => (
                <p key={role}><span className="font-semibold text-black">{role}:</span> {name}</p>
              ))}
              <p>শরীয়তপুর প্রিন্টিং প্রেস ২৮/বি, টয়েনলি সার্কুলার রোড, মতিঝিল-১০০০, ঢাকা থেকে মুদ্রিত</p>
            </div>
          </section>

          <section>
            <h2 className={headingClass}>যোগাযোগ করুন</h2>
            <address className="space-y-2 not-italic">
              <p>টাওয়ার-এ (২য় তলা), হাউস-১৩, রোড-১৭, বনানী, ঢাকা-১২১৩।</p>
              <a href="tel:+8802226603352" className="flex items-center gap-2 hover:text-red-700">
                <PiPhoneDisconnect aria-hidden="true" /> ০২-২২৬৬০৩৩৫২
              </a>
              <a href="tel:+8801897664656" className="flex items-center gap-2 hover:text-red-700">
                <BsTelephone aria-hidden="true" /> ০১৮৯৭-৬৬৪৬৫৬
              </a>
              <p className="break-words">ইমেইল <ContactEmail /></p>
            </address>
          </section>

          <nav aria-labelledby="footer-links">
            <h2 id="footer-links" className={headingClass}>প্রয়োজনীয় লিঙ্ক</h2>
            <ul className="space-y-2">
              {urls.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} prefetch={false} className="hover:text-red-700 hover:underline underline-offset-4">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section>
            <h2 className={headingClass}>আমাদের সোশ্যাল মিডিয়া</h2>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map(({ href, icon, alt }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded border border-gray-200 bg-white hover:border-red-500 focus-visible:outline-red-700"
                >
                  <ImageWithFallback src={icon} width={22} height={22} alt={alt} />
                </a>
              ))}
            </div>
          </section>
        </div>
      </Container>

      <div className="border-t border-gray-200 bg-gray-3 py-4">
        <Container>
          <div className="flex flex-col gap-1 text-sm text-textGray sm:flex-row sm:justify-between sm:gap-4">
            <p>© স্বত্ব {CurrentYear()}, দৈনিক এদিন</p>
            <p>
              Design &amp; Developed by{" "}
              <a href="https://northsouthgroup.com/" className="text-green-700 hover:underline">
                NorthSouth Tech Solutions
              </a>.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

// Previous footer markup
//   return (
//     <footer className="w-full print:hidden">
//       {/* Upper Section */}
//       <div className="w-full py-12 bg-gray-2">
//         <Container>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[30px] items-start">
//             {/* Address */}
//             <div className="flex flex-col gap-[20px]">
//               <div className="flex flex-col space-y-4">
//                 <p className="text-lg text-black font-semibold mb-0">
//                   ভারপ্রাপ্ত সম্পাদক: মো. সাইদুল ইসলাম সাজু
//                   <br />
//                   নির্বাহী সম্পাদক: খন্দকার মোজাম্মেল হক
//                 </p>
//                 <p className="text-md text-textGray font-normal">
//                   শরীয়তপুর প্রিন্টিং প্রেস ২৮/বি, টয়েনলি সার্কুলার রোড,
//                   মতিঝিল-১০০০, ঢাকা থেকে মুদ্রিত
//                 </p>
//               </div>
//             </div>
//
//             {/* Contact Info */}
//             <div className="flex flex-col gap-[20px]">
//               <p className="w-fit text-xl border-b rounded-[3px] border-[#BABABA] mb-3">
//                 যোগাযোগ করুন
//               </p>
//               <div className="flex flex-col space-y-3">
//                 <p className="text-lg text-textGray font-normal">
//                   টাওয়ার-এ (২য় তলা), হাউস-১৩, রোড-১৭, বনানী, ঢাকা-১২১৩।
//                 </p>
//                 <p className="flex gap-2 items-center text-lg text-textGray font-normal">
//                   <PiPhoneDisconnect />
//                   <a
//                     href="tel:+8802226603352"
//                     aria-label="Call at 02-2266033 52"
//                     className="hover:text-black focus:text-black focus:outline-none"
//                   >
//                     ০২-২২৬৬০৩৩৫২
//                   </a>
//                 </p>
//                 <p className="flex gap-2 items-center text-lg text-textGray font-normal">
//                   <BsTelephone />
//                   <a
//                     href="tel:+8801897664656"
//                     aria-label="Call at 01897-664656"
//                     className="hover:text-black focus:text-black focus:outline-none"
//                   >
//                     ০১৮৯৭-৬৬৪৬৫৬
//                   </a>
//                 </p>
//                 <p className="text-lg text-textGray font-normal flex gap-2">
//                   ইমেইল : <ContactEmail />
//                 </p>
//               </div>
//             </div>
//
//             {/* Useful Links */}
//             <div className="flex flex-col gap-[20px]">
//               <p className="w-fit text-xl border-b rounded-[3px] border-[#BABABA] mb-3">
//                 লিঙ্ক
//               </p>
//               <div className="flex flex-col space-y-3">
//                 {urls.map((item, i) => (
//                   <Link
//                     key={i}
//                     href={item.href}
//                     className="text-lg text-textGray font-normal hover:text-black"
//                   >
//                     {item.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//
//             {/* Social Media */}
//             <div className="flex flex-col gap-[20px]">
//               <p className="w-fit text-xl border-b rounded-[3px] border-[#BABABA] mb-3">
//                 আমাদের সোশ্যাল মিডিয়া
//               </p>
//               <div className="flex items-center gap-[10px]">
//                 {socialLinks.map((item, i) => (
//                   <Link
//                     key={i}
//                     target="_blank"
//                     href={item.href}
//                     className="bg-white p-[10px] rounded hover:scale-105 transition-transform"
//                   >
//                     <ImageWithFallback
//                       src={item.icon}
//                       width={24}
//                       height={24}
//                       alt={item.alt}
//                     />
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
//
//       {/* Bottom Bar */}
//       <div className="w-full py-6 bg-gray-3">
//         <Container>
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-md font-normal text-textGray">
//               © স্বত্ব {CurrentYear()}, দৈনিক এদিন
//             </p>
//             <p className="text-md font-normal text-textGray">
//               Design & Developed by
//               <a
//                 href="https://northsouthgroup.com/"
//                 className="text-green-600 hover:underline pl-1"
//               >
//                 NorthSouth Tech Solutions
//               </a>
//               .
//             </p>
//           </div>
//         </Container>
//       </div>
//     </footer>
//   );
// }
