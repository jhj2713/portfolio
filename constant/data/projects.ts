export const projects = [
  {
    title: 'Healthier',
    description: [
      '',
      '진단 로직',
      '을 기반으로 3분 안에 빠르게 의심 질환을 확인하고 증상에 맞는 의료 정보를 제공해주는 서비스',
    ],
    color: '#5464F2',
    dates: ['2022.05.04.', ''],
    tags: ['# React', '# TypeScript', '# Storybook', '# Redux-Toolkit', '# styled-components'],
    imageUrl: '/image/projects/healthier.png',
    role: [
      ['기획자 2명, 디자이너 2명, 프론트엔드 개발자 2명(본인 포함), 백엔드 개발자 2명'],
      ['디자인 시스템 문서화', 'Storybook으로 독자적인 환경에서 UI 컴포넌트 렌더링을 확인하고 디자인 시스템을 문서화'],
      ['감별 진단 시스템 구현', '감별 진단 클라이언트 구현', '진단 결과 클라이언트 구현'],
    ],
    contribution: [
      [
        '컴포넌트 주도 개발을 위해 Storybook 도입',
        '컴포넌트를 개발 환경에서 단독으로 확인하며 구현하기 어려운 문제',
        'Storybook을 활용해 컴포넌트를 독자적인 환경에서 개발하고 문서화',
      ],
      ['개발자 경험을 위한 노력', 'barrel import로 import 가독성 개선'],
      ['UI 재사용을 위해 컴포넌트 추상화', '공통된 layout과 styling을 구현한 추상화 컴포넌트 생성'],
    ],
    link: 'https://healthier.cf/',
    github: 'https://github.com/healthier-devs/healthier-frontend',
  },
  {
    title: 'BooCrum',
    description: [
      '온라인 환경에서 스크럼 회고, 브레인스토밍, 아이디어 회의 진행을 도와주는 화이트보드 기반의 ',
      '실시간 협업',
      ' 플랫폼',
    ],
    color: '#2071FF',
    dates: ['2022.11.07.', '2022.12.16.'],
    tags: ['# React', '# TypeScript', '# Recoil', '# Fabric.js', '# styled-components'],
    imageUrl: '/image/projects/boocrum.png',
    role: [
      ['프론트엔드 개발자 3명(본인 포함), 백엔드 개발자 2명'],
      ['figma를 활용해 서비스 UI 프로토타입 제작'],
      ['워크스페이스 목록 조회 구현', 'intersection observer를 활용해 무한 스크롤 구현'],
      [
        '실시간 공동 작업 구현',
        'socket 이벤트와 Fabric.js의 이벤트 사이의 단방향 흐름 구축',
        '실시간으로 Fabric.js 객체 속성을 받아 공동 작업이 가능하도록 구현',
      ],
    ],
    contribution: [
      [
        '사용성 개선을 위한 노력',
        '매주 회의를 통해 팀원들과 함께 UX 개선 사항을 도출',
        '필요한 UX 개선 사항들을 문서화하고 개선',
      ],
      [
        '렌더링 성능 개선',
        'lighthouse 성능 검사를 통해 초기 렌더링 속도의 문제 파악',
        'code splitting으로 번들 사이즈를 줄임으로써 렌더링 성능 개선',
      ],
      [
        '분리된 모듈을 observer 패턴으로 결합',
        '관심사에 따라 분리된 모듈들을 Event 기반의 observer 패턴을 활용해 느슨한 결합',
      ],
      ['로직 재사용을 위해 custom hook 활용', 'modal, contextMenu 등 반복되는 로직을 custom hook으로 분리하고 재사용'],
    ],
    link: 'https://www.youtube.com/watch?v=QZIRvB2xzBM',
    github: 'https://github.com/boostcampwm-2022/web22-BooCrum',
  },
  {
    title: 'NoonSori',
    description: ['AI를 이용한 자동화로 빠르게 ', '폐쇄형 자막', '을 제공하는 웹 서비스'],
    color: '#385DE2',
    dates: ['2021.09.07.', '2022.06.15.'],
    tags: ['# React', '# TypeScript', '# React-Query', '# styled-components'],
    imageUrl: '/image/projects/noonsori.png',
    role: [
      ['프론트엔드 개발자 1명(본인 포함), 백엔드 개발자 3명'],
      ['인증 시스템 구현', '서비스 로그인 및 회원가입 구현', 'kakao, google 소셜 로그인 구현'],
      ['영상 및 폐쇄형 자막 스크립트 구현', 'video 태그와 track 태그를 활용해 영상과 자막 렌더링'],
      ['영상 업로드 시스템 구현', 'Presigned URL로 AWS Bucket에 영상 업로드'],
      ['React-Query를 활용해 서버 상태 관리', '데이터 패칭 상태를 활용해 조건부 렌더링'],
    ],
    contribution: [
      [
        '영상 업로드 시스템 개선',
        '업로드 로직에서 서버를 경유하는 불필요한 요청이 발생',
        'Presigned URL로 서버를 거치지 않고 AWS Bucket에 영상 업로드',
      ],
      [
        '영상 처리 상태를 확인해 조건부 렌더링',
        'React-Query를 활용해 영상의 처리 상태를 확인',
        '영상이 처리 중인 경우 Loading 창을 볼 수 있도록 조건부 렌더링',
      ],
      ['폐쇄형 자막 스크립트 사용성 개선', 'video DOM 조작으로 스크립트의 타임라인 기능 제공'],
    ],
    link: '',
    github: 'https://github.com/So-Woo-Ju/NoonSori',
  },
];
