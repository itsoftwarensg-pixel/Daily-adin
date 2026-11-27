import type { Metadata } from "next";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import Container from "@/lib/components/common/container";
import { editorialTeam } from "@/lib/components/layout/footer/editorial-team";
import { teamDepartments } from "./team-departments";

export const metadata: Metadata = { title: "আমরা | দৈনিক এদিন" };

// const demoNewsroom = ["বার্তা সম্পাদক", "সহকারী বার্তা সম্পাদক", "জ্যেষ্ঠ সহসম্পাদক", "সহসম্পাদক"];
/* IT members previously came from a separate list.
const itTeam: TeamMember[] = [
  // { name: "Joy Krisno Ray", role: "Software Engineer" },
  // { name: "Raihan Reza", role: "IT Officer" },
  // { name: "Mohammad Al Maruf", role: "Graphic Designer" },
  // { name: "জয় কৃষ্ণ রায়", role: "সফটওয়্যার ইঞ্জিনিয়ার" },
  // Previous portrait: /images/team-joy-krisno-ray.jpg
  { name: "জয় কৃষ্ণ রায়", role: "সফটওয়্যার ইঞ্জিনিয়ার", photo: "/images/team-joy-krisno-ray.png" },
  { name: "মো. রায়হান রেজা", role: "সিনিয়র আইটি অফিসার" },
  // { name: "মোহাম্মদ আল মারুফ", role: "গ্রাফিক ডিজাইনার" },
  { name: "মোহাম্মদ আল-মারুফ", role: "উপব্যবস্থাপক, আইটি ও ব্র্যান্ডিং", photo: "/images/team-mohammad-al-maruf.jpg" },
];
*/

type TeamMember = { name: string; role: string; photo?: string };

function TeamCard({ name, role, photo, fillPortrait = false }: TeamMember & { fillPortrait?: boolean }) {
  return (
    <li className="overflow-hidden rounded border border-dashed border-red-500 bg-white text-center text-black">
      {/* Previous portrait frame was 96px on mobile and 120px on wider screens. */}
      <div className="grid place-items-center bg-red-50 py-5">
        {/* The previous circle was 112px on mobile and 144px on wider screens. */}
        <div className="relative grid aspect-square w-32 max-w-[calc(100%-8px)] place-items-center overflow-hidden rounded-full border-4 border-white bg-red-100 sm:w-40">
          {photo ? (
            // Previously the image used the default centered crop.
            // The previous crop filled the circle for every portrait.
            <Image src={photo} alt="" fill sizes="(min-width: 640px) 152px, 120px" className={fillPortrait ? "object-cover object-[center_30%]" : "bg-white object-contain"} />
          ) : (
            <FaUser aria-hidden="true" className="h-8 w-8 text-red-700" />
          )}
        </div>
      </div>
      {/* Previous captions used a base-size name and a tightly spaced small role. */}
      <div className="border-t border-red-100 px-3 py-3.5 sm:px-4 sm:py-4">
        <h3 className="text-lg font-bold leading-snug text-black sm:text-xl">{name}</h3>
        <p className="mt-1.5 text-base font-medium leading-relaxed text-neutral-800">{role}</p>
      </div>
    </li>
  );
}

const headingClass = "mb-4 text-center text-xl font-bold text-black underline decoration-red-600 underline-offset-4";
const departmentGrid = "grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4";

export default function TeamPage() {
  return (
    <Container>
      {/* Previous directory and leadership widths were 960px and 220px. */}
      <div className="mx-auto max-w-[1080px] py-8 sm:py-10">
        <h1 className={headingClass}>আমরা</h1>
        {/* Previous leadership layout placed all cards in one 250px column. */}
        <ul aria-label="ব্যবস্থাপনা" className="mx-auto grid max-w-[250px]">
          {/* This portrait previously used the shared default crop. */}
          <TeamCard name="ইউসুফ আলী" role="ব্যবস্থাপনা পরিচালক" photo="/images/team-usuf-ali.webp" fillPortrait />
        </ul>
        <ul aria-label="সম্পাদকীয় নেতৃত্ব" className="mx-auto mt-4 grid max-w-[516px] grid-cols-2 gap-3 sm:gap-4">
          {editorialTeam.map(({ name, role, photo }) => (
            <TeamCard key={role} name={name} role={role} photo={photo} />
          ))}
        </ul>

        {/* Previous sample newsroom and IT sections
        <section className="mt-10" aria-labelledby="newsroom-heading">
          <h2 id="newsroom-heading" className={headingClass}>বার্তাকক্ষ</h2>
          <ul className={departmentGrid}>
            <TeamCard name="সাইফুল ইসলাম" role="এদিন ডিজিটাল প্রধান" />
            {demoNewsroom.map((role) => <TeamCard key={role} name="নমুনা প্রোফাইল" role={role} />)}
          </ul>
        </section>

        <section className="mt-10" aria-labelledby="it-team-heading">
          <h2 id="it-team-heading" className={headingClass}>আইটি বিভাগ</h2>
          <ul className={departmentGrid}>
            {itTeam.map((member) => <TeamCard key={member.name} {...member} />)}
          </ul>
        </section>
        */}

        <nav aria-label="কর্মী তালিকার বিভাগ" className="mt-8 flex flex-wrap justify-center gap-2 border-y border-red-100 py-4">
          {teamDepartments.map(({ id, title }) => (
            <a key={id} href={`#team-${id}`} className="rounded border border-red-100 bg-red-50 px-3 py-1.5 font-medium text-red-900 hover:border-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-700">
              {title}
            </a>
          ))}
        </nav>

        {teamDepartments.map(({ id, title, members }) => {
          // const departmentMembers = id === "it" ? [...itTeam, ...members] : members;
          const visibleMembers = members.filter(({ name }) => !editorialTeam.some((editor) => editor.name === name));

          return (
            <section key={id} id={`team-${id}`} className="mt-10 scroll-mt-24" aria-labelledby={`team-${id}-heading`}>
              <h2 id={`team-${id}-heading`} className={headingClass}>{title}</h2>
              <ul className={departmentGrid}>
                {visibleMembers.map((member) => <TeamCard key={member.name} {...member} />)}
              </ul>
            </section>
          );
        })}
      </div>
    </Container>
  );
}

// Previous light red team layout
// function TeamCard({ name, role }: TeamMember) {
//   return (
//     <li className="flex min-w-0 flex-col items-center rounded-xl border border-neutral-200 bg-white px-3 py-5 text-center sm:px-4">
//       <div className="grid h-14 w-14 place-items-center rounded-full border border-red-100 bg-red-50 text-red-700">
//         <FaUser aria-hidden="true" className="h-5 w-5" />
//       </div>
//       <h3 className="mt-3 text-base font-bold leading-snug text-black">{name}</h3>
//       <p className="mt-1 text-sm leading-relaxed text-black">{role}</p>
//     </li>
//   );
// }
//
// function LeadershipCard({ name, role, photo }: TeamMember) {
//   return (
//     <li className="flex min-w-0 items-center gap-4 rounded-xl border border-red-100 bg-white p-4 sm:gap-5 sm:p-6">
//       <div className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-red-500 bg-red-50 text-black sm:h-28 sm:w-28">
//         {photo ? (
//           <Image src={photo} alt="" fill sizes="(min-width: 640px) 108px, 76px" className="object-cover" />
//         ) : (
//           <FaUser aria-hidden="true" className="h-8 w-8" />
//         )}
//       </div>
//       <div className="min-w-0">
//         <h3 className="text-xl font-bold leading-snug text-black sm:text-2xl">{name}</h3>
//         <p className="mt-1 text-sm font-medium leading-relaxed text-black sm:text-base">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// export default function TeamPage() {
//   return (
//     <div className="bg-red-50/40">
//       <header className="border-t-4 border-red-600 bg-red-50 text-black">
//         <Container>
//           <div className="mx-auto max-w-5xl pb-8 pt-9 sm:pb-11 sm:pt-14">
//             <p className="mb-2 text-base font-semibold text-black">দৈনিক এদিন</p>
//             <h1 className="text-5xl font-bold leading-none sm:text-6xl">আমরা</h1>
//             <section className="mt-8 border-t border-red-200 pt-5 sm:mt-10" aria-labelledby="leadership-heading">
//               <h2 id="leadership-heading" className="mb-4 text-lg font-semibold text-black">নেতৃত্ব</h2>
//               <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
//                 <LeadershipCard name="ইউসুফ আলী" role="ব্যবস্থাপনা পরিচালক" photo="/images/team-usuf-ali.webp" />
//                 {editorialTeam.map(({ name, role, photo }) => (
//                   <LeadershipCard key={role} name={name} role={role} photo={photo} />
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </Container>
//       </header>
//
//       <Container>
//         <div className="mx-auto max-w-5xl space-y-9 py-8 sm:space-y-12 sm:py-11">
//           <section aria-labelledby="newsroom-heading">
//             <h2 id="newsroom-heading" className="mb-4 border-b border-neutral-200 pb-3 text-2xl font-bold text-black">
//               <span className="inline-block border-l-4 border-red-600 pl-3">বার্তাকক্ষ</span>
//             </h2>
//             <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//               <TeamCard name="সাইফুল ইসলাম" role="এদিন ডিজিটাল প্রধান" />
//               {demoNewsroom.map((role) => <TeamCard key={role} name="নমুনা প্রোফাইল" role={role} />)}
//             </ul>
//           </section>
//
//           <section aria-labelledby="it-team-heading">
//             <h2 id="it-team-heading" className="mb-4 border-b border-neutral-200 pb-3 text-2xl font-bold text-black">
//               <span className="inline-block border-l-4 border-red-600 pl-3">আইটি বিভাগ</span>
//             </h2>
//             <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//               {itTeam.map(({ name, role }) => <TeamCard key={name} name={name} role={role} />)}
//             </ul>
//           </section>
//         </div>
//       </Container>
//     </div>
//   );
// }

// Previous directory and portrait frame layout
// function TeamCard({ name, role }: TeamMember) {
//   return (
//     <li className="flex min-w-0 items-center gap-3 border-b border-slate-200 py-4">
//       <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600">
//         <FaUser aria-hidden="true" className="h-5 w-5" />
//       </div>
//       <div className="min-w-0">
//         <h3 className="text-base font-bold leading-snug text-neutral-950">{name}</h3>
//         <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// function LeadershipCard({ name, role, photo }: TeamMember) {
//   return (
//     <li className="flex min-w-0 flex-col items-center px-2 pb-5 pt-6 text-center sm:px-5 sm:pt-8">
//       {/* Previous portrait frame used a circular crop and a slate ring. */}
//       <div className="relative aspect-[4/5] w-24 shrink-0 border border-slate-200 bg-white p-1.5 shadow-sm before:pointer-events-none before:absolute before:-left-px before:-top-px before:z-10 before:h-5 before:w-5 before:border-l-2 before:border-t-2 before:border-red-700 after:pointer-events-none after:absolute after:-bottom-px after:-right-px after:z-10 after:h-5 after:w-5 after:border-b-2 after:border-r-2 after:border-red-700 sm:w-36">
//         <div className="relative grid h-full w-full place-items-center overflow-hidden bg-slate-100 text-slate-600">
//           {photo ? (
//             <Image src={photo} alt="" fill sizes="(min-width: 640px) 130px, 82px" className="object-cover" />
//           ) : (
//             <FaUser aria-hidden="true" className="h-8 w-8" />
//           )}
//         </div>
//       </div>
//       <div className="mt-4 min-w-0">
//         <h3 className="text-base font-bold leading-snug text-slate-950 sm:text-2xl">{name}</h3>
//         <p className="mt-1 text-sm font-medium leading-relaxed text-red-800 sm:text-base">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// export default function TeamPage() {
//   return (
//     <div className="bg-white">
//       <header className="bg-white text-slate-950">
//         <Container>
//           <div className="mx-auto max-w-5xl pt-8 sm:pt-12">
//             <div className="border-b-2 border-red-700 pb-5 text-center sm:pb-7">
//               <p className="mb-2 font-semibold text-red-800">দৈনিক এদিন</p>
//               <h1 className="text-5xl font-bold leading-tight sm:text-7xl">আমরা</h1>
//             </div>
//             <section className="mt-6 sm:mt-8" aria-labelledby="leadership-heading">
//               <h2 id="leadership-heading" className="mb-3 text-center text-xl font-bold text-slate-900">নেতৃত্ব</h2>
//               <ul className="grid grid-cols-2 divide-x divide-slate-200 border-y border-slate-200 bg-slate-50">
//                 <LeadershipCard name="ইউসুফ আলী" role="ব্যবস্থাপনা পরিচালক" photo="/images/team-usuf-ali.webp" />
//                 {editorialTeam.map(({ name, role, photo }) => (
//                   <LeadershipCard key={role} name={name} role={role} photo={photo} />
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </Container>
//       </header>
//
//       <Container>
//         <div className="mx-auto max-w-5xl space-y-9 py-8 sm:space-y-12 sm:py-11">
//           <section aria-labelledby="newsroom-heading">
//             <h2 id="newsroom-heading" className="border-b-2 border-red-700 pb-2 text-2xl font-bold text-slate-950">
//               <span className="inline-block">বার্তাকক্ষ</span>
//             </h2>
//             <ul className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
//               <TeamCard name="সাইফুল ইসলাম" role="এদিন ডিজিটাল প্রধান" />
//               {demoNewsroom.map((role) => <TeamCard key={role} name="নমুনা প্রোফাইল" role={role} />)}
//             </ul>
//           </section>
//
//           <section aria-labelledby="it-team-heading">
//             <h2 id="it-team-heading" className="border-b-2 border-red-700 pb-2 text-2xl font-bold text-slate-950">
//               <span className="inline-block">আইটি বিভাগ</span>
//             </h2>
//             <ul className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
//               {itTeam.map(({ name, role }) => <TeamCard key={name} name={name} role={role} />)}
//             </ul>
//           </section>
//         </div>
//       </Container>
//     </div>
//   );
// }

// Previous warm team layout
// function TeamCard({ name, role }: TeamMember) {
//   return (
//     <li className="flex min-w-0 items-center gap-3 rounded-lg border border-[#e8ded5] bg-white px-3 py-3.5 sm:px-4">
//       <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f9eae2] text-red-800">
//         <FaUser aria-hidden="true" className="h-5 w-5" />
//       </div>
//       <div className="min-w-0">
//         <h3 className="text-base font-bold leading-snug text-neutral-950">{name}</h3>
//         <p className="mt-0.5 text-sm leading-relaxed text-neutral-600">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// function LeadershipCard({ name, role, photo }: TeamMember) {
//   return (
//     <li className="flex min-w-0 items-center gap-4 rounded-2xl border border-[#e8ded5] bg-[#fffdfa] p-4 sm:gap-5 sm:p-6">
//       <div className="relative grid h-24 w-24 shrink-0 place-items-center overflow-hidden rounded-full border-4 border-white bg-[#f9eae2] text-red-800 ring-1 ring-red-200 sm:h-32 sm:w-32">
//         {photo ? (
//           <Image src={photo} alt="" fill sizes="(min-width: 640px) 120px, 88px" className="object-cover" />
//         ) : (
//           <FaUser aria-hidden="true" className="h-8 w-8" />
//         )}
//       </div>
//       <div className="min-w-0">
//         <h3 className="text-xl font-bold leading-snug text-neutral-950 sm:text-2xl">{name}</h3>
//         <p className="mt-1 text-sm font-medium leading-relaxed text-red-800 sm:text-base">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// export default function TeamPage() {
//   return (
//     <div className="bg-[#faf7f2]">
//       <header className="border-b border-[#e8ded5] bg-[#f7ede5] text-neutral-950">
//         <Container>
//           <div className="mx-auto max-w-5xl pb-8 pt-9 sm:pb-11 sm:pt-14">
//             <div className="relative overflow-hidden rounded-2xl border border-[#ebd8cc] bg-[#fae9e0] px-6 py-8 sm:px-10 sm:py-10">
//               <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_12px,#9f272414_12px,#9f272414_13px)] [mask-image:linear-gradient(to_right,transparent,black)]" />
//               <div className="relative border-l-4 border-red-700 pl-4">
//                 <p className="mb-2 font-semibold text-red-800">দৈনিক এদিন</p>
//                 <h1 className="text-5xl font-bold leading-tight sm:text-6xl">আমরা</h1>
//               </div>
//             </div>
//             <section className="mt-6 sm:mt-8" aria-labelledby="leadership-heading">
//               <h2 id="leadership-heading" className="mb-4 text-xl font-bold text-neutral-900">নেতৃত্ব</h2>
//               <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
//                 <LeadershipCard name="ইউসুফ আলী" role="ব্যবস্থাপনা পরিচালক" photo="/images/team-usuf-ali.webp" />
//                 {editorialTeam.map(({ name, role, photo }) => (
//                   <LeadershipCard key={role} name={name} role={role} photo={photo} />
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </Container>
//       </header>
//
//       <Container>
//         <div className="mx-auto max-w-5xl space-y-9 py-8 sm:space-y-12 sm:py-11">
//           <section aria-labelledby="newsroom-heading">
//             <h2 id="newsroom-heading" className="mb-4 border-b border-[#e8ded5] pb-3 text-2xl font-bold text-neutral-950">
//               <span className="inline-block border-l-4 border-red-600 pl-3">বার্তাকক্ষ</span>
//             </h2>
//             <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//               <TeamCard name="সাইফুল ইসলাম" role="এদিন ডিজিটাল প্রধান" />
//               {demoNewsroom.map((role) => <TeamCard key={role} name="নমুনা প্রোফাইল" role={role} />)}
//             </ul>
//           </section>
//
//           <section aria-labelledby="it-team-heading">
//             <h2 id="it-team-heading" className="mb-4 border-b border-[#e8ded5] pb-3 text-2xl font-bold text-neutral-950">
//               <span className="inline-block border-l-4 border-red-600 pl-3">আইটি বিভাগ</span>
//             </h2>
//             <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//               {itTeam.map(({ name, role }) => <TeamCard key={name} name={name} role={role} />)}
//             </ul>
//           </section>
//         </div>
//       </Container>
//     </div>
//   );
// }

// Previous team layout with a dark header
// function TeamCard({ name, role }: TeamMember) {
//   return (
//     <li className="flex min-w-0 flex-col items-center rounded-xl border border-neutral-200 bg-white px-3 py-5 text-center sm:px-4">
//       <div className="grid h-14 w-14 place-items-center rounded-full border border-red-100 bg-red-50 text-red-700">
//         <FaUser aria-hidden="true" className="h-5 w-5" />
//       </div>
//       <h3 className="mt-3 text-base font-bold leading-snug text-neutral-950">{name}</h3>
//       <p className="mt-1 text-sm leading-relaxed text-neutral-600">{role}</p>
//     </li>
//   );
// }
//
// function LeadershipCard({ name, role, photo }: TeamMember) {
//   return (
//     <li className="flex min-w-0 items-center gap-4 rounded-xl border border-neutral-700 bg-neutral-900 p-4 sm:gap-5 sm:p-6">
//       <div className="relative grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-red-500 bg-neutral-800 text-neutral-300 sm:h-28 sm:w-28">
//         {photo ? (
//           <Image src={photo} alt="" fill sizes="(min-width: 640px) 108px, 76px" className="object-cover" />
//         ) : (
//           <FaUser aria-hidden="true" className="h-8 w-8" />
//         )}
//       </div>
//       <div className="min-w-0">
//         <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">{name}</h3>
//         <p className="mt-1 text-sm font-medium leading-relaxed text-red-300 sm:text-base">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// export default function TeamPage() {
//   return (
//     <div className="bg-neutral-50">
//       <header className="border-t-4 border-red-600 bg-neutral-950 text-white">
//         <Container>
//           <div className="mx-auto max-w-5xl pb-8 pt-9 sm:pb-11 sm:pt-14">
//             <p className="mb-2 text-base font-semibold text-red-300">দৈনিক এদিন</p>
//             <h1 className="text-5xl font-bold leading-none sm:text-6xl">আমরা</h1>
//             <section className="mt-8 border-t border-neutral-800 pt-5 sm:mt-10" aria-labelledby="leadership-heading">
//               <h2 id="leadership-heading" className="mb-4 text-lg font-semibold text-neutral-200">নেতৃত্ব</h2>
//               <ul className="grid gap-3 sm:grid-cols-2 sm:gap-5">
//                 <LeadershipCard name="ইউসুফ আলী" role="ব্যবস্থাপনা পরিচালক" photo="/images/team-usuf-ali.webp" />
//                 {editorialTeam.map(({ name, role, photo }) => (
//                   <LeadershipCard key={role} name={name} role={role} photo={photo} />
//                 ))}
//               </ul>
//             </section>
//           </div>
//         </Container>
//       </header>
//
//       <Container>
//         <div className="mx-auto max-w-5xl space-y-9 py-8 sm:space-y-12 sm:py-11">
//           <section aria-labelledby="newsroom-heading">
//             <h2 id="newsroom-heading" className="mb-4 border-b border-neutral-200 pb-3 text-2xl font-bold text-neutral-950">
//               <span className="inline-block border-l-4 border-red-600 pl-3">বার্তাকক্ষ</span>
//             </h2>
//             <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//               <TeamCard name="সাইফুল ইসলাম" role="এদিন ডিজিটাল প্রধান" />
//               {demoNewsroom.map((role) => <TeamCard key={role} name="নমুনা প্রোফাইল" role={role} />)}
//             </ul>
//           </section>
//
//           <section aria-labelledby="it-team-heading">
//             <h2 id="it-team-heading" className="mb-4 border-b border-neutral-200 pb-3 text-2xl font-bold text-neutral-950">
//               <span className="inline-block border-l-4 border-red-600 pl-3">আইটি বিভাগ</span>
//             </h2>
//             <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
//               {itTeam.map(({ name, role }) => <TeamCard key={name} name={name} role={role} />)}
//             </ul>
//           </section>
//         </div>
//       </Container>
//     </div>
//   );
// }

// Previous red-neutral team card and page layout
// function TeamCard({ name, role, photo }: { name: string; role: string; photo?: string }) {
//   return (
//     <li className="overflow-hidden rounded-lg border border-gray-200 bg-white text-center">
//       <div className="grid place-items-center bg-gray-2 px-3 py-5">
//         {/* The avatar previously always rendered the placeholder icon. */}
//         <div className="relative grid h-24 w-24 place-items-center overflow-hidden rounded-full border-4 border-white bg-gray-200 text-gray-500 sm:h-28 sm:w-28">
//           {photo ? (
//             <Image src={photo} alt="" fill sizes="(min-width: 640px) 104px, 88px" className="object-cover" />
//           ) : (
//             <FaUser aria-hidden="true" className="h-9 w-9" />
//           )}
//         </div>
//       </div>
//       <div className="px-2 py-3">
//         <h3 className="text-lg font-bold leading-snug">{name}</h3>
//         <p className="mt-1 text-sm text-textGray">{role}</p>
//       </div>
//     </li>
//   );
// }
//
// export default function TeamPage() {
//   return (
//     <Container>
//       <div className="mx-auto max-w-5xl py-10 sm:py-14">
//         <h1 className="mb-6 text-center text-3xl font-bold underline decoration-red-600 decoration-2 underline-offset-8">আমরা</h1>
//         <ul className="mx-auto grid max-w-56 gap-4">
//           {/* <TeamCard name="Usuf Ali" role="Managing Director" /> */}
//           <TeamCard name="ইউসুফ আলী" role="ব্যবস্থাপনা পরিচালক" photo="/images/team-usuf-ali.webp" />
//         </ul>
//         {/* The acting editor previously appeared in the single-card row above. */}
//         {/* <ul className="mx-auto mt-4 grid max-w-[29rem] grid-cols-2 gap-3 sm:gap-5"> */}
//         <ul className="mx-auto mt-4 grid max-w-56 gap-4">
//           {/* {editorialTeam.map(({ name, role }) => <TeamCard key={role} name={name} role={role} />)} */}
//           {editorialTeam.map(({ name, role, photo }) => (
//             <TeamCard key={role} name={name} role={role} photo={photo} />
//           ))}
//           {/* <TeamCard name="Saiful Islam" role="Adin Digital Head" /> */}
//         </ul>
//
//         <section className="mt-10" aria-labelledby="newsroom-heading">
//           <h2 id="newsroom-heading" className="mb-5 text-center text-2xl font-bold underline decoration-red-600 underline-offset-8">বার্তাকক্ষ</h2>
//           <ul className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
//             <TeamCard name="সাইফুল ইসলাম" role="এদিন ডিজিটাল প্রধান" />
//             {demoNewsroom.map((role) => <TeamCard key={role} name="নমুনা প্রোফাইল" role={role} />)}
//           </ul>
//         </section>
//
//         <section className="mt-10" aria-labelledby="it-team-heading">
//           <h2 id="it-team-heading" className="mb-5 text-center text-2xl font-bold underline decoration-red-600 underline-offset-8">আইটি বিভাগ</h2>
//           <ul className="mx-auto grid max-w-[44rem] grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5">
//             {itTeam.map(({ name, role }) => <TeamCard key={name} name={name} role={role} />)}
//           </ul>
//         </section>
//       </div>
//     </Container>
//   );
// }

// Previous team layout
// export default function TeamPage() {
//   return (
//     <Container>
//       <section className="mx-auto max-w-3xl py-10 sm:py-14">
//         <h1 className="border-b border-gray-200 pb-4 text-3xl font-bold sm:text-4xl">আমরা</h1>
//         <h2 className="mb-4 mt-7 text-xl font-semibold">সম্পাদকীয় দল</h2>
//         <ul className="grid gap-4 sm:grid-cols-2">
//           {editorialTeam.map(({ name, role }) => (
//             <li key={role} className="border border-gray-200 border-t-2 border-t-red-600 bg-gray-2 px-5 py-6">
//               <h3 className="text-xl font-bold">{name}</h3>
//               <p className="mt-1 text-textGray">{role}</p>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </Container>
//   );
// }
