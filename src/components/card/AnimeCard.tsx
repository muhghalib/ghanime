import Image from 'next/image';
import { Card } from '../shared/Card';
import { Skeleton } from '../shared/Skeleton';
import { Box } from '../shared/Box';
import { Typography } from '../shared/Typography';
import { PlayCircle } from 'lucide-react';

import Link from 'next/link';

type AnimeCardProps = Pick<Anime, 'title' | 'slug' | 'image' | 'rating' | 'status'>;

export const AnimeCard = ({ title, slug, image, rating, status }: AnimeCardProps) => {
  return (
    <Link href={`/anime/${slug}`}>
      <Card className="w-full cursor-pointer group/anime-card-wrapper flex flex-col h-full rounded-none shadow-none border-none">
        <Box className="w-full relative overflow-hidden aspect-[9/12]">
          <Image alt={title} src={image} fill priority />
          <Box className="z-10 grid place-content-center absolute transition-all h-8 group-hover/anime-card-wrapper:h-full duration-500 bottom-0 w-full bg-black/70">
            <Typography size="sm" color="white" weight="regular">
              rating {rating}
            </Typography>
            <Box className="mx-auto mt-1.5 text-white hidden group-hover/anime-card-wrapper:block">
              <PlayCircle width={52} height={52} strokeWidth={1} />
            </Box>
          </Box>
        </Box>
        <Box className="p-0 w-full pt-2">
          <Typography className="line-clamp-2">{title}</Typography>
        </Box>
      </Card>
    </Link>
  );
};

// eslint-disable-next-line react/display-name
AnimeCard.Skeleton = () => {
  return (
    <Card className="w-full cursor-pointer group/anime-card-wrapper flex flex-col h-full rounded-none shadow-none border-none">
      <Box className="w-full relative overflow-hidden aspect-[9/12]">
        <Skeleton className="w-full h-full" />
      </Box>
      <Box className="p-0 w-full pt-2">
        <Skeleton className="w-full max-w-36 h-8" />
      </Box>
    </Card>
  );
};
