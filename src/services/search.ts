import { Adapter, MetadataType } from '~/config/enum';

export type SearchMetadata = {
  title: string;
  description: string;
  type: MetadataType;
  image: string;
  audio?: string;
};

export type SearchResultLink = {
  type: Adapter;
  url: string;
  isVerified?: boolean;
};

export type SearchResult = {
  id: string;
  type: MetadataType;
  title: string;
  description: string;
  image: string;
  audio?: string;
  source: string;
  universalLink: string;
  links: SearchResultLink[];
};

export const search = async ({
  link,
}: {
  link: string;
}): Promise<SearchResult> => {
  // mock 5 search links

  return {
    id: '1',
    type: MetadataType.Song,
    title: 'Song Name abc',
    description: 'Song Description abc',
    image: 'https://i.scdn.co/image/ab67616d0000b27371d62ea7ea8a5be92d3c1f62',
    source: 'Spotify',
    universalLink: link,
    links: [
      {
        type: Adapter.YouTube,
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        isVerified: true,
      },
      {
        type: Adapter.Deezer,
        url: 'https://www.deezer.com/us/track/123456',
        isVerified: true,
      },
      {
        type: Adapter.AppleMusic,
        url: 'https://music.apple.com/us/album/123456',
        isVerified: true,
      },
      {
        type: Adapter.Tidal,
        url: 'https://listen.tidal.com/track/123456',
        isVerified: true,
      },
      {
        type: Adapter.SoundCloud,
        url: 'https://soundcloud.com/123456',
        isVerified: true,
      },
    ],
  };
};
