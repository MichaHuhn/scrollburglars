import FileAmazon from '@/assets/scrollburglars/Amazon_2026-05-14.webp';
import FileAmazonPrimeVideo from '@/assets/scrollburglars/Amazon_Prime_Video_2026-05-14.mp4';
import FileSpaceX from '@/assets/scrollburglars/SpaceX_2026-05-10.webp';

type Scrollburglar = {
  label: string;
  date: string;
  type: 'image' | 'video';
  file: string;
};

export const SCROLLBURGLARS = [
  {
    label: 'Amazon',
    date: '2026-05-14',
    type: 'image',
    file: FileAmazon
  },
  {
    label: 'Amazon Prime Video',
    date: '2026-05-14',
    type: 'video',
    file: FileAmazonPrimeVideo
  },
  {
    label: 'SpaceX',
    date: '2026-05-10',
    type: 'image',
    file: FileSpaceX
  }
] as const satisfies Scrollburglar[];
