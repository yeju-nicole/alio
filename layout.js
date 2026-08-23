import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  title: "alio — 향수 샘플을, 다른 방향으로",
  description:
    "향수 살 때마다 딸려오는 샘플, 갈 곳이 없어 버려지곤 하죠. alio는 그 샘플을 위한 휴대용 케이스 키링입니다. TPU 소재, 3D 프린팅 소량 제작, NFC 태깅으로 다시 만나는 제로웨이스트 브랜드.",
  metadataBase: new URL("https://alio.vercel.app"),
  openGraph: {
    title: "alio — 향수 샘플을, 다른 방향으로",
    description: "제로웨이스트 향수 샘플 키링 케이스, alio.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#8c7fc9",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
