# LUCE

FATELL, BUCHU, HWA:RYEOK, SOROW를 소개하는 LUCE의 사업 포트폴리오입니다. 짧은 소개와 각 서비스의 실제 화면, 한 문장 설명, 사이트 링크로 구성했습니다.

Next.js App Router, React, TypeScript, CSS로 제작했습니다. 페이지는 빌드 시 정적 파일로 생성되며 별도 서버, 데이터베이스, API 키, 환경 변수 없이 배포할 수 있습니다.

## 로컬 실행

Node.js와 npm을 설치한 뒤 프로젝트 폴더에서 실행합니다.

```bash
npm ci
npm run dev
```

브라우저에서 [http://127.0.0.1:3000](http://127.0.0.1:3000)을 엽니다.

## 배포 전 확인

```bash
npm run typecheck
npm run build
```

`next.config.ts`의 `output: "export"` 설정에 따라 배포 파일이 `out/`에 생성됩니다. 정적 배포 결과는 `next start`가 아닌 정적 파일 서버로 확인해야 합니다.

## Vercel 배포

1. 이 프로젝트를 Git 저장소에 올립니다.
2. Vercel에서 **Add New → Project**를 선택하고 저장소를 연결합니다.
3. 프로젝트 루트를 이 폴더로 지정하고 Framework Preset을 **Next.js**로 설정합니다.
4. Build Command는 `npm run build`를 사용합니다. Output Directory는 Next.js 자동 설정을 유지합니다.
5. 환경 변수 추가 없이 **Deploy**를 선택합니다. 이후 연결한 브랜치에 변경 사항을 푸시하면 다시 배포됩니다.

`vercel.json`에 프레임워크와 빌드 명령이 지정되어 있습니다. 자체 도메인은 배포 후 Vercel 프로젝트의 Domains에서 연결할 수 있습니다. `out/`은 일반 정적 호스팅에서도 사용할 수 있습니다.

### 무료 플랜 안내

이 사이트는 실행 서버 없이 운영할 수 있도록 제작했지만, 무료 호스팅 자격은 서비스 정책에 따라 다릅니다. [Vercel Hobby 공식 안내](https://vercel.com/docs/plans/hobby)에 따르면 Hobby는 개인의 비상업적 용도로만 이용할 수 있습니다. 실제 사업과 브랜드를 홍보하는 LUCE 사이트는 상업적 이용에 해당할 수 있으므로 무료 Hobby 운영을 보장하지 않습니다. 사업용으로 공개하기 전 Vercel의 상업적 이용이 가능한 플랜과 약관을 확인하세요. 정책 확인일: 2026-10-23.

## 콘텐츠 수정

| 수정할 내용                       | 위치                                 |
| --------------------------------- | ------------------------------------ |
| 브랜드 이름, 설명, 사이트 링크    | `src/lib/brands.ts`                  |
| 각 사이트의 실제 캡처 이미지     | `public/sites/`                     |
| 첫 화면, 사업 소개, 섹션 구성     | `src/components/company-landing.tsx` |
| 색상, 글꼴, 반응형 레이아웃, 모션 | `src/app/globals.css`                |
| 검색 결과·공유 제목 및 설명       | `src/app/layout.tsx`                 |
| 브라우저 탭 아이콘                | `public/favicon.svg`                 |
| 정적 내보내기 설정                | `next.config.ts`                     |

운영 도메인이 정해지면 `src/app/layout.tsx`의 메타데이터에 해당 도메인 기준의 canonical URL 및 공유 이미지를 추가할 수 있습니다. 현재는 임의의 LUCE 도메인을 지정하지 않았습니다.

## 연결된 브랜드

- [FATELL](https://fatell.co.kr)
- [BUCHU](https://buchu.co.kr)
- [HWARYEOK](https://www.hwaryeok.co.kr)
- [SOROW](https://sorow.co.kr)

## 화면 캡처

2026-10-24에 각 사이트를 직접 열어 저장한 실제 화면입니다. 외부 이미지 서버를 호출하지 않고 프로젝트에 포함된 JPG를 표시합니다.

| 이미지 | 캡처한 페이지 |
| --- | --- |
| `public/sites/fatell.jpg` | https://www.fatell.co.kr/ |
| `public/sites/buchu.jpg` | https://www.buchu.co.kr/programs |
| `public/sites/hwaryeok.jpg` | https://www.hwaryeok.co.kr/ |
| `public/sites/sorow.jpg` | https://www.sorow.co.kr/ |

부추는 캡처 당시 홈의 글 목록에 오류가 있어 정상 표시되는 부업 정보 페이지를 사용했습니다. 이미지를 갱신할 때는 같은 파일을 새 캡처로 교체하면 됩니다.
