# alio

향수 샘플 케이스 키링 브랜드 alio의 웹사이트. Next.js(App Router) + 정적 export.
서버가 필요 없는 순수 정적 사이트라, 별도 백엔드 유지보수 없이 오래 운영하기 좋습니다.

## 로컬에서 실행하기

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인할 수 있어요.

## 빌드

```bash
npm run build
```

`out/` 폴더에 정적 파일이 생성됩니다. (`next.config.mjs`에서 `output: "export"` 설정)

## GitHub에 올리기

이 폴더 전체(README, app, components, public, package.json 등)를
`SNU-Project`가 아닌 알리오 전용 레포 `yeju-nicole/alio`에 push하면 됩니다.

```bash
cd alio-site
git init
git add .
git commit -m "alio 웹사이트 초기 버전"
git branch -M main
git remote add origin https://github.com/yeju-nicole/alio.git
git push -u origin main --force
```

(레포에 README만 있는 상태라면 `--force` 없이 그냥 push해도 됩니다.
이미 다른 커밋이 있다면 `--force`는 신중하게 사용하세요.)

## Vercel 배포

1. https://vercel.com 에 GitHub 계정으로 로그인
2. "Add New Project" → `yeju-nicole/alio` 레포 선택
3. Framework Preset이 자동으로 Next.js로 잡힘 → 별다른 설정 없이 Deploy
4. 완료되면 프로젝트 이름을 정확히 `alio`로 지정해 배포하면 `https://alio.vercel.app`
   주소를 무료로 바로 받을 수 있어요. (이미 다른 계정이 "alio"라는 이름을 쓰고
   있다면 `alio-xxxx.vercel.app`처럼 랜덤 문자가 붙을 수 있어요 — 그럴 땐
   `alio-official` 같은 대안 이름으로 다시 시도하세요.)
5. 지금은 이 무료 주소만으로 운영하고, 나중에 정식 도메인을 구매하게 되면
   Vercel 프로젝트 설정 → Domains 에서 추가로 연결하면 됩니다. (`alio.com`이
   안 되면 `alio.co` / `alio.kr` 등 대안 검토)

## 배포 전 꼭 바꿔야 할 것 (TODO)

- `components/Footer.js`, `components/ContactForm.js`의
  `hello@alio.kr` → 실제 사용할 이메일 주소로 교체
- `components/Footer.js`, `app/contact/page.js`의
  `instagram.com/alio.official` → 실제 인스타그램 계정 링크로 교체
- 가격(제품 페이지 `app/product/page.js`의 SPECS)이 확정되면 실제 가격으로 교체
- 본체 색상이 늘어나면 `components/ColorPicker.js`의 `BODY_OPTIONS` 배열에 추가

## 다음 단계 (Phase 2 후보)

- 실제 결제 연동 (Stripe 또는 국내 PG)
- 향BTI / 오늘의 향 추천
- 미니게임 3–5종 + 로그인 + 랭킹 (별도 DB 필요, Supabase 추천)
- NFC 클리커 태깅 시 alio.com(또는 확정 도메인)으로 바로 연결되도록 설정
- (참고) 지금은 `https://alio.vercel.app`으로 NFC 클리커를 프로그래밍하면 돼요.
  나중에 정식 도메인을 연결하면 그때 클리커 URL도 함께 바꿔주세요.
