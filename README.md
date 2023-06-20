# Next 13 보일러 플레이트

이 레포지토리는 Next 3을 학습하며 실무 또는 개인 포트폴리오 생성 시 바로 가져다 세팅 할 수 있도록 만들어둔 Next 3 보일러 플레이트 입니다.

### 기본 세팅

- Next13 + TypeScript + ESLint 세팅
- `Pages`라우팅 방식이 아닌 새로 도입된 `App`라우터 방식 사용
- `sitemap.ts` , `robots.ts`와 html의 시맨틱태그를 통한 `SEO` 관리
- `@reduxjs/toolkit` 상태관리 라이브러리를 통한 상태관리 세팅
- `RTK Query`를 사용한 비동기 데이터 처리
- `next/image` 컴포넌트를 사용한 이미지 렌더링 최적화 및 Layout Shift 현상 방지
- 에러 및 404 페이지 처리
- `loading.tsx`를 활용한 로딩 이펙트 처리
- `'use client'`를 사용한 서버 및 클라이언트 컴포넌트 관리

위 세팅 이외에 `app/` 내부의 컴포넌트들로 총 7개의 예시 페이지가 존재합니다.

1. 메인 페이지
2. 미들웨어 테스트 서브 페이지
3. 이미지 임포트 관련 예시 페이지
4. `@reduxjs/toolkit` 스토어 사용 관련 예시 페이지
5. `next/navigation`을 사용한 `query` 및 `param` 데이터 처리 페이지
6. `RTK Query` 훅을 사용해 비동기 데이터를 처리하는 예시 페이지
7. 404 테스트 페이지
8. 로딩 이펙트 처리

---

현재 세팅된 기능 및 예시 페이지들을 활용해 더 빠르게 Next13 프로젝트 구축을 하면 됩니다.

(사용된 라이브러리 버전은 package.json 참조)

<br />

### 실행 방법

`npm i`

`npm run dev`

robots.txt 및 sitemap.xml 은 실행 시 robots.ts 와 sitemap.ts로 자동 빌드 됨
