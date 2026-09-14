# LUCE company page

LUCE의 정적 회사 소개 페이지입니다. 같은 상위 폴더의 PuppyRuby Next.js 프로젝트에서 밝은 크림 배경, 픽셀 그래픽, 한국어 중심의 친근한 문장 톤을 참고해 독립적인 회사 브랜드 페이지로 구성했습니다.

## 로컬 실행

```bash
npm install
npm run dev
```

`http://127.0.0.1:3000`에서 확인할 수 있습니다.

## 배포

Vercel에서 이 폴더를 프로젝트 루트로 연결하면 됩니다. 별도 환경 변수나 서버가 필요하지 않습니다. `npm run build`는 완전한 정적 결과물을 `out` 폴더에 생성합니다.

## 콘텐츠 수정

- 회사 소개와 프로젝트 문구: `src/components/company-landing.tsx`
- 컬러, 타이포그래피, 반응형 레이아웃: `src/app/globals.css`
- 검색 결과 제목과 설명: `src/app/layout.tsx`
