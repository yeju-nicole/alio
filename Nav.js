import Link from "next/link";
import CoinBadge from "./CoinBadge";

const LINKS = [
  { href: "/product", label: "제품" },
  { href: "/story", label: "스토리" },
  { href: "/contact", label: "문의" },
];

export default function Nav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(250, 249, 246, 0.86)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--alio-purple-line)",
      }}
    >
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
          aria-label="alio 홈으로"
        >
          <CoinBadge size={34}>alio</CoinBadge>
          <span
            className="label nav-eyebrow"
            style={{ letterSpacing: "0.02em", fontSize: "0.72rem" }}
          >
            PERFUME SAMPLE CASE
          </span>
        </Link>

        <nav
          aria-label="주요 메뉴"
          className="nav-links"
          style={{ display: "flex", alignItems: "center", gap: 30 }}
        >
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="label" style={{ fontSize: "0.78rem" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn" style={{ padding: "10px 20px" }}>
            문의하기
          </Link>
        </nav>
      </div>
    </header>
  );
}
