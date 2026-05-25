"use client";

// "dailyadinbd@gmail.com" — assembled at runtime to avoid bot scraping
const ENCODED = [100,97,105,108,121,97,100,105,110,98,100,64,103,109,97,105,108,46,99,111,109];

export function ContactEmail() {
  const email = ENCODED.map((c) => String.fromCharCode(c)).join("");

  return (
    <a
      href={`mailto:${email}`}
      aria-label={`ইমেইল পাঠান: ${email}`}
      className="hover:text-black focus:text-black focus:outline-none"
    >
      {email}
    </a>
  );
}
