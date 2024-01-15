import type { Metadata } from 'next';

export const MAIN_PAGE_METADATA: Metadata = {
  title: 'Nonton Anime Terbaik dengan Subtitle Indonesia | Ghanime',
  description:
    'Temukan pengalaman menonton anime terbaik di Ghanime. Saksikan ratusan judul anime favorit dengan terjemahan bahasa Indonesia dan kualitas resolusi tinggi. Jelajahi berbagai genre, dapatkan update episode terbaru, dan bergabunglah dengan komunitas penggemar anime. Mulai petualangan anime Anda sekarang!',
  keywords: [
    'nonton anime',
    'anime terbaik',
    'streaming anime',
    'subtitle Indonesia',
    'kualitas resolusi tinggi',
    'update anime terbaru',
  ],
  other: {
    'og:title': 'Nonton Anime Terbaik dengan Subtitle Indonesia | Ghanime',
    'og:description':
      'Temukan pengalaman menonton anime terbaik di Ghanime. Saksikan ratusan judul anime favorit dengan terjemahan bahasa Indonesia dan kualitas resolusi tinggi. Jelajahi berbagai genre, dapatkan update episode terbaru, dan bergabunglah dengan komunitas penggemar anime. Mulai petualangan anime Anda sekarang!',
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
  },
};

export const SCHEDULE_PAGE_METADATA: Metadata = {
  title: 'Jadwal Update Anime Terbaru dan Terlengkap | Ghanime',
  description:
    'Dapatkan jadwal update anime terbaru dan terlengkap di Ghanime. Saksikan keseruan episode terbaru, kisah menarik, dan peristiwa penting dalam dunia anime. Jangan lewatkan momen seru dari serial anime favorit Anda!',
  category: 'anime',
  keywords: [
    'anime',
    'ghanime',
    'nonton anime',
    'anime terbaik',
    'streaming anime',
    'subtitle Indonesia',
    'kualitas resolusi tinggi',
    'update anime terbaru',
    'jadwal update anime',
    'update anime terbaru',
    'jadwal rilis anime',
    'anime terlengkap',
    'streaming anime',
    'info anime',
    'jadwal episode anime',
  ],
  robots: {
    index: true,
  },
  other: {
    'og:title': 'Jadwal Update Anime Terbaru dan Terlengkap | Ghanime',
    'og:description':
      'Dapatkan jadwal update anime terbaru dan terlengkap di Ghanime. Saksikan keseruan episode terbaru, kisah menarik, dan peristiwa penting dalam dunia anime. Jangan lewatkan momen seru dari serial anime favorit Anda!',
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
  },
};

export const ONGOING_ANIME_METADATA: Metadata = {
  title: 'Ongoing anime | Ghanime',
  description:
    'Jangan lewatkan anime terbaru yang sedang tayang! Temukan jadwal lengkap dan update terkini dari serial anime yang masih berlangsung di Ghanime. Saksikan kisah-kisah seru dan karakter-karakter yang memukau setiap minggunya.',
  category: 'anime',
  keywords: [
    'anime',
    'ghanime',
    'nonton anime',
    'anime terbaik',
    'streaming anime',
    'subtitle Indonesia',
    'kualitas resolusi tinggi',
    'update anime terbaru',
    'ongoing anime',
    'jadwal anime',
    'anime terbaru',
    'update anime',
    'streaming anime',
    'anime bahasa indonesia',
    'info anime',
    'jadwal rilis anime',
  ],
  robots: {
    index: true,
  },
  other: {
    'og:title': 'Ongoing anime | Ghanime',
    'og:description':
      'Jangan lewatkan anime terbaru yang sedang tayang! Temukan jadwal lengkap dan update terkini dari serial anime yang masih berlangsung di Ghanime. Saksikan kisah-kisah seru dan karakter-karakter yang memukau setiap minggunya.',
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
  },
};

export const GENRE_PAGE_METADATA = ({
  genre,
  genres,
}: {
  genre?: AnimeGenre['judul'];
  genres: AnimeGenre[];
}): Metadata => ({
  title: `${genre || genre} anime | Ghanime`,
  description:
    'Jelajahi dunia anime melalui berbagai genre yang menarik di Anime Genre. Temukan anime terbaik dari genre action, romance, fantasy, dan banyak lagi. Dapatkan rekomendasi, ulasan, dan jadwal untuk setiap genre anime favorit Anda. Saksikan kisah-kisah seru dengan terjemahan bahasa Indonesia untuk pengalaman menonton yang lebih mendalam.',
  keywords: [
    'anime',
    'ghanime',
    'genre anime',
    'anime terbaik',
    'nonton anime',
    'anime terbaik',
    'streaming anime',
    'subtitle Indonesia',
    'kualitas resolusi tinggi',
    'update anime terbaru',
    'rekomendasi anime',
    'streaming anime',
    'info genre anime',
    'anime bahasa indonesia',
  ].concat(genres.map(({ judul }) => `${judul} anime`)),
  robots: {
    index: true,
  },
  category: 'anime',
  other: {
    'og:title': `${genre || genre} anime | Ghanime`,
    'og:description':
      'Jelajahi dunia anime melalui berbagai genre yang menarik di Anime Genre. Temukan anime terbaik dari genre action, romance, fantasy, dan banyak lagi. Dapatkan rekomendasi, ulasan, dan jadwal untuk setiap genre anime favorit Anda. Saksikan kisah-kisah seru dengan terjemahan bahasa Indonesia untuk pengalaman menonton yang lebih mendalam.',
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
    'og:type': genre || 'genre',
  },
});

export const ANIME_PAGE_METADATA = ({ anime }: { anime: Omit<Anime, 'eps'> }): Metadata => ({
  title: `${anime.judul} | Ghanime`,
  description: `Temukan pengalaman menonton anime${
    anime.nama.split(':')?.at(1) || ''
  } dengan Subtitle Indonesia. Saksikan setiap episode dengan terjemahan bahasa Indonesia dan resolusi penuh yang memikat. Jelajahi koleksi lengkap anime favorit, nikmati detail visual yang mengagumkan, dan rasakan keajaiban kisah-kisah unik yang hanya bisa Anda temui di sini. Nonton anime dengan resolusi lengkap sekarang untuk pengalaman menonton yang maksimal!`,
  category: 'anime',
  robots: {
    index: true,
  },
  keywords: [
    'anime',
    'ghanime',
    'anime terbaik',
    'nonton anime',
    'anime terbaik',
    'streaming anime',
    'subtitle Indonesia',
    'kualitas resolusi tinggi',
    'update anime terbaru',
    'rekomendasi anime',
    'streaming anime',
    'anime bahasa indonesia',
    anime.judul,
    anime.namaJapan.split(':')?.at(1) || '',
    anime.nama.split(':')?.at(1) || '',
  ],
  other: {
    'og:title': `${anime.judul} | Ghanime`,
    'og:description': `Temukan pengalaman menonton anime${
      anime.nama.split(':')?.at(1) || ''
    } dengan Subtitle Indonesia. Saksikan setiap episode dengan terjemahan bahasa Indonesia dan resolusi penuh yang memikat. Jelajahi koleksi lengkap anime favorit, nikmati detail visual yang mengagumkan, dan rasakan keajaiban kisah-kisah unik yang hanya bisa Anda temui di sini. Nonton anime dengan resolusi lengkap sekarang untuk pengalaman menonton yang maksimal!`,
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
    'og:type': 'video',
  },
});

export const SEARCH_PAGE_METADATA = ({ search_query }: { search_query: string }): Metadata => ({
  title: `Cari ribuan anime terkait ${decodeURIComponent(search_query)} anime | Ghanime`,
  category: 'anime',
  robots: {
    index: false,
  },
  other: {
    'og:title': `Cari ribuan anime terkait ${decodeURIComponent(search_query)} anime | Ghanime`,
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
    'og:type': 'video',
  },
});

export const ANIME_EPISODE_PAGE_METADATA = ({ episode }: { episode: AnimeEpisode }): Metadata => ({
  title: `${episode.judul} | Ghanime`,
  description: `Temukan pengalaman menonton anime ${episode.judul} dengan Subtitle Indonesia. Saksikan setiap episode dengan terjemahan bahasa Indonesia dan resolusi penuh yang memikat. Jelajahi koleksi lengkap anime favorit, nikmati detail visual yang mengagumkan, dan rasakan keajaiban kisah-kisah unik yang hanya bisa Anda temui di sini. Nonton anime dengan resolusi lengkap sekarang untuk pengalaman menonton yang maksimal!`,
  category: 'anime',
  keywords: [
    'anime',
    'ghanime',
    'anime terbaik',
    'rekomendasi anime',
    'nonton anime',
    'anime terbaik',
    'streaming anime',
    'subtitle Indonesia',
    'kualitas resolusi tinggi',
    'update anime terbaru',
    'streaming anime',
    'anime bahasa indonesia',
  ],
  robots: {
    index: true,
  },
  other: {
    'og:title': `${episode.judul} | Ghanime`,
    'og:description': `Temukan pengalaman menonton anime ${episode.judul} dengan Subtitle Indonesia. Saksikan setiap episode dengan terjemahan bahasa Indonesia dan resolusi penuh yang memikat. Jelajahi koleksi lengkap anime favorit, nikmati detail visual yang mengagumkan, dan rasakan keajaiban kisah-kisah unik yang hanya bisa Anda temui di sini. Nonton anime dengan resolusi lengkap sekarang untuk pengalaman menonton yang maksimal!`,
    'og:site_name': 'ghanime',
    'og:locale': 'id_ID',
    'og:type': 'video',
  },
});