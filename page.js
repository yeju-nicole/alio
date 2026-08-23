import CoinBadge from "../../components/CoinBadge";

export const metadata = {
  title: "브랜드 스토리 — alio",
  description: "alio라는 이름의 의미와, 향수 샘플 낭비를 줄이기 위해 이 브랜드가 시작된 이유.",
};

export default function Story() {
  return (
    <div className="wrap" style={{ paddingTop: "clamp(48px, 8vw, 88px)", paddingBottom: "var(--gap-section)" }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <p className="label label--purple" style={{ marginBottom: 20, textAlign: "center" }}>
          브랜드 스토리
        </p>
        <h1 style={{ textAlign: "center" }}>다른 방향으로</h1>

        <div style={{ marginTop: 56, display: "flex", flexDirection: "column", gap: 44 }}>
          <section>
            <h2 style={{ fontSize: "1.3rem", marginBottom: 16 }}>이름의 의미</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--alio-ink-soft)" }}>
              alio는 라틴어로 &lsquo;다른 방향으로&rsquo;라는 뜻이에요. 지금 당연하게
              여겨지는 어떤 흐름을, 조금 다른 방향으로 옮겨보고 싶다는 마음을
              담아 이름 지었어요.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", marginBottom: 16 }}>시작된 이유</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--alio-ink-soft)" }}>
              향수를 살 때마다 함께 받는 샘플들이 있었어요. 하나하나는 예쁘고
              소중한데, 정작 담아 둘 자리가 마땅치 않았어요. 파우치 구석이나
              서랍 어딘가를 떠돌다가, 결국 유통기한이 지나 버려지는 걸 여러 번
              지켜봤어요. 향은 남아 있는데, 놓일 자리가 없어서 버려지는 거였죠.
            </p>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--alio-ink-soft)", marginTop: 20 }}>
              그래서 만들었어요. 샘플을 옮겨 담아 가방에 매달고 다닐 수 있는,
              아주 작고 가벼운 케이스를요. 다 쓰면 버리는 게 아니라, 새 샘플로
              다시 채우면 되는 방식으로요.
            </p>
          </section>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              padding: "28px 0",
              borderTop: "1px solid var(--alio-purple-line)",
              borderBottom: "1px solid var(--alio-purple-line)",
            }}
          >
            <CoinBadge size={56} tone="purple">&ldquo;</CoinBadge>
            <p style={{ fontSize: "1.1rem", fontStyle: "italic", lineHeight: 1.6 }}>
              향은 남기고, 낭비는 다른 방향으로 보내고 싶었어요.
            </p>
          </div>

          <section>
            <h2 style={{ fontSize: "1.3rem", marginBottom: 16 }}>만드는 방식</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--alio-ink-soft)" }}>
              alio는 3D 프린팅으로 만들어요. 미리 대량으로 찍어 재고를 쌓아두는
              대신, 주문이 들어온 만큼만 그때그때 출력해요. 남는 재고도, 팔리지
              않아 버려지는 제품도 없도록 하기 위해서예요. 소재는 TPU를
              써서 잘 무르지 않고, 오래 다시 채워 쓸 수 있게 만들었어요.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", marginBottom: 16 }}>앞으로</h2>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.9, color: "var(--alio-ink-soft)" }}>
              지금은 향수 샘플 하나에서 시작하지만, alio가 향하는 방향은 결국
              하나예요. 당연하게 버려지던 것들을, 계속 다른 방향으로 옮겨가는
              것. 색상과 형태는 조금씩 늘려가더라도, 이 방향만큼은 그대로
              지켜가려고 해요.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
