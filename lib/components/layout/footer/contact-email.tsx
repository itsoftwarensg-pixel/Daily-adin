"use client";

// Email is split across data-u / data-d attributes and assembled only via CSS content:
// CSS: .eml::before { content: attr(data-u) "@" attr(data-d) }
// No email string exists in any DOM text node or href — only a JS click handler opens mailto.
export function ContactEmail() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const { u, d } = e.currentTarget.dataset;
    if (u && d) window.location.href = `mailto:${u}@${d}`;
  };

  return (
    <>
      <style>{`.eml::before{content:attr(data-u)"@"attr(data-d)}`}</style>
      <span
        className="eml"
        data-u="dailyadinbd"
        data-d="gmail.com"
        onClick={handleClick}
      />
    </>
  );
}
