export const BASE_URL = "https://osan-hackathon-project.vercel.app";
export const MBTI_CATEGORY = {
  ANALYST: 1,
  DIPLOMAT: 2,
  WATCHMAN: 3,
  EXPLORER: 4,
};

export const GENDER = {
  MALE: 1,
  FEMALE: 2,
};

export const GENDER_ARRAY = [
  {
    text: "男性",
    value: GENDER.MALE,
  },
  {
    text: "女性",
    value: GENDER.FEMALE,
  },
];

export const MBTI: {
  id: number;
  name_jp: string;
  name_en: string;
  desc: string;
  category: number;
  goodCompatibilityMbtis: number[]; // 追加部分
}[] = [
  {
    id: 1,
    name_jp: "建築家",
    name_en: "INTJ-A / INTJ-T",
    desc: "想像力が豊かで、戦略的な思考の持ち主。あらゆる物事に対して計画を立てる。",
    category: MBTI_CATEGORY.ANALYST,
    goodCompatibilityMbtis: [16, 10, 3], // ESFP, ISFJ, ENTJ
  },
  {
    id: 2,
    name_jp: "論理学者",
    name_en: "INTP-A / INTP-T",
    desc: "貪欲な知識欲を持つ革新的な発明家。",
    category: MBTI_CATEGORY.ANALYST,
    goodCompatibilityMbtis: [10, 14, 8], // ISFJ, ISFP, ENFP
  },
  {
    id: 3,
    name_jp: "指揮官",
    name_en: "ENTJ-A / ENTJ-T",
    desc: "大胆で想像力豊か、かつ強い意志を持つ指導者。常に道を見つけるか、道を切り開く。",
    category: MBTI_CATEGORY.ANALYST,
    goodCompatibilityMbtis: [1, 10, 7], // INTJ, ISFJ, ENFJ
  },
  {
    id: 4,
    name_jp: "討論者",
    name_en: "ENTP-A / ENTP-T",
    desc: "賢くて好奇心旺盛な思考家。知的挑戦には必ず受けて立つ。",
    category: MBTI_CATEGORY.ANALYST,
    goodCompatibilityMbtis: [6, 10, 8], // INFP, ISFJ, ENFP
  },
  {
    id: 5,
    name_jp: "提唱者",
    name_en: "INFJ-A / INFJ-T",
    desc: "物静かで神秘的だが、人々を非常に勇気づける飽くなき理想主義者。",
    category: MBTI_CATEGORY.DIPLOMAT,
    goodCompatibilityMbtis: [8, 14, 6], // ENFP, ISFP, INFP
  },
  {
    id: 6,
    name_jp: "仲介者",
    name_en: "INFP-A / INFP-T",
    desc: "詩人肌で親切な利他主義者。良い物事のためなら、いつでも懸命に手を差し伸べる。",
    category: MBTI_CATEGORY.DIPLOMAT,
    goodCompatibilityMbtis: [8, 5, 14], // ENFP, INFJ, ISFP
  },
  {
    id: 7,
    name_jp: "主人公",
    name_en: "ENFJ-A / ENFJ-T",
    desc: "カリスマ性があり、人々を励ますリーダー。聞く人を魅了する。",
    category: MBTI_CATEGORY.DIPLOMAT,
    goodCompatibilityMbtis: [3, 10, 11], // ENTJ, ISFJ, ESTJ
  },
  {
    id: 8,
    name_jp: "運動家",
    name_en: "ENFP-A / ENFP-T",
    desc: "情熱的で独創力があり、かつ社交的な自由人。常に笑いほほ笑みの種を見つけられる。",
    category: MBTI_CATEGORY.DIPLOMAT,
    goodCompatibilityMbtis: [6, 14, 16], // INFP, ISFP, ESFP
  },
  {
    id: 9,
    name_jp: "管理者",
    name_en: "ISTJ-A / ISTJ-T",
    desc: "実用的で事実に基づいた思考の持ち主。その信頼性は紛れもなく本物。",
    category: MBTI_CATEGORY.WATCHMAN,
    goodCompatibilityMbtis: [10, 12, 6], // ISFJ, ESFJ, INFP
  },
  {
    id: 10,
    name_jp: "擁護者",
    name_en: "ISFJ-A / ISFJ-T",
    desc: "非常に献身的で心の温かい擁護者。いつでも大切な人を守る準備ができている。",
    category: MBTI_CATEGORY.WATCHMAN,
    goodCompatibilityMbtis: [1, 7, 16], // INTJ, ENFJ, ESFP
  },
  {
    id: 11,
    name_jp: "幹部",
    name_en: "ESTJ-A / ESTJ-T",
    desc: "優秀な管理者で、物事や人々を管理する能力にかけては、右に出る者はいない。",
    category: MBTI_CATEGORY.WATCHMAN,
    goodCompatibilityMbtis: [7, 12, 16], // ENFJ, ESFJ, ESFP
  },
  {
    id: 12,
    name_jp: "領事",
    name_en: "ESFJ-A / ESFJ-T",
    desc: "非常に思いやりがあり社交的で、人気がある。常に熱心に人々に手を差し伸べている。",
    category: MBTI_CATEGORY.WATCHMAN,
    goodCompatibilityMbtis: [11, 16, 14], // ESTJ, ESFP, ISFP
  },
  {
    id: 13,
    name_jp: "巨匠",
    name_en: "ISTP-A / ISTP-T",
    desc: "大胆で実践的な思考を持つ実験者。あらゆる道具を使いこなす。",
    category: MBTI_CATEGORY.EXPLORER,
    goodCompatibilityMbtis: [16, 14, 8], // ESFP, ISFP, ENFP
  },
  {
    id: 14,
    name_jp: "冒険家",
    name_en: "ISFP-A / ISFP-T",
    desc: "柔軟性と魅力がある芸術家。常に進んで物事を探索し経験しようとする。",
    category: MBTI_CATEGORY.EXPLORER,
    goodCompatibilityMbtis: [5, 6, 8], // INFJ, INFP, ENFP
  },
  {
    id: 15,
    name_jp: "起業家",
    name_en: "ESTP-A / ESTP-T",
    desc: "賢くてエネルギッシュで、非常に鋭い知覚の持ち主。危険と隣り合わせの人生を心から楽しむ。",
    category: MBTI_CATEGORY.EXPLORER,
    goodCompatibilityMbtis: [16, 12, 8], // ESFP, ESFJ, ENFP
  },
  {
    id: 16,
    name_jp: "エンターテイナー",
    name_en: "ESFP-A / ESFP-T",
    desc: "自発性がありエネルギッシュで熱心なエンターテイナー。周りが退屈することは決してない。",
    category: MBTI_CATEGORY.EXPLORER,
    goodCompatibilityMbtis: [1, 10, 15], // INTJ, ISFJ, ESTP
  },
];

export const MBTI_BACKGROUND_COLOR = {
  [MBTI_CATEGORY.ANALYST]: "#E7DFEA",
  [MBTI_CATEGORY.DIPLOMAT]: "#D6ECE3",
  [MBTI_CATEGORY.WATCHMAN]: "#D9EAF0",
  [MBTI_CATEGORY.EXPLORER]: "#F9EED7",
};
export const MBTI_TEXT_COLOR = {
  [MBTI_CATEGORY.ANALYST]: "#88619A",
  [MBTI_CATEGORY.DIPLOMAT]: "#33A474",
  [MBTI_CATEGORY.WATCHMAN]: "#4298B4",
  [MBTI_CATEGORY.EXPLORER]: "#E4AE3A",
};
