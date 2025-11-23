import { EventCardData } from './types';

export const eventFactory = (raw: any): EventCardData => {
  const image = raw?.images?.length > 0 ? raw.images[0]?.url : null;
  const venue = raw?._embedded?.venues?.[0]?.name || '';
  const city = raw?._embedded?.venues?.[0]?.city?.name || '';
  const date = raw?.dates?.start?.localDate || '';

  return {
    id: raw?.id ?? '',
    name: raw?.name ?? '',
    image,
    venue,
    city,
    date,
    info: raw?.info ?? '',
  };
};

export const eventListFactory = (events: any[]): EventCardData[] => {
  return events.map(event => eventFactory(event));
};

export const MOCK = {
  events: [
    {
      id: '1',
      name: 'Music Fiesta',
      info: 'A grand musical evening',
      images: [{ url: 'https://example.com/image1.jpg' }],
      dates: {
        start: {
          localDate: '2025-11-25',
        },
      },
      _embedded: {
        venues: [
          {
            name: 'City Concert Hall',
            city: { name: 'Mumbai' },
          },
        ],
      },
    },
    {
      id: '456',
      name: 'Stand-up Comedy Night',
      info: 'Laugh your heart out',
      images: [{ url: 'https://example.com/image2.jpg' }],
      dates: {
        start: {
          localDate: '2025-12-01',
        },
      },
      _embedded: {
        venues: [
          {
            name: 'Laugh Arena',
            city: { name: 'Delhi' },
          },
        ],
      },
    },
  ],
};
