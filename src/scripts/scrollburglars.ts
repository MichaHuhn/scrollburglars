import Amazon from '@/assets/scrollburglars/Amazon_2026-05-14.webp';
import AmazonPrimeVideo from '@/assets/scrollburglars/AmazonPrimeVideo_2026-05-14.mp4';
import Anker from '@/assets/scrollburglars/anker.com_2026-05-19.webp';
import Check24 from '@/assets/scrollburglars/check24.de_2026-05-20.webp';
import GitHub from '@/assets/scrollburglars/GitHub_2026-05-18.webp';
import MediaMarkt from '@/assets/scrollburglars/mediamarkt.de_2026-05-19.webp';
import SharkViniOne from '@/assets/scrollburglars/shark.vini.one_2026-05-17.webp';
import SpaceX from '@/assets/scrollburglars/SpaceX_2026-05-10.webp';
import SvgDavis7Sh from '@/assets/scrollburglars/svg.davis7.sh_2026-05-17.webp';

type Scrollburglar = {
  label: string;
  date: string;
  type: 'image' | 'video';
  file: string;
};

export const SCROLLBURGLARS = [
  {
    label: 'check24.de',
    date: '2026-05-20',
    type: 'image',
    file: Check24
  },
  {
    label: 'anker.com',
    date: '2026-05-19',
    type: 'image',
    file: Anker
  },
  {
    label: 'mediamarkt.de',
    date: '2026-05-19',
    type: 'image',
    file: MediaMarkt
  },
  {
    label: 'GitHub',
    date: '2026-05-18',
    type: 'image',
    file: GitHub
  },
  {
    label: 'svg.davis7.sh',
    date: '2026-05-17',
    type: 'image',
    file: SvgDavis7Sh
  },
  {
    label: 'shark.vini.one',
    date: '2026-05-17',
    type: 'image',
    file: SharkViniOne
  },
  {
    label: 'Amazon',
    date: '2026-05-14',
    type: 'image',
    file: Amazon
  },
  {
    label: 'Amazon Prime Video',
    date: '2026-05-14',
    type: 'video',
    file: AmazonPrimeVideo
  },
  {
    label: 'SpaceX',
    date: '2026-05-10',
    type: 'image',
    file: SpaceX
  }
] as const satisfies Scrollburglar[];
