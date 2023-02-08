export const experiences = [
  {
    title: 'CEOS',
    description: [
      '기획, 디자인, 개발 역량을 겸비한 열정 있는 대학생들이 프로덕트를 실현하는 신촌 유일의 ',
      'IT 창업 동아리',
      '',
    ],
    color: '#0E4C9C',
    tags: ['# IT', '# 개발', '# 동아리'],
    imageUrl: '/image/experiences/ceos.png',
    contents: [
      [
        { text: 'CEOS 15기 프론트엔드', date: '2022.03.09. ~ 2022.08.05.' },
        { text: '프론트엔드 스터디', link: 'https://github.com/jhj2713/CEOS-15th-Frontend-Study' },
        { text: '온라인 증상감별, 건강관리 서비스 Healthier 프론트엔드 개발', link: 'https://healthier.cf/' },
      ],
      [
        { text: 'CEOS 16기 프론트엔드 파트장', date: '2022.09.07. ~ 2023.02.10.' },
        { text: '프론트엔드 스터디 관리', link: '' },
        {
          text: '활발한 코드 리뷰 문화 구축',
          link: 'https://github.com/CEOS-Developers/vanilla-todo-16th/pull/2#pullrequestreview-1110945610',
        },
      ],
    ],
  },
  {
    title: '부스트캠프 웹・모바일',
    description: ['지속 가능한 성장을 위한 ', '개발자 학습 커뮤니티', ''],
    color: '#2071FF',
    tags: ['# 개발', '# 지속 가능한 성장'],
    imageUrl: '/image/experiences/boostcamp.png',
    contents: [
      [
        { text: '네이버 커넥트재단 부스트캠프 웹・모바일 7기 챌린지', date: '2022.07.18. ~ 2022.08.12.' },
        { text: 'JavaScript 기반으로 매일 다른 미션을 수행하며 CS 지식 학습', link: '' },
      ],
      [
        { text: '네이버 커넥트재단 부스트캠프 웹・모바일 7기 멤버십', date: '2022.08.31. ~ 2022.12.16.' },
        { text: '학습 스프린트를 통해 JavaScript 기반으로 풀스택 웹 서비스 개발을 위한 지식 학습', link: '' },
        {
          text: '그룹 프로젝트를 통해 실시간 협업 플랫폼 BooCrum 프론트엔드 개발',
          link: '',
        },
      ],
    ],
  },
];

export type IExperience = (typeof experiences)[0];
