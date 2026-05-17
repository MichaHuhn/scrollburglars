type Scrollburglar = {
  label: string;
  date: string;
  type: 'image' | 'video';
  fileName: string;
};

export const SCROLLBURGLARS = [
  {
    label: 'Amazon',
    date: '2026-05-14',
    type: 'image',
    fileName: 'Amazon_2026-05-14.webp'
  },
  {
    label: 'Amazon Prime Video',
    date: '2026-05-14',
    type: 'video',
    fileName: 'Amazon_Prime_Video_2026-05-14.mp4'
  },
  {
    label: 'SpaceX',
    date: '2026-05-10',
    type: 'image',
    fileName: 'SpaceX_2026-05-10.webp'
  }
] as const satisfies Scrollburglar[];
