// Union
const Area = {
  Hokkaido: 'Hokkaido',
  Tohoku: 'Tohoku',
  Kanto: 'Kanto',
  Chubu: 'Chubu',
  Kinki: 'Kinki',
  Chugoku: 'Chugoku',
  Shikoku: 'Shikoku',
  Kyusyu: 'Kyusyu',
} as const;
export type Area = typeof Area[keyof typeof Area];

export interface Prefecture {
  name: string;
  area: Area;
}

export const prefectureList: Prefecture[] = [
  { name: 'Hokkaido', area: 'Hokkaido' },
  { name: 'Aomori', area: 'Tohoku' },
  { name: 'Akita', area: 'Tohoku' },
  // { name: '', area: '' },
];
