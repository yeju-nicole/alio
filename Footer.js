import Link from "next/link";
import CoinBadge from "./CoinBadge";

export default function Footer() {
  return (
    <footer className="section--line" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 40,
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", gap: 16, alignItems: "center", maxWidth: 380 }}>
          <CoinBadge size={52}>alio</CoinBadge>
          <p style={{ fontSize: "0.95rem", color: "var(--alio-ink-soft)", lineHeight: 1.6 }}>
            라틴어로 &lsquo;다른 방향으로&rsquo;. 버려지던 향수 샘플을, 다른 방향으로.
          </p>
        </div>

        <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
          <div>
            <p className="label" style={{ marginBottom: 14 }}>사이트</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/product" style={{ fontSize: "0.92rem" }}>제품</Link>
              <Link href="/story" style={{ fontSize: "0.92rem" }}>스토리</Link>
              <Link href="/contact" style={{ fontSize: "0.92rem" }}>문의</Link>
            </div>
          </div>
          <div>
            <p className="label" style={{ marginBottom: 14 }}>연락</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://instagram.com/alio.official" style={{ fontSize: "0.92rem" }}>
                Instagram
              </a>
              <a href="mailto:hello@alio.kr" style={{ fontSize: "0.92rem" }}>
                hello@alio.kr
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 48 }}>
        <p style={{ fontSize: "0.78rem", color: "var(--alio-ink-soft)" }}>
          © {new Date().getFullYear()} alio. 3D 프린팅으로 필요한 만큼만 만듭니다.
        </p>
      </div>
    </footer>
  );
}
