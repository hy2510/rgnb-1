import { KOREAN } from '@/localization/localize-config'

interface DodoFriends {
  id: string
  name: string
  minPoint: number
  maxPoint: number
  title: string
  description: string
  imagePath: string
  lockImagePath: string
  list: {
    point: number
    title: string
    description: string
    imagePath: string
    imagePath2: string
  }[]
}

export function getDodoFriendsData(langCode?: string) {
  switch (langCode) {
    case KOREAN:
      return dodofriends
    default:
      return dodofriendsEn
  }
}

const dodofriends: DodoFriends[] = [
  {
    id: 'Baro',
    name: '바로',
    minPoint: 0,
    maxPoint: 100,
    title: '바로의 성장 스토리',
    description:
      '나는 다락방 옥수수들의 정신적인 지주, 바로야. 어떤 상황에서도 용기와 희망을 잃지 않지. 도도와 만났을 때, 난 해적 선장이 되었지. 내 꿈은 넓은 세계를 누비며 모험하는 거야.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/baro_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/baro_02.png',
    list: [
      {
        point: 0,
        title: '바로',
        description:
          '안녕! 난 바로야. 난 거친 바다를 누비는 멋진 해적왕이 될거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-001.gif',
      },
      {
        point: 25,
        title: '해적',
        description:
          '친구들! 드디어 꿈에 그리던 해적이 되었어! 모두들 내 활약을 기대하라구!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-002.gif',
      },
      {
        point: 50,
        title: '해적선장',
        description:
          '포인트로 산 나침반 덕분에 드디어 꿈에 그리던 보물섬을 발견했어!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-003.gif',
      },
      {
        point: 75,
        title: '해적왕',
        description:
          '하하하! 드디어 세계 최고의 해적왕이 되었어! 어때 나 멋있지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-004.gif',
      },
    ],
  },
  {
    id: 'Chello',
    name: '첼로',
    minPoint: 100,
    maxPoint: 300,
    title: '첼로의 성장 스토리',
    description:
      '난 예쁜 목소리와 체리 향기 나는 얼굴을 가진 첼로야. 노래와 춤을 사랑하는 난, 언젠가 멋진 가수가 될 거야.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/chello_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/chello_02.png',
    list: [
      {
        point: 100,
        title: '첼로',
        description:
          '안녕! 친구들! 난 멋진 가수가 되고픈 꿈 많은 소녀 첼로야! 만나서 반가워.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-001.gif',
      },
      {
        point: 150,
        title: '가수연습생',
        description:
          '꿈을 이루기 위해 가수 연습생이 되었어! 열심히 노래와 춤 연습을 할거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-002.gif',
      },
      {
        point: 200,
        title: '가수',
        description:
          '포인트 덕분에 내 첫 음반이 나왔어! 친구들! 내 멋진 노래 한 번 들어볼래?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-003.gif',
      },
      {
        point: 250,
        title: '가수왕',
        description:
          '친구들! 모두 모두 축하해줘! 드디어 꿈에 그리던 가수왕이 되었어!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-004.gif',
      },
    ],
  },
  {
    id: 'Millo',
    name: '밀로',
    minPoint: 300,
    maxPoint: 600,
    title: '밀로의 성장 스토리',
    description:
      '난 평범한 옥수수 밀로야. 도도의 마법 덕분에 멋쟁이 수리공이 되었지. 손으로 하는 거라면 뭐든 자신 있어.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/millo_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/millo_02.png',
    list: [
      {
        point: 300,
        title: '밀로',
        description: '안녕! 난 밀로라고 해! 멋진 우주선을 만드는 게 내 꿈이지.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-001.gif',
      },
      {
        point: 375,
        title: '항공우주국 연구원',
        description:
          '열심히 모은 포인트로 항공우주국에 들어왔어! 내 꿈이 멀지 않았어!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-002.gif',
      },
      {
        point: 450,
        title: '항공우주국 박사',
        description:
          '와우! 벌써 이렇게 많은 포인트를 모아서 우주선을 만들고 있어! 기대하라구!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-003.gif',
      },
      {
        point: 525,
        title: '항공우주국 국장',
        description:
          '보여? 내가 만든 우주선이 우주로 날아가고 있어! 내 꿈이 드디어 완성되었어!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-004.gif',
      },
    ],
  },
  {
    id: 'Jack',
    name: '잭',
    minPoint: 600,
    maxPoint: 1000,
    title: '잭의 성장 스토리',
    description:
      '나는 별의별 잡화점의 마스코트 잭이야. 우울하고 심술궂은 지하실의 분위기를 따뜻하고 행복하게 바꾼 희망의 아이콘 이지. 언젠가 이 세상에 따뜻한 사랑의 촛불을 밝힐 거야!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/jack_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/jack_02.png',
    list: [
      {
        point: 600,
        title: '잭',
        description:
          '안녕! 난 소심한 잭이라고 해. 하지만 이제부터는 당당한 모습을 보여줄거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-001.gif',
      },
      {
        point: 700,
        title: '시장 예비후보',
        description:
          '포인트 덕분에 자신감이 넘치니까 내가 시장 예비후보로 선정되었어!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-002.gif',
      },
      {
        point: 800,
        title: '시장 후보',
        description:
          '멋진 연설을 했더니 시장 후보에 선출되었어! 다들 응원해줄거지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-003.gif',
      },
      {
        point: 900,
        title: '시장',
        description:
          '와~ 소심했던 내가 시장이 되다니! 열심히 노력하면 꿈은 이루어진다구!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-004.gif',
      },
    ],
  },
  {
    id: 'Blanc',
    name: '블랑',
    minPoint: 1000,
    maxPoint: 1500,
    title: '블랑의 성장 스토리',
    description:
      '나는 먼지 괴물 블랑, 솜뭉치 블랑, 눈물 많은 블랑, 눈처럼 새하얀 블랑이야.. 내가 이곳에서 덩치가 제일 크지만, 한없이 연약하고 보드랍다고!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/blanc_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/blanc_02.png',
    list: [
      {
        point: 1000,
        title: '블랑',
        description:
          '안녕! 내 이름은 블랑! 친구들이 먼지투성이라고 부르지만 난 깨끗한 게 좋아!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-001.gif',
      },
      {
        point: 1125,
        title: '인턴',
        description: '치료제를 만들어 나쁜 바이러스로부터 친구들을 지킬거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-002.gif',
      },
      {
        point: 1250,
        title: '레지던트',
        description:
          '조금만 참고 기다려! 못된 바이러스를 치료해 주는 약품을 꼭 개발할거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-003.gif',
      },
      {
        point: 1375,
        title: '병원장',
        description:
          '드디어 치료제가 완성됐어! 친구들 이제 걱정말고 놀아도 돼!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-004.gif',
      },
    ],
  },
  {
    id: 'Sheila',
    name: '씰라',
    minPoint: 1500,
    maxPoint: 2500,
    title: '씰라의 성장 스토리',
    description:
      '나는 보자기 유령 씰라야. 유령 공장에서 태어났지만, 너무 작고 귀엽게 이 세상에 나왔지 뭐야. 하지만 난 너무 행복해. 세상에는 나 같은 꼬마 유령은 단 하나뿐이니까!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/sheila_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/sheila_02.png',
    list: [
      {
        point: 1500,
        title: '씰라',
        description: '안녕 난 씰라야. 난 맛있는 음식을 먹는 게 너무나 좋아!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-001.gif',
      },
      {
        point: 1750,
        title: '주방보조',
        description:
          '지금은 접시를 닦고 있지만 언제가는 꼭 최고의 요리사가 될거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-002.gif',
      },
      {
        point: 2000,
        title: '쉐프',
        description:
          '드디어 요리사가 되었어! 내 이름을 딴 세계적인 요리를 꼭 만들거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-003.gif',
      },
      {
        point: 2250,
        title: '마스터 쉐프',
        description: '내 이름을 딴 첫 요리가 탄생했어! 어때? 맛있어 보이지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-004.gif',
      },
    ],
  },
  {
    id: 'Tori',
    name: '토리',
    minPoint: 2500,
    maxPoint: 5000,
    title: '토리의 성장 스토리',
    description:
      '나는 참나무 숲의 도토리에서 태어난 토리야. 새벽부터 늦은 밤까지 부지런히 일하지. 난 잠시도 쉬지 않고 일하는데... 정말 화가 나. 내 도토리들을 훔쳐가는 복면다람쥐 때문이지.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/tori_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/tori_02.png',
    list: [
      {
        point: 2500,
        title: '토리',
        description: '얘들아! 반가워! 난 토리라고 해! 난 유명한 탐험가를 꿈꿔.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-001.gif',
      },
      {
        point: 3000,
        title: '암벽등반가',
        description: '탐험가는 암벽 등반도 잘 해야해. 어때? 잘하지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-002.gif',
      },
      {
        point: 3500,
        title: '정글탐험가',
        description:
          '포인트로 텐트를 구했어! 오늘부터 정글에서 살아남기 훈련을 시작할거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-003.gif',
      },
      {
        point: 4000,
        title: '레프팅 전문가',
        description:
          '레프팅도 할 줄 알아야 큰 탐험가가 될 수 있다고! 영차! 영차!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-004.gif',
      },
      {
        point: 4500,
        title: '위대한 탐험가',
        description: '드디어 남극점에 도달했어! 이제 나는 위대한 탐험가라고!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-005.gif',
      },
    ],
  },
  {
    id: 'Roro',
    name: '로로',
    minPoint: 5000,
    maxPoint: 7500,
    title: '로로의 성장 스토리',
    description:
      '나는 참나무 숲의 귀여운 복면다람쥐 로로야. 이 복면은 패션일 뿐, 난 도둑이 아니야. 그냥 빌렸을 뿐이지. 왜 다들 일만 죽어라 하는지 모르겠어. 난 놀기에도 바쁜데 말이야.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/roro_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/roro_02.png',
    list: [
      {
        point: 5000,
        title: '로로',
        description:
          '반가워 친구들! 나는 로빈훗처럼 용감하고 멋진 의적이 될거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-001.gif',
      },
      {
        point: 5500,
        title: '의적단 단원',
        description:
          '나야 나! 로로! 쉿! 모두 모른 척 해줘. 오늘 못된 욕심쟁이 영주를 혼내줄거니까!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-002.gif',
      },
      {
        point: 6000,
        title: '의적단 간부',
        description:
          '어? 이거? 나 혼자 쓸거냐고? 천만에! 가난한 친구들한테 나눠줄거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-003.gif',
      },
      {
        point: 6500,
        title: '의적단 대장',
        description:
          '못된 영주에게 쫓기고 있어! 하지만 난 포인트로 산 자전거 덕분에 잡히지 않는다고!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-004.gif',
      },
      {
        point: 7000,
        title: '시민영웅',
        description:
          '욕심쟁이 영주를 쫓아냈더니 숲이 이렇게 평화로워졌어. 고마워 친구들 덕분이야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-005.gif',
      },
    ],
  },
  {
    id: 'Green Thumb',
    name: '파파그린썸',
    minPoint: 7500,
    maxPoint: 10000,
    title: '파파그린썸의 성장 스토리',
    description:
      '나는 마을에서 가장 오래된 참나무 수호신이야, 이곳의 아이들은 나를 파파그린썸이라고 불러. 참나무 숲을 관리하느라 일년 내내 바쁘단다.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/greenthumb_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/greenthumb_02.png',
    list: [
      {
        point: 7500,
        title: '파파그린썸',
        description:
          '안녕하세요. 저는 나무를 사랑하는 파파그린썸 할아버지입니다. 허허허!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-001.gif',
      },
      {
        point: 8000,
        title: '씨앗 정령',
        description:
          '포인트로 얻은 요 씨앗 덕분에 이 황폐한 땅이 아름다운 숲으로 바뀔 거예요.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-002.gif',
      },
      {
        point: 8500,
        title: '새싹 정령',
        description:
          '보세요! 씨앗이 자라 이렇게 어린 묘목이 되었어요. 무럭무럭 자라거라!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-003.gif',
      },
      {
        point: 9000,
        title: '나무 정령',
        description:
          '포인트 덕분에 나무들에게 물을 줄 수 있게 됐어요. 나무들이 무척 좋아할 거에요.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-004.gif',
      },
      {
        point: 9500,
        title: '숲 정령',
        description:
          '드디어 울창한 숲이 되었어요. 열심히 했더니 이렇게 멋진 결실을 맺었어요.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-005.gif',
      },
    ],
  },
  {
    id: 'Leoni',
    name: '레오니',
    minPoint: 10000,
    maxPoint: 13000,
    title: '레오니의 성장 스토리',
    description:
      '나는 사자 레오니, 에드몽 왕자를 지키는 멋진 기사였지. 마법 때문에 이 사자가 되었지만, 왕자님을 지키기로 맹세했기 때문에 언제까지나 왕자님 곁에 있어야 해.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/leoni_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/leoni_02.png',
    list: [
      {
        point: 10000,
        title: '레오니',
        description: '안녕! 난 멋진 보디가드가 꿈인 용감무쌍한 레오니야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-001.gif',
      },
      {
        point: 10500,
        title: '초급 수련생',
        description:
          '보디가드가 되기 위해 열심히 포인트를 모으며 운동중이야! 어때? 근육이 보여?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-002.gif',
      },
      {
        point: 11000,
        title: '상급 수련생',
        description:
          '무술을 익혀 보디가드 시험에 꼭 붙고 말거야! 친구들! 응원할거지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-003.gif',
      },
      {
        point: 11500,
        title: '경호원',
        description:
          '친구들 모두 축하해줘! 드디어 레오니가 보디가드가 되었어! 어때? 근사하지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-004.gif',
      },
      {
        point: 12000,
        title: '경호실장',
        description:
          '쉿! 친구들! 지금 아주 중요한 경호 임무를 맡았어! 걱정마! 잘 해낼거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-005.gif',
      },
      {
        point: 12500,
        title: '왕실경호실장',
        description:
          '친구들! 드디어 왕자님을 모시는 경호실장이 되었어. 내 꿈을 응원해줘서 고마워!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-006.gif',
      },
    ],
  },
  {
    id: 'Goma',
    name: '고마',
    minPoint: 13000,
    maxPoint: 16000,
    title: '고마의 성장 스토리',
    description:
      '나는 에드몽 왕자의 유모 고마 할머니란다. 마법에 걸려 곰이 되었지만, 푹신푹신…왕자님을 재우기에는 더 좋아졌지.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/goma_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/goma_02.png',
    list: [
      {
        point: 13000,
        title: '고마',
        description:
          '안녕. 난 이야기를 너무나 좋아해서 소설가가 되고픈 고마라고 해!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-001.gif',
      },
      {
        point: 13500,
        title: '독서가',
        description:
          '작가가 되려고 책들을 열심히 읽고 있어! 여러분도 책 많이 읽을거지?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-002.gif',
      },
      {
        point: 14000,
        title: '예비 소설가',
        description:
          '소설을 쓰고 있어! 친구들! 정말 멋진 이야기니까 기대해도 좋아!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-003.gif',
      },
      {
        point: 14500,
        title: '등단(새내기) 소설가',
        description:
          '친구들! 신문에 실린 내 사진 봤어? 내가 드디어 소설가로 등단했다구!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-004.gif',
      },
      {
        point: 15000,
        title: '인기 소설가',
        description:
          '이게 내 첫 베스트셀러 소설이야. 날 응원해 준 친구들 얘기도 있으니까 꼭 한 번 읽어봐!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-005.gif',
      },
      {
        point: 15500,
        title: '수상작가',
        description:
          '친구들이 열심히 투표해준 덕분에 내가 올해의 소설가상을 받았어! 정말 꿈만 같아!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-006.gif',
      },
    ],
  },
  {
    id: 'Gino',
    name: '지노',
    minPoint: 16000,
    maxPoint: 20000,
    title: '지노의 성장 스토리',
    description:
      '나는 세상에서 제일 힘센 공룡, 지노야. 나는 원래 씨름왕이었어. 에드몽 왕자님을 지키기 위해 힘센 공룡이 되었지만 언젠가 멋진 용이 되고 싶어.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gino_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gino_02.png',
    list: [
      {
        point: 16000,
        title: '지노',
        description:
          '얘들아! 반가워! 난 힘이 장사인 지노야. 씨름왕이 내 꿈이지.',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-001.gif',
      },
      {
        point: 16667,
        title: '초등 씨름부 선수',
        description:
          '씨름왕이 되기 위해 씨름부에 들어왔어! 하지만 아직은 연습생이야 ㅠㅠ',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-002.gif',
      },
      {
        point: 17334,
        title: '중등 씨름부 선수',
        description: '몸을 튼튼히 유지하기 위해서는 뭐든지 잘 먹어야 해!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-003.gif',
      },
      {
        point: 18000,
        title: '고등 씨름부 선수',
        description:
          '얏호! 드디어 내가 씨름대회에 출전한대. 내가 익힌 멋진 씨름 기술을 보여줄거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-004.gif',
      },
      {
        point: 18667,
        title: '프로 씨름선수',
        description:
          '아!!!!! 첫 경기를 멋지게 이겼어! 결승까지 꼭 갈거야! 지켜봐줘!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-005.gif',
      },
      {
        point: 19334,
        title: '씨름왕',
        description: '이겼어!! 이겼어!! 드디어 내가 최고의 씨름왕이 된거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-006.gif',
      },
    ],
  },
  {
    id: 'Edmond',
    name: '에드몽',
    minPoint: 20000,
    maxPoint: 30000,
    title: '에드몽의 성장 스토리',
    description:
      '나는 에드몽 왕자야. 외로울 때면 아이들을 찾아가 창틀마다 내 초대장을 놓고 오는데…. 별로 소용이 없는 것 같아. 아이 같은 모습이지만, 실은 15살이야. 쓸쓸한 나를 위해 친구가 되어줄 사람 없을까?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/edmond_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/edmond_02.png',
    list: [
      {
        point: 20000,
        title: '에드몽',
        description:
          '안녕. 난 먼 행성에 사는 왕자 에드몽이야. 난 외톨이라 친구가 정말 필요해',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-001.gif',
      },
      {
        point: 21600,
        title: '심심한 왕자',
        description:
          '어때? 예쁘지? 나는 심심할때면 언덕에 올라 은하수를 만들곤 해!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-002.gif',
      },
      {
        point: 23200,
        title: '외로운 왕자',
        description:
          '주위에 함께 놀 친구가 하나도 없어! 너가 내 친구가 되어줄래?',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-003.gif',
      },
      {
        point: 24800,
        title: '확신하는 왕자',
        description:
          '온 우주에 초대장을 보내려고 해! 이 초대장을 보고 분명 친구가 찾아올거야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-004.gif',
      },
      {
        point: 26400,
        title: '설레는 왕자',
        description: '우주선이 오고 있어! 누가 날 찾아왔을까? 너무너무 궁금해!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-005.gif',
      },
      {
        point: 28000,
        title: '행복한 왕자',
        description:
          '드디어 도도라는 친구를 만났어! 드디어 나도 친구가 생겼다고!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-006.gif',
      },
    ],
  },
  {
    id: 'Dodo1',
    name: '도도',
    minPoint: 30000,
    maxPoint: 40000,
    title: '도도의 성장 스토리',
    description:
      '나는 도도야. 수줍은 성격이지만, 신나는 모험과 엉뚱한 상상을 좋아하지. 네가 모험에 관심이 있다면, 넌 이미 내 친구야. 나랑 같이 모험을 떠나 볼래?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gold_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gold_02.png',
    list: [
      {
        point: 30000,
        title: '',
        description: '뭐? 30,000 포인트가 넘었다고? 좋아! 계속 가는거야!!!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gold_01.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gold_01.gif',
      },
    ],
  },
  {
    id: 'Dodo2',
    name: '도도',
    minPoint: 40000,
    maxPoint: 50000,
    title: '도도의 성장 스토리',
    description:
      '나는 도도야. 수줍은 성격이지만, 신나는 모험과 엉뚱한 상상을 좋아하지. 네가 모험에 관심이 있다면, 넌 이미 내 친구야. 나랑 같이 모험을 떠나 볼래?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/platinum_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/platinum_02.png',
    list: [
      {
        point: 40000,
        title: '도도',
        description:
          '정말 축하해! 40,000 포인트 돌파 기념으로 준비한 꽃다발이야!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/platinum_01.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/platinum_01.gif',
      },
    ],
  },
  {
    id: 'Dodo3',
    name: '도도',
    minPoint: 50000,
    maxPoint: 50000,
    title: '도도의 성장 스토리',
    description:
      '나는 도도야. 수줍은 성격이지만, 신나는 모험과 엉뚱한 상상을 좋아하지. 네가 모험에 관심이 있다면, 넌 이미 내 친구야. 나랑 같이 모험을 떠나 볼래?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/titanium_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/titanium_02.png',
    list: [
      {
        point: 50000,
        title: '도도',
        description:
          '50,000 포인트를 돌파라니 믿어지지가 않아! 정말 멋지고 대단해!',
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/titanium_01.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/titanium_01.gif',
      },
    ],
  },
]

const dodofriendsEn: DodoFriends[] = [
  {
    id: 'Baro',
    name: '바로',
    minPoint: 0,
    maxPoint: 100,
    title: 'The Story of Baro',
    description:
      'I am Baro, the boss of the attic popcorn trio. I never lose hope or courage in any kind of situation. After meeting Dodo, I became a pirate captain. My dream is to travel around the world and go on wild adventures!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/baro_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/baro_02.png',
    list: [
      {
        point: 0,
        title: 'Baro',
        description: `Hi, I'm Baro. I'm going to be the coolest pirate king in the world!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-001.gif',
      },
      {
        point: 25,
        title: 'Pirate Baro',
        description: `Ahoy maties! I've finally become the pirate I've always dreamed of! There's no stopping me now!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-002.gif',
      },
      {
        point: 50,
        title: 'Pirate Captain Baro',
        description: `Thanks to the compass I bought with points, I've finally found Treasure Island!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-003.gif',
      },
      {
        point: 75,
        title: 'Pirate King Baro',
        description: `Yo ho ho! I'm the world's greatest pirate king! Aren't I the coolest?`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/baro-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/baro-004.gif',
      },
    ],
  },
  {
    id: 'Chello',
    name: '첼로',
    minPoint: 100,
    maxPoint: 300,
    title: 'The Story of Chello',
    description:
      'My name is Chello! I have a beautiful voice and a cherry-scented face. I love to sing and dance, and someday, I’m going to become a famous singer!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/chello_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/chello_02.png',
    list: [
      {
        point: 100,
        title: 'Chello',
        description: `Hi! I'm Chello and my dream is to become a great singer! Nice to meet you.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-001.gif',
      },
      {
        point: 150,
        title: 'Singer Trainee Chello',
        description: `To follow my dream, I've signed up for voice lessons! I'm going to practice very hard!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-002.gif',
      },
      {
        point: 200,
        title: 'Pop Star Chello',
        description: `Thanks to the points, I've released my first album! Would you like to listen to my cool song?`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-003.gif',
      },
      {
        point: 250,
        title: 'Vocal Queen Chello',
        description: `Finally, I'm Vocal Queen! Let's celebrate!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/chello-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/chello-004.gif',
      },
    ],
  },
  {
    id: 'Millo',
    name: '밀로',
    minPoint: 300,
    maxPoint: 600,
    title: 'The Story of Millo',
    description:
      'I’m Millo, a good old plain piece of popcorn. Thanks to Dodo’s magic, I became an awesome engineer! I’m good at using my hands! I can build anything!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/millo_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/millo_02.png',
    list: [
      {
        point: 300,
        title: 'Millo',
        description: `Hi! I'm Milo! My dream is to make an awesome spaceship.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-001.gif',
      },
      {
        point: 375,
        title: 'Spaceship Researcher Milo',
        description: `I've been studying hard to build a spaceship. I'm getting closer to realizing my dream!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-002.gif',
      },
      {
        point: 450,
        title: 'Spaceship Professor Milo',
        description: `Wow! I'm already building a spaceship with the points I've collected! Get ready to be impressed!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-003.gif',
      },
      {
        point: 525,
        title: 'Spaceship Director Milo',
        description: `Take a look everyone! The spaceship I made is entering space! My dream finally came true!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/millo-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/millo-004.gif',
      },
    ],
  },
  {
    id: 'Jack',
    name: '잭',
    minPoint: 600,
    maxPoint: 1000,
    title: 'The Story of Jack',
    description:
      'I’m Jack, the mascot of Anything N’ Everything General Store. The once melancholy basement now has a happy and warm atmosphere thanks to me. Someday, I’m going to light up the world with my warmth.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/jack_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/jack_02.png',
    list: [
      {
        point: 600,
        title: 'Jack',
        description: `Hi! I'm timid Jack. But from now on, I'm going to show you just how confident I can be!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-001.gif',
      },
      {
        point: 700,
        title: 'Citizen Hero Jack',
        description: `The points brought my confidence up and I was selected to be in the candidate pool!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-002.gif',
      },
      {
        point: 800,
        title: 'Mayor Candidate Jack',
        description: `I gave a great speech and I'm running as a mayor candidate! Cheer for me!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-003.gif',
      },
      {
        point: 900,
        title: 'Pumpkin Mayor Jack',
        description: `I finally became a mayor! If you work hard, your dreams can come true!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/jack-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/jack-004.gif',
      },
    ],
  },
  {
    id: 'Blanc',
    name: '블랑',
    minPoint: 1000,
    maxPoint: 1500,
    title: 'The Story of Blanc',
    description:
      'I’m Blanc and I have many nicknames. My friends call me a dust monster, a cotton ball, a crybaby, and White Snow… I’m the biggest out of everyone here, but I have a fragile heart! Please treat me with love and care!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/blanc_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/blanc_02.png',
    list: [
      {
        point: 1000,
        title: 'Blanc',
        description: `Hi! My name is Blanc! My friends call me a dust bunny but I like things clean!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-001.gif',
      },
      {
        point: 1125,
        title: 'Intern Blanc',
        description: `I'm going to develop a vaccine to protect people from bad viruses!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-002.gif',
      },
      {
        point: 1250,
        title: 'Resident Blanc',
        description: `Just wait a little longer! My vaccine is almost ready!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-003.gif',
      },
      {
        point: 1375,
        title: 'Dr. Blanc',
        description: `The vaccine is finally here! You can now play without worrying about getting sick!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/blanc-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/blanc-004.gif',
      },
    ],
  },
  {
    id: 'Sheila',
    name: '씰라',
    minPoint: 1500,
    maxPoint: 2500,
    title: 'The Story of Sheila',
    description:
      'Boo! Hehehe. Did I scare you? I’m Sheila. I was born in a ghost factory, but I came into this world cute and petite. I’m happy because there is only one kid ghost like me!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/sheila_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/sheila_02.png',
    list: [
      {
        point: 1500,
        title: 'Sheila',
        description: `Hi, I'm Sheila and I love food! My dream is to become the greatest chef in the world!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-001.gif',
      },
      {
        point: 1750,
        title: 'Dish Washer Sheila',
        description: `Even though I'm a dish washer, one day I'll become a world-class chef!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-002.gif',
      },
      {
        point: 2000,
        title: 'Chef Sheila',
        description: `I did it! I'm a chef! I'm going to create a new dish everyone will love!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-003.gif',
      },
      {
        point: 2250,
        title: 'Executive Chef Sheila',
        description: `Here! Try it! Do you like my signature dish? It's called Sheila's Pie!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/sheila-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/sheila-004.gif',
      },
    ],
  },
  {
    id: 'Tori',
    name: '토리',
    minPoint: 2500,
    maxPoint: 5000,
    title: 'The Story of Tori',
    description:
      'I’m Tori. I was born from an acorn in an oak forest. From early dawn to late night, I work nonstop. But there is one thing that upsets me a lot. It’s that a squirrel named Roro keeps stealing my acorns! UGH!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/tori_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/tori_02.png',
    list: [
      {
        point: 2500,
        title: 'Tori',
        description: `Hey guys! I'm Tori, nice to meet you! I dream of becoming a famous explorer!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-001.gif',
      },
      {
        point: 3000,
        title: 'Rock Climber Tori',
        description: `An explorer needs to be good at rock climbing. What do you think? Pretty good?`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-002.gif',
      },
      {
        point: 3500,
        title: 'Jungle Explorer Tori',
        description: `I traded some points for a tent! Our jungle survival training starts today!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-003.gif',
      },
      {
        point: 4000,
        title: 'Rafting Expert Tori',
        description: `A great explorer must know how to raft! Forward paddle! Forward paddle!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-004.gif',
      },
      {
        point: 4500,
        title: 'Greatest Explorer Tori',
        description: `I finally reached the South Pole! I'm the greatest explorer in the world!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/tori-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/tori-005.gif',
      },
    ],
  },
  {
    id: 'Roro',
    name: '로로',
    minPoint: 5000,
    maxPoint: 7500,
    title: 'The Story of Roro',
    description:
      'I’m Roro, a cute masked squirrel that lives in the oak tree forest. By the way, I’m not a thief, this mask is only for fashion. I don’t get why everyone around me works so hard ‘cause I’m too busy having fun!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/roro_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/roro_02.png',
    list: [
      {
        point: 5000,
        title: 'Roro',
        description: `Hi friends! I'm going to become a brave hero like Robinhood!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-001.gif',
      },
      {
        point: 5500,
        title: 'Secret Agent Roro',
        description: `Shh! It's me, Roro! Pretend you don't know me! I'm going to punish the greedy lord today!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-002.gif',
      },
      {
        point: 6000,
        title: 'Acorn Angel Roro',
        description: `Yeah! I've got the acorns! I'm giving them out to the poor.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-003.gif',
      },
      {
        point: 6500,
        title: 'Acorn Hero Roro',
        description: `I'm being chased by the greedy lord! Thanks to the bike I bought with points, I won't get caught!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-004.gif',
      },
      {
        point: 7000,
        title: 'Rorohood',
        description: `Finally, I've finally chased away the greedy lord! Now, there's peace again in the forest.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/roro-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/roro-005.gif',
      },
    ],
  },
  {
    id: 'Green Thumb',
    name: '파파그린썸',
    minPoint: 7500,
    maxPoint: 10000,
    title: 'The Story of Green Thumb',
    description:
      'Oh ho ho! I am the guardian of the oldest oak tree in town. The kids here call me Papa Greenthumb. I’m busy all year round taking care of the forest.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/greenthumb_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/greenthumb_02.png',
    list: [
      {
        point: 7500,
        title: 'Papa Greenthumb',
        description: `I'm Papa Greenthumb and I love nature. Ha ha ha!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-001.gif',
      },
      {
        point: 8000,
        title: 'Seed Alchemist Papa Greenthumb',
        description: `With the seeds I bought with points, I'm going to transform this empty land into a beautiful forest!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-002.gif',
      },
      {
        point: 8500,
        title: 'Sprout Wizard Papa Greenthumb',
        description: `Look! The seeds grew into healthy seedlings. Let's hope they grow big and strong!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-003.gif',
      },
      {
        point: 9000,
        title: 'Tree Mage Papa Greenthumb',
        description: `I was able to water the trees with the points I earned. The trees will be very happy.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-004.gif',
      },
      {
        point: 9500,
        title: 'Forest Spirit Papa Greenthumb',
        description: `What a dense forest! With hard work comes wonderful results.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/greenthumb-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/greenthumb-005.gif',
      },
    ],
  },
  {
    id: 'Leoni',
    name: '레오니',
    minPoint: 10000,
    maxPoint: 13000,
    title: 'The Story of Leoni',
    description:
      'I’m Leoni the lion, a wonderful knight who protects Prince Edmond. An evil curse turned me into a lion. However, I’m always by the prince’s side because I swore to protect him with my life!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/leoni_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/leoni_02.png',
    list: [
      {
        point: 10000,
        title: 'Leoni',
        description: `Hi, I'm Leoni and my dream is to become the toughest bodyguard!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-001.gif',
      },
      {
        point: 10500,
        title: 'Novice Athlete Leoni',
        description: `I'm training hard to become the best bodyguard! Watch me flex my muscles!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-002.gif',
      },
      {
        point: 11000,
        title: 'Taekwondo Master Leoni',
        description: `I will definitely pass the bodyguard exam! Make sure to cheer me on!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-003.gif',
      },
      {
        point: 11500,
        title: 'Bodyguard Leoni',
        description: `It's official. I'm a bodyguard! Let's celebrate!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-004.gif',
      },
      {
        point: 12000,
        title: 'Royal Guard Leoni',
        description: `Shh! I'm in the middle of a secret mission! Don't worry, I got this!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-005.gif',
      },
      {
        point: 12500,
        title: 'Royal Knight Leoni',
        description: `My duty is to protect Prince Edmond. Thanks for supporting my dream!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/leoni-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/leoni-006.gif',
      },
    ],
  },
  {
    id: 'Goma',
    name: '고마',
    minPoint: 13000,
    maxPoint: 16000,
    title: 'The Story of Goma',
    description:
      'I’m Prince Edmond’s nanny, Goma. After getting cursed, I was transformed into a bear. However, it became easier for me to put the prince to sleep for nap time as I am fluffier than ever!',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/goma_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/goma_02.png',
    list: [
      {
        point: 13000,
        title: 'Goma',
        description: `Hi, I'm Goma. My dream is to become an author because I love stories!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-001.gif',
      },
      {
        point: 13500,
        title: 'Bookworm Goma',
        description: `In order to become a writer, I need to read lots of books! Come on, read with me!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-002.gif',
      },
      {
        point: 14000,
        title: 'Writer Assistant Goma',
        description: `I'm writing my first book! Get ready for a good read it because it's going to be awesome!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-003.gif',
      },
      {
        point: 14500,
        title: 'Novice Writer Goma',
        description: `Guys! Did you see my photo in the article? I'm officially a writer now!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-004.gif',
      },
      {
        point: 15000,
        title: 'Bestseller Author Goma',
        description: `Here it is! My first bestseller novel! I wrote about my friends, so make sure to put it on your to-read list!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-005.gif',
      },
      {
        point: 15500,
        title: 'Award-Winning Author Goma',
        description: `I can't believe it! I've won the author of the year award!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/goma-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/goma-006.gif',
      },
    ],
  },
  {
    id: 'Gino',
    name: '지노',
    minPoint: 16000,
    maxPoint: 20000,
    title: 'The Story of Gino',
    description:
      'I’m Gino, the strongest dinosaur in the world. I used to be a professional wrestler, but now I’m a powerful dinosaur protecting Prince Edmond. In the near future, I’d like to become a wonderful dragon.',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gino_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gino_02.png',
    list: [
      {
        point: 16000,
        title: 'Gino',
        description: `Hey guys, it's Gino! I'm strong, and my dream is to become a champion wrestler!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-001.gif',
      },
      {
        point: 16667,
        title: 'Athlete Gino',
        description: `In order to grow strong and healthy, you need to eat well!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-002.gif',
      },
      {
        point: 17334,
        title: 'Junior Wrestler Gino',
        description: `I joined the wrestling club to become a pro, but I still have a long way to go.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-003.gif',
      },
      {
        point: 18000,
        title: 'Amateur Wrestler Gino',
        description: `WOOHOO! I'm finally entering a wrestling contest! Watch me show off my awesome skills!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-004.gif',
      },
      {
        point: 18667,
        title: 'Pro Wrestler Gino',
        description: `EEEEEUUURGH! I won my first match! Just watch me reach the top!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-005.gif',
      },
      {
        point: 19334,
        title: 'Champion Wrestler Gino',
        description: `I won! I won! I'm the toughest pro wrestler in history!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/gino-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gino-006.gif',
      },
    ],
  },
  {
    id: 'Edmond',
    name: '에드몽',
    minPoint: 20000,
    maxPoint: 30000,
    title: 'The Story of Edmond',
    description:
      'I’m Prince Edmond. When I feel lonely, I leave invitations on children’s window sills, but I don’t think it’s of much use. I may look like a child on the outside, but I’m actually 15 years old. Can you be my friend?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/edmond_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/edmond_02.png',
    list: [
      {
        point: 20000,
        title: 'Edmond',
        description: `Hi. I'm Prince Edmond and I live on a distant planet. Will you be my friend?`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-001.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-001.gif',
      },
      {
        point: 21600,
        title: 'Bored Prince Edmond',
        description: `What do you think? Pretty nice, right? I like to make galaxies with my wand when I get bored.`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-002.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-002.gif',
      },
      {
        point: 23200,
        title: 'Lonely Prince Edmond',
        description: `I have no friends to hang out with! Will you hang out with me?`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-003.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-003.gif',
      },
      {
        point: 24800,
        title: 'Confident Prince Edmond',
        description: `I'm sending an invitation to everyone in space! I'm sure someone will show up to be my friend!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-004.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-004.gif',
      },
      {
        point: 26400,
        title: 'Excited Prince Edmond',
        description: `Look at the spaceship! I wonder who it is! I'm so excited to meet them!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-005.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-005.gif',
      },
      {
        point: 28000,
        title: 'Happy Prince Edmond',
        description: `I've finally made a friend. Her name is Dodo! I'm so happy!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/edmond-006.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/edmond-006.gif',
      },
    ],
  },
  {
    id: 'Dodo1',
    name: '도도',
    minPoint: 30000,
    maxPoint: 40000,
    title: 'The Story of Dodo1',
    description:
      'I’m Dodo. I may be shy, but I like going on exciting adventures and letting my imagination go wild. If you’re a fan of going on adventures, then you’re already my friend! The next adventure is always just around the corner, so what are we waiting for?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gold_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gold_02.png',
    list: [
      {
        point: 30000,
        title: '',
        description: `What? You passed the 30,000 point mark? Great job! Keep it up!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/gold_01.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/gold_01.gif',
      },
    ],
  },
  {
    id: 'Dodo2',
    name: '도도',
    minPoint: 40000,
    maxPoint: 50000,
    title: 'The Story of Dodo2',
    description:
      'I’m Dodo. I may be shy, but I like going on exciting adventures and letting my imagination go wild. If you’re a fan of going on adventures, then you’re already my friend! The next adventure is always just around the corner, so what are we waiting for?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/platinum_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/platinum_02.png',
    list: [
      {
        point: 40000,
        title: '도도',
        description: `Congratulations! Here's a bouquet to celebrate reaching the 40,000 point mark!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/platinum_01.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/platinum_01.gif',
      },
    ],
  },
  {
    id: 'Dodo3',
    name: '도도',
    minPoint: 50000,
    maxPoint: 50000,
    title: 'The Story of Dodo3',
    description:
      'I’m Dodo. I may be shy, but I like going on exciting adventures and letting my imagination go wild. If you’re a fan of going on adventures, then you’re already my friend! The next adventure is always just around the corner, so what are we waiting for?',
    imagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/titanium_01.png',
    lockImagePath:
      'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/titanium_02.png',
    list: [
      {
        point: 50000,
        title: '도도',
        description: `Wow! You've passed the 50,000 point mark! You're amazing!`,
        imagePath:
          'https://wcfresource.a1edu.com/newsystem/image/character/subcharacter/titanium_01.png',
        imagePath2:
          'https://wcfresource.a1edu.com/newsystem/image/character/dodofriends/motion/titanium_01.gif',
      },
    ],
  },
]
