export interface Page {
  route: string;
  text: string;
}

export const pages: Page[] = [
  { route: '/', text: '全国' },
  { route: '/prefectures', text: '都道府県' },
];
