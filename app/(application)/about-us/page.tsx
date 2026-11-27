import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/lib/components/common/container";

export const metadata: Metadata = { title: "আমাদের সম্পর্কে | দৈনিক এদিন" };

export default function AboutUsPage() {
  return (
    <Container>
      <article className="mx-auto max-w-3xl py-10 sm:py-14">
        <h1 className="border-b border-gray-200 pb-4 text-3xl font-bold sm:text-4xl">
          আমাদের সম্পর্কে
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-textGray">
          <p>
            দৈনিক এদিন একটি বাংলা সংবাদপত্র। দেশের নানা প্রান্তের খবরের পাশাপাশি
            রাজনীতি, অর্থনীতি, আন্তর্জাতিক, খেলাধুলা ও বিনোদনের খবর আমরা প্রকাশ করি।
            পাঠকের কাছে জনজীবনের গুরুত্বপূর্ণ ঘটনাগুলো সহজ ভাষায় তুলে ধরাই আমাদের লক্ষ্য।
          </p>
          <p>
            মুদ্রিত পত্রিকার পাশাপাশি ওয়েবসাইটে সর্বশেষ সংবাদ, ছবি ও ভিডিও পাওয়া যায়।
            দৈনিক এদিনের ওয়েবসাইটের নকশা ও উন্নয়নে কাজ করেছে নর্থসাউথ টেক সলিউশনস।
          </p>
        </div>
        <Link href="/team" className="mt-6 inline-block font-semibold text-red-700 underline underline-offset-4">
          আমাদের সম্পাদকীয় দল দেখুন
        </Link>
      </article>
    </Container>
  );
}
